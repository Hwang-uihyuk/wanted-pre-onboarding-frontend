import React, { useEffect } from 'react'
import { useState } from 'react';

export default function SignIn() {

    const [form, setForm] = useState({
        email : "",
        password : "",
    });

    // const { validText, isValid } = useValid(form);

  return (
    <div>
       <form className='flex flex-col items-center self-center m-20 p-20 h-1000 w-flex border' >
         <div>{validText}</div>
       <Input 
        data-testid="email-input"
        placeholder='email을 입력하세요.'
        type="email"
        value={form.email}
        onChange={e => setForm({...form, email: e.target.value})}>
        valid ={!isValid.isEmail}
        </Input>

        <Input
        data-testid="password-input"
        placeholder='password를 입력하세요.'
        type="password"
        value={form.password}
        onChange={e => setForm({...form, password:e.target.value})}>    
        </Input>

        <button active
        data-testid="signpu-button"
        >회원가입</button>
        
        </form>
    </div>
    
  )
}

export default function Input(props : Prop) {
  const validText = validation(props.valueType)
  return(
    <Container isValid = {props.valid}>
      <input 
        type={props.type}
        placeholder={props.place}
        value={props.value}
        onChange={props.onChange}
        />
      <div>{validText}</div>
    </Container>
  )
}