import React, { useEffect } from 'react'
import { useState } from 'react';

export default function SignIn() {

    const [form, setForm] = useState({
        email : "",
        password : "",
    })
//   const [email, setEmail] = useState("")
//   const [password, setPassWord] = useState("")

//   const [msgEmail, setEmailMsg] = useState("")
//   const [msgPw, setPwMsg] = useState("")

//   const [isEmail, setIsEmail] = useState(false)
//   const [isPw, setIsPw] = useState(false)

//   const [activeBtn, setActiveBtn] = useState(true);

//   //email event handler
//   const onEmailHandler = (e) => {
//     const currentEmail = e.currentTarget.value;
//     setEmail(currentEmail);
//     const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$/;
//     if (!emailRegExp.test(currentEmail)){
//         console.log("email asdf")
//         setEmailMsg("이메일 형식에 맞게 입력해주세요 ex) hello@example.com")
//         setIsEmail(false);
//     }else{
//         setEmailMsg("사용 가능한 이메일입니다.");
//         setIsEmail(true)
//     }
//   }

//   //password event handler
//   const onPwHandler = (e) => {
//       const currentPw = e.currentTarget.value;
//       setPassWord(currentPw);
//       const pwRegExp = /^[a-z0-9]{8,12}$/;
//       if(!pwRegExp.test(currentPw)){
//           console.log("asdf")
//           setPwMsg("비밀번호를 8자 이상 입력해주세요.");
//           setIsPw(false);
//       }else{
//           console.log("success")
//           setPwMsg("사용 가능한 비밀번호 입니다.");
//           setIsPw(true);
//       }

 
//   }
        

//   const onSubmitHandler = (e) => {
//     e.preventdefault();
//     // if(isEmail && isPw){}

  return (
    <div>
       <form className='flex flex-col items-center self-center m-10 p-5 h-1000 w-flex border' >
       <input 
        data-testid="email-input"
        placeholder='email을 입력하세요.'
        type="email"
        value={form.email}
        onChange={e => setForm({...form, email: e.target.value})}>
        </input>

        <input
        data-testid="password-input"
        placeholder='password를 입력하세요.'
        type="password"
        value={form.password}
        onChange={e => setForm({...form, password:e.target.value})}>    
        </input>

        <button
        data-testid="signpu-button"
        >회원가입</button>
        
        </form>
    </div>
    
  )
}
