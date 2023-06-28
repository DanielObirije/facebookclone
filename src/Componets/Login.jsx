import React from 'react'
import './Login.css'
import { signInWithPopup } from 'firebase/auth'
import { useStateValue } from '../StateProvider'
import {actionTypes} from '../reducer'
import { auth,Provider } from '../Firebase'

function Login() {
   const [state,dispatch] = useStateValue()
   
    const Signinwith_Goggle = async()=>{
        signInWithPopup(auth,Provider)
        .then((result)=>{
            // console.log(result)
            dispatch( {type:actionTypes.SET_USER , user: result.user})
         
        })
        .catch((error)=> alert(console.error()))
    }
  return (
    <div className='login'>
         <div className="login_img">
           <img src='https://download.logo.wine/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.png'/>
        </div>
        <div className="login_img">
           <img src='https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png'/>   
        </div>
        <button className='btn' onClick={Signinwith_Goggle}>Sign in</button>

    </div>
  )
}

export default Login
