import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router';

export default function Todo() {
  //assignment4   
  const navigate = useNavigate();
  useEffect(()=>{
    !window.localStorage.getItem('Login') &&
        navigate('/signin')
  },[])

  const [todo,setTodo] = useState("")
  const onToDoHandler = (e) =>{
        setTodo(e.target.value)
  }

  const onCreateTodoHandler = (e) =>{
      axios.post("https://pre-onboarding-selection-task.shop/todos",{todo},{
          haders : {
            "Content-Type": "application/json",
            "Authorization" : `Bearer +window.localStorage.getItem("Login")`
          }
      }).then((response)=>{console.log("success")})
  }
  return (
    <div>

    <input 
        className ="border-4 rounded"
        data-testid="new-todo-input"
        placeholder='목록을 추가하세요'
        value={todo}
        onChange={onToDoHandler}
        />
    <button 
    data-testid="new-todo-add-button"
    onClick={onCreateTodoHandler}>추가</button>


    <li>
        <label>
            <input type="checkbox" />
            <span>TODO 1</span>
            
        </label>
    </li>
    
    <li>
        <label>
            <input type="checkbox" />
            <span>TODO 2</span>
        </label>
    </li>
                
        </div>
  )
}
