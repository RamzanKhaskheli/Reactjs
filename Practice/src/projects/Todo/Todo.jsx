import {React, useState} from 'react'
import './Todo.css'

function Todo() {
    const [inputValue, setInputValue] = useState('')
    const [item, setItem] = useState([])

   const handleSubmit = (e)=>{
        // setItem([inputValue])

        console.log(e)
   }


  return (
    <section className='todo-container' >
<header>
    <h1>Todo List</h1>
</header>

    <section className='form'>
        <form  onSubmit={(e)=>{e.preventDefault()}}>
            <div>
                <input type="text" className='todo-input'   onChange={(e)=>{setInputValue(e.target.value)}} autoComplete='off' placeholder='Enter your task'/>
            </div>

            <div>
                <button type='submit' onSubmit={()=>handleSubmit} className='todo-btn'>
                    Add Task
                </button>
            </div>
        
        </form> 

    </section>
    </section>
  )
}

export default Todo