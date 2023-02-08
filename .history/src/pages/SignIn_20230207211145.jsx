import React, { useEffect } from 'react'
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")

  const [msgEmail, setEmailMsg] = useState("")
  const [msgPw, setPwMsg] = useState("")

  const [isEmail, setIsEmail] = useState(false)
  const [isPw, setIsPw] = useState(false)

  const [activeBtn, setActiveBtn] = useState(true);
  //email event handler
  const onEmailHandler = (e) => {
    const currentEmail = e.currentTarget.value;
    setEmail(currentEmail);
    const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$/;
    if (!emailRegExp.test(currentEmail)){
        setEmailMsg("이메일 형식에 맞게 입력해주세요 ex) hello@example.com")
        setIsEmail(false);
    }else{
        setEmailMsg("사용 가능한 이메일입니다.");
        setIsEmail(true)
    }
  }

  //password event handler
  const onPwHandler = (e) => {
      const currentPw = e.currentTarget.value;
      setPassWord(currentPw);
      const pwRegExp = /^[a-z0-9]{8}$/;
      if(!pwRegExp.test(currentPw)){
          setPwMsg("비밀번호를 8자 이상 입력해주세요.");
          setIsPw(false);
      }else{
          setPwMsg("사용 가능한 비밀번호 입니다.");
          setIsPw(true);
      }

 
  }
        

  const onSubmitHandler = (e) => {
    e.preventdefault();
    if(isEmail && isPw){}
}
  return (
    <div className=''>
        <form className ="flex flex-col"onSubmit={onSubmitHandler}>
            <label>(이메일) </label>
            <input 
            className='p-10'
             data-testid="email-input"
             type="email"
             msg={msgEmail}
             value={email}
             onChange={onEmailHandler}
             placeholder='이메일을 입력하세요' />

             <label>(비밀번호)</label>
            <input
             data-testid="password-input"
             type ="password"
             msg={msgPw}
             value={password}
             onChange={onPwHandler}
             placeholder='비밀번호를 입력하세요'/>

            <button 
            data-testid="signup-button"
            disabled={isEmail && isPw ? !activeBtn :activeBtn}>회원가입</button>
        </form>
    </div>
  )
}
