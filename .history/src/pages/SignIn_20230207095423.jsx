import React from 'react'

export default function SignIn() {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
        <form className=''>
            <input className="rounded-md border-black"data-testid="email-input" />
            <input data-testid="password-input" />
            <button data-testid="signup-button">회원가입</button>
        </form>
    </div>
  )
}
