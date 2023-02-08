import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import {useForm, useWatch} from 'react-hook-form'
import { useFormAction } from 'react-router-dom';

export default function SignIn() {

   


  return (
    
    <div className="page">
    <div className="titleWrap">
      이메일과 비밀번호를
      <br />
      입력해주세요
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
          className="input"
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          value={pw}
          onChange={handlePw}
        />
      </div>
      <div className="errorMessageWrap">
        {!pwValid && pw.length > 0 && (
          <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
        )}
      </div>
    </div>

    <div>
      <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
        확인
      </button>
    </div>
  </div>
  )
}
