import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useRevalidator } from 'react-router';
import AddTodo from '../components/AddTodo';

export default function Todo() {
  //assignment4   
  const navigate = useNavigate();
  useEffect(()=>{
    !window.localStorage.getItem('Login') &&
        navigate('/signin')
  },[])


  const [todos , setTodos] = useState([
    {todo: 'todo1', userId:'1', id:"1", isCompleted:false},
    {todo: 'todo2', userId:'1', id:"2", isCompleted:false}
]
      )

  const [text,setText] = useState("")


  const onToDoHandler = (e) =>{
        setText(e.target.value)
  }

  const onCreateTodoHandler = (e) =>{
      const data = JSON.stringify({
          "todo" : text
      })
      axios.post("https://pre-onboarding-selection-task.shop/todos",data,{
          headers : {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${window.localStorage.getItem("Login")}`
          }
      }).then((response)=>{
          console.log("success")
          console.log(response.data)
          setTodos([...todos, response.data])
        })
  }

  const handleAdd = (todo) => {
    //새로운 투두를 todos에 업데이트 해야함.
}

  return (
    <div>

    <input 
        className ="border-4 rounded"
        data-testid="new-todo-input"
        placeholder='목록을 추가하세요'
        value={text}
        onChange={onToDoHandler}
        />
    <button 
    data-testid="new-todo-add-button"
    onClick={onCreateTodoHandler}>추가</button>

   
    


    {todos.map((item) => (
        <li key ={item.id}>
            <label>
                <input type="checkbox" checked={!item.isCompleted} />
                <span>{item.todo}</span>
            </label>
        </li>
    ))}

    {/* <AddTodo onAdd={handleAdd}/> */}
                
        </div>
  )
}
