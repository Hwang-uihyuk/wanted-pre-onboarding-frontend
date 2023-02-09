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


  const [todos , setTodos] = useState([])

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
        


        //assignment6
    //     axios.get("https://pre-onboarding-selection-task.shop/todos",{
    //       headers :{
    //         "Content-Type": "application/json",
    //         "Authorization" : `Bearer ${window.localStorage.getItem("Login")}`
    //       }
    //   }).then((response) => {
    //       console.log("데이터를 불러왔습니다.")
        //   console.log(response.data)
          setTodos([...todos, response.data])
    //   })
      //
        })
  }

  //처음에 불러오기 ㅇㅇ
  useEffect(() => {
    axios.get("https://pre-onboarding-selection-task.shop/todos",{
        headers :{
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${window.localStorage.getItem("Login")}`
        }
    }).then((response) => {
        console.log("데이터를 불러왔습니다.")
        console.log(response.data)
        setTodos(response.data)
    })
  },[])


  //assignment9 삭제하기
  const handleDelete = (item) => {
    console.log(item)
      axios.delete(`https://pre-onboarding-selection-task.shop/todos/${item}`,{
        headers :"Authorization" : `Bearer ${window.localStorage.getItem("Login")}`
      }).then("delete success")
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
                <input type="checkbox"/>
                <span className='text-xl m-1'>{item.todo}</span>

                
            </label>
            <button
                 className='border border-black m-0.5 font-bold bg-slate-100'
                 data-testid="modify-button">수정</button>
            <button 
                className='border border-black font-bold bg-slate-100'
                data-testid="delete-button"
                onClick={() =>handleDelete(item.id)} >삭제 </button>
        </li>
    ))}

    {/* <AddTodo onAdd={handleAdd}/> */}
                
        </div>
  )
}
