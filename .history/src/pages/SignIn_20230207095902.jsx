import React from 'react'

export default function SignIn() {
  return (
    <div className=''>
        <form>
            <label>(이메일) </label>
            <input 
             data-testid="email-input"
             placeholder='이메일을 입력하세요' />

             <label>비밀번호</label>
            <input
             data-testid="password-input"
             placeholder='비밀번호를 입력하세요'
             />
            <button data-testid="signup-button">회원가입</button>
        </form>
    </div>
  )
}
