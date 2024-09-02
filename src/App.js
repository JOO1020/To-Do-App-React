import React, { useState,useRef } from 'react'
import './App.css'
import { MdDelete } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
function App() {
  const [todos,setTodos] =useState([])
  const inputRef = useRef()
  const handleAddTodo = ()=>{
    const text = inputRef.current.value
  if(text.trim()===""){
    alert("please Enter Your Task First")
  }else{
    
    const newItem = {completed:false,text}
    setTodos([...todos,newItem])
    inputRef.current.value="";
  }
  }
  const handleItemDone=(index)=>{
    const newTodos = [...todos]
    newTodos[index].completed =!newTodos[index].completed 
    setTodos(newTodos)
  }
  const handlerDeleteItem =(index)=>{
    const newTodos2 = [...todos]
    newTodos2.splice(index,1)
    setTodos(newTodos2)
  }
  return (
    <>
    <div className='App'>
      <h2>to do list</h2>
      
      <input ref={inputRef} placeholder='Enter Your Task' />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(({text,completed},index)=>{
          return (
          <div key={index} className='todo'>
          <div className='iconTask'>
          <IoArrowForwardOutline  className='icon'/>
          <li  className={completed ? "done":""} onClick={()=>{handleItemDone(index)}}>{text}</li>

          </div>
          <span onClick={()=>{handlerDeleteItem(index)}}><MdDelete /></span>
          </div>)
        })}
      </ul>
    </div>
    </>
  )
}

export default App