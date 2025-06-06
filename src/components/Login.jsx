import React, { useState } from 'react'
import Header from './Header'
import { validateForm } from '../utils/validate'
import { useRef } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { USER_AVATAR } from '../utils/constants'
const Login = () => {
    const [errors, setErrors] = React.useState([]);
    const [isSignInForm,setIsSignInForm]=useState(true);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors=validateForm(email.current.value,password.current.value);
        if(errors){
            setErrors(errors);
            return;
        }
        else setErrors([]);

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user,{
                    displayName:name.current.value,
                    photoURL:USER_AVATAR,
                }).then(()=>{
                    const {uid,email,displayName,photoURL}=auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                    navigate('/browse');
                }).catch((error)=>{
                    console.log(error)
                })
                console.log(user);
                navigate('/browse');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }else{
            
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/browse');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }


    }

    const handleSignUp=()=>{
        setIsSignInForm(prev=>!prev);
    }

  return (
    <>
        <Header/>
        <div>   
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg"
                alt="netflix-login-bg"
                className='h-250'/>
            </div>
            <form className='w-3/12 absolute  text-white py-10 px-15 mx-auto right-0 left-0 my-30 rounded-md' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                <h1 className='my-4 font-bold text-3xl'>{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full rounded-md border' style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}/>}
                <input ref={email} type="text" placeholder='Email' className='p-4 my-4  w-full rounded-md border' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}/>
                <input ref={password} type="password" placeholder='Password' className='p-4 my-4  w-full rounded-md border' style={{backgroundColor: 'rgba(0, 0, 0, 0.5  )'}}/>
                {errors.map((error)=><h1 className="text-red-700">{error}</h1>)}
                <button className='bg-red-700 p-2 my-6 w-full cursor-pointer rounded-lg' onClick={handleSubmit}>{isSignInForm ? "Sign In":"Sign Up"}</button>
                <h1 className='my-2 '>New to Netflix? <span className="cursor-pointer" onClick={handleSignUp}>Sign up now.</span></h1>
            </form>

        </div>
    </>
  )
}


export default Login