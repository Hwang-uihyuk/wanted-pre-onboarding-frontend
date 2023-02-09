import React, { useState } from 'react'

export default function AddTodo({ onAdd }) {

   const [text,setText] = useState('');
  return ( 
  <form>
      <input 
      type ="text" 
      placeholder='Add todo'
  </form>
  )
}
