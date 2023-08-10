import React, { useState } from 'react'

const Create = () => {
    const [name,setName] = useState("")

   async function addTask(){
    
    let newDoc = {name}
    console.log(newDoc)

    await fetch("http://localhost:5050/todo", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newDoc)
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setName("");
    }
  return (
    <div className='create'>
      <input type="text" value={name} placeholder='Enter to add Task' onChange={(e) => {setName(e.target.value)}} />
      <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default Create
