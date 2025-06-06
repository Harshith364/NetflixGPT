import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from "react-redux";
import { LOGO_URL } from '../utils/constants';
const Header = () => {
    const user=useSelector(store=>store.user)
    const navigate=useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
        }).catch((error) => {
        // An error happened.
            navigate('/error');
        });
    }
    const dispatch=useDispatch();
    useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {

        const {uid,email,displayName,photoURL} = user;
        console.log(uid);
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate('/browse');
        } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
        }
    });

    return ()=>unsubscribe();
    },[])
  return (
    <div className="absolute px-2 py-3 z-20 bg-gradient-to-b from-black  w-screen flex justify-between">
        <img src={LOGO_URL}
        className="w-45 "
        alt="netflix-logo"/>
        {user && <div className='flex m-4'>
        <img src={user.photoURL} alt="user-logo"
        className='w-13 h-13 mx-2'/>
        <button className='font-bold text-white cursor-pointer' onClick={handleSignOut}>Sign out</button>
        </div>}
    </div>
  )
}

export default Header