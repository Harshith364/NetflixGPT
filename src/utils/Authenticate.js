import React from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase'
import { useEffect } from 'react'
import { addUser, removeUser } from './utils/userSlice'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Authenticate = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {

        const {uid,email,displayName,photoURL} = user;
        console.log(uid);
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate('/browse');
        
        } else {
        // User is signed out
        dispatch(removeUser());
        }
    });
    },[])
  return (
    <div>Authenticate</div>
  )
}

export default Authenticate