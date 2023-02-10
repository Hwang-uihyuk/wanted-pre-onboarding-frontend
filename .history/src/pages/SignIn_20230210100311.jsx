import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

export default function SignIn() {


  const [loginEmail, setLoginEmail] = useState('');
  const [loginPw, setLoginPw] = useState('');

  const navigate = useNavigate();

  const onhandleLoginEmail = (e) =>{
    setLoginEmail(e.target.value)
  }
  const onhandleLoginPw = (e) =>{
    setLoginPw(e.target.value)
  }
    
  const onLoginButton = () =>{
    const data = JSON.stringify({
      "email" : loginEmail,
      "password" : loginPw
    })

    axios.post("https://pre-onboarding-selection-task.shop/auth/signin",data,{
      headers : {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
    console.log("success")
    console.log(response)
    window.localStorage.setItem("Login", response.data.access_token)
    navigate('/todo')
  }).catch((error) => console.log(error))
  }

  //assignment4 토큰여부에 따른 리다이렉트
  useEffect(()=>{
    window.localStorage.getItem("Login") &&
    navigate('/todo')
  },[])
  
     

  return (
    <div className="page">
      
    <div className="titleWrap">
    로그인
    <br/>
    </div>

    <div className="contentWrap">
      <div className="inputTitle">이메일 주소</div>
      <div
        className="inputWrap"
      >
        <input
          className="input"
          type="text"
          placeholder="이메일을 입력하세요. ex)test@gmail.com "
          value={loginEmail}
          onChange={onhandleLoginEmail}
        />
      </div>
      

      <div style={{ marginTop: "26px" }} className="inputTitle">
        비밀번호
      </div>
      <div className="inputWrap">
        <input
          className="input"
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={loginPw}
          onChange={onhandleLoginPw}
        />
      </div>
      
    </div>

    <div>
      <button onClick={onLoginButton} className="bottomButton">로그인</button>
      <button onClick={() => navigate('/signup')} className='bottomButton'>회원가입</button>
      </div>
  </div>
  )
}
