import React, { useState } from 'react'

export default function SignIn() {


  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');



  const onhandleLoginEmail = (e) =>{
    
  }
  const onhandleLoginPw = (e) =>{}

  const onLoginButton = (e) =>{}
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
          value={email}
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
          value={pw}
          onChange={onhandleLoginPw}
        />
      </div>
      
    </div>

    <div>
      <button onClick={onLoginButton} className="bottomButton">
        로그인
      </button>
    </div>
  </div>
  )
}
