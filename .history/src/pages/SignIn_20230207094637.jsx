import React from 'react'

export default function SignIn() {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <form className='flex flex-col'>
            <input className="border"data-testid="email-input" />
            <input data-testid="password-input" />
            <button data-testid="signup-button">회원가입</button>
        </form>
    </div>
  )
}
