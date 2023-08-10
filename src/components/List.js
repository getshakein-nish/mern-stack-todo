import React, { useEffect, useState } from 'react'
import Todo from './Todo'

const List = () => {
    const [todos,setTodos] = useState([])

    useEffect(() =>{
        async function getList(){
            const response = await fetch('http://localhost:5050/todo')
            const data = await response.json()
            console.log(data)
            setTodos(data)
        }
        getList();
        return;
    },[todos])

    async function deleteTask (id){
      await fetch(`http://localhost:5050/todo/${id}` ,{
        method: "DELETE"
      })
      const newTodos = todos.filter(todo => todo._id !== id)
      setTodos(newTodos);
    }
    
  return (
    <div className='todo-container'>
      {
        todos.map(todo => (<Todo name={todo.name} key={todo._id} deleteTask={() => deleteTask(todo._id)} />))
      }
    </div>
  )
}

export default List
