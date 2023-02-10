import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

export default function SignIn() {


  const [loginEmail, setLoginEmail] = useState('');
  const [loginPw, setLoginPw] = useState('');

  const navigate = useNavigate();

  // const onhandleLoginEmail = (e) =>{
  //   setLoginEmail(e.target.value)
  // }
  // const onhandleLoginPw = (e) =>{
  //   setLoginPw(e.target.value)
  // }
    
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
  
     
//유효성검사

const [emailValid, setEmailValid] = useState(false);
const [pwValid, setPwValid] = useState(false);

const [notAllow, setNotAllow] = useState(true);

useEffect(() => {
  if(emailValid && pwValid) {
    setNotAllow(false);
    return;
  }
  setNotAllow(true);
}, [emailValid, pwValid]);


  const onhandleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const onhandleLoginPw = (e) => {
    setLoginPw(e.target.value);
    const regex =
      /.{8,}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };


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
      <div className="errorMessageWrap">
        {!emailValid && loginEmail.length > 0 && (
          <div>올바른 이메일을 입력해주세요.</div>
        )}
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
      <div className="errorMessageWrap">
        {!pwValid && loginPw.length > 0 && (
          <div> 8자 이상 입력해주세요.</div>
        )}
      </div>
    </div>

    <div>
      {/* 로그인 버튼 */}
      <button onClick={onLoginButton} className="bottomButton" disabled={notAllow}>로그인</button>
      {/* 회원가입 버튼 */}
      <button 
      onClick={() => navigate('/signup')} 
      className='bottomButton'>회원가입</button>
      </div>
  </div>
  )
}
