import React from 'react'

const Todo = (props) => {
  
  return (
    <div className='todo'>
      <h4>{props.name}</h4>
      <button onClick={props.deleteTask} >Delete</button>
    </div>
  )
}

export default Todo
