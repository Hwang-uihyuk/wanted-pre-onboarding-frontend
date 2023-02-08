
import { useState, useEffect } from 'react';


export default function useValid(changeValue : IValidType){

    const [validText,setValidText] = useState('')
    const [isValid, setIsValid] = useState({
        isEmail : false,
        isEmailConfirm : false,
        isPassword : false,
        isPasswordConfirm : false,
    });

    useEffect(() => {
        const exp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+[A-Za-z0-9\-]+/;
        if(!exp.test(changeValue.email)){
            setValidText('이메일을 확인해주세요');
            setIsValid({...isValid, isEmail:false});
        } else{
            setValidText('');
            setIsValid({...isValid, isEmail:true});
        }
    
    },[changeValue.email])


    useEffect(() => {
        if(changeValue.email !== changeValue.emailConfirm){
            setValidText("이메일이 같지 않습니다.")
            setIsValid({...isValid, isEmailConfirm: false});
        }else{
            setValidText('');
            setIsValid({...isValid, isEmailConfirm: true});
        }
    },[changeValue.emailConfirm])
}