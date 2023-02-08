import React from 'react'

export default function SignIn() {
  return (
    <div className=''>
        <form>
            <input 
             data-testid="email-input"
             placeholder='id' />
            <input
             data-testid="password-input"
             placeholder='sdf'
             />
            <button data-testid="signup-button">회원가입</button>
        </form>
    </div>
  )
}
