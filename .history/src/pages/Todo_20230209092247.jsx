import React, { useEffect } from 'react'

export default function Todo() {

  useEffect(()=>{

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
