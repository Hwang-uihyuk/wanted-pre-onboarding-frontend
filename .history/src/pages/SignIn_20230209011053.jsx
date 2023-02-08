import React, { useState } from 'react'

export default function SignIn() {


  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);

  const onhandleLoginEmail = (e) =>{

  }
  const onhandleLoginPw = (e) =>{

  }

  const onLoginButton = () =>{}
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
          placeholder="test@gmail.com"
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
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          value={pw}
          onChange={onhandleLoginPw}
        />
      </div>
      <div className="errorMessageWrap">
        {!pwValid && pw.length > 0 && (
          <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
        )}
      </div>
    </div>

    <div>
      <button onClick={onLoginButton} disabled={notAllow} className="bottomButton">
        로그인
      </button>
    </div>
  </div>
  )
}
