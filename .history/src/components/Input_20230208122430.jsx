import React from 'react'



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