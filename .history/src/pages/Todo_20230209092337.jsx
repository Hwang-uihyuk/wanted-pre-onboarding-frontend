import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router';

export default function Todo() {
  const navigate = useNavigate();
  useEffect(()=>{
    !window.localStorage.getItem &&
        navigate('/signin')
  },[])

  return (
    <div>
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
