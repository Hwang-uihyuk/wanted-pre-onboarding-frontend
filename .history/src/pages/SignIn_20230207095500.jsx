import React from 'react'

export default function SignIn() {
  return (
    <div className=''>
        <form>
            <input className="rounded-md border-black"data-testid="email-input" />
            <input
             data-testid="password-input"
             placeholder='sdf'
             />
            <button data-testid="signup-button">회원가입</button>
        </form>
    </div>
  )
}
