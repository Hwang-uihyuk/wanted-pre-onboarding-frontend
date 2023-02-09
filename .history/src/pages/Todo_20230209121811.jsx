import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router';

export default function Todo() {
  //assignment4   
  const navigate = useNavigate();
  useEffect(()=>{
    !window.localStorage.getItem('Login') &&
        navigate('/signin')
  },[])

  return (
    <div>
    <li>
        <label>
            <input type="checkbox" />
            <span>TODO 1</span>
            <input data-testid="new-todo-input"/>
            <button data-testid="new-todo-add-button">추가</button>

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
