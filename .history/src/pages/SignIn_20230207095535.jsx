import React from 'react'

export default function SignIn() {
  return (
    <div className=''>
        <form>
            <input 
             data-testid="email-input"
             placeholder='아이디를 입력하세요' />
            <input
             data-testid="password-input"
             placeholder='패스워드를 입력하세요'
             />
            <button data-testid="signup-button">회원가입</button>
        </form>
    </div>
  )
}
