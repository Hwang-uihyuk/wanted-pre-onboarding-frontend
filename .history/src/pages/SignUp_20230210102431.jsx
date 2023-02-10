import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function SignUp() {
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

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

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /.{8,}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = (e) => {
    e.preventDefault();
    
    const data = JSON.stringify({
      "email" : email,
      "password" : pw,
    });

    axios.post("https://pre-onboarding-selection-task.shop/auth/signup",data, {
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('success')
      navigate('/signin')
    })
   .catch(error => {
    console.log("오류입니당")
    console.log(error)})
  }

  
  //assignment4 토큰 여부에 따른 
    useEffect(()=>{
      window.localStorage.getItem("Login") &&
      navigate('/todo')
    },[])

  return (
    
    <div className="page">
    <div className="titleWrap">
      이메일과 비밀번호를
      <br />
      입력해주세요
    </div>

    <div className="contentWrap">
      <div className="inputTitle">이메일 주소</div>
      <div className="inputWrap">
        <input
          data-testid="email-input"
          className="input"
          type="text"
          placeholder="test@gmail.com"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="errorMessageWrap">
        {!emailValid && email.length > 0 && (
          <div>올바른 이메일을 입력해주세요.</div>
        )}
      </div>

      <div style={{ marginTop: "26px" }} className="inputTitle">
        비밀번호
      </div>
      <div className="inputWrap">
        <input
          data-testid="password-input"
          className="input"
          type="password"
          placeholder="8자 이상 입력해주세요."
          value={pw}
          onChange={handlePw}
        />
      </div>
      <div className="errorMessageWrap">
        {!pwValid && pw.length > 0 && (
          <div> 8자 이상 입력해주세요.</div>
        )}
      </div>
    </div>

    <div>
      <button 
        data-testid="signup-button"
        onClick={onClickConfirmButton} 
        disabled={notAllow} 
        className="bottomButton">
        회원가입
      </button>
    </div>
  </div>
  )
}
