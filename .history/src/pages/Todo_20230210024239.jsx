import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
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

  //assignment 
  const inputRef = useRef(null)
  
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
        headers :{
            "Authorization" : `Bearer ${window.localStorage.getItem("Login")}`
    }
      }).then(
          setTodos((todos) => todos.filter((todo) => todo.id!==item))
      )
    }

    //assignment10 수정하기
    const [editmode , setEditMode] =useState(false)

    const handleUpdate = (item) => {
        
        console.log(changeText)
        const data = JSON.stringify({
            "todo" : changeText,
            "isCompleted" :item.isCompleted
        })
        axios.put(`https://pre-onboarding-selection-task.shop/todos/${item.id}`,data,{
            headers :{
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${window.localStorage.getItem("Login")}`
        }}).then(response => {

            console.log(response.data)
            setTodos((todos) => todos.map((todo)=>todo.id === item.id ? {...todo, todo :response.data.todo} : todo))

            // setTodos((todos) => todos.map((todo)=> todo.isCompleted === true ? {...todo, isCompleted : false} : todo))
         
              //
              const data = JSON.stringify({
                "todo" : changeText
            })
            axios.post("https://pre-onboarding-selection-task.shop/todos",data,{
                headers : {
                  "Content-Type": "application/json",
                  "Authorization" : `Bearer ${window.localStorage.getItem("Login")}`
                }
            }).then((response)=>{
                console.log("success")
                console.log(response.data)

            console.log(todos)
        })
        //  


        } 
        )
       
    }


    const updateBtn = (item) => {
        console.log(item)
        console.log('sdf',todos)
        // set함수로 배열 객체 변경하는 법!!
        setTodos((todos) => todos.map((todo) => todo.id === item.id ? {...todo, isCompleted : !todo.isCompleted} : todo))
    }


    const [changeText , setChangeText] = useState('')
  return (
    <div>
        <div>
            <div aria-disabled>sdf</div>
        </div>
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
                {!item.isCompleted ? <span className='text-xl m-1'
                      >{item.todo}</span> : <input type="text" onChange={(e) =>{
                            setChangeText(e.target.value)
                      }}></input>}
                <input className='hidden'></input>
                
                
            </label>


           {!item.isCompleted ?  <button
                 className='border border-black m-0.5 font-bold bg-slate-100'
                 data-testid="modify-button"
                 onClick={() =>updateBtn(item)}
                 >수정</button> :<button onClick={()=>handleUpdate(item)}>제출</button>}


            {!item.isCompleted ? <button 
                className='border border-black font-bold bg-slate-100'
                data-testid="delete-button"
                onClick={() =>handleDelete(item.id)} >삭제 </button> 
                :<button>취소</button>}
        </li>
    ))}

    {/* <AddTodo onAdd={handleAdd}/> */}
                
        </div>
  )
}
