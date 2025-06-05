import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
    const user=useSelector(store=>store.user)
    const navigate=useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate('/');

        
        }).catch((error) => {
        // An error happened.
            navigate('/error');
        });
    }
  return (
    <div className="absolute px-2 py-3 z-20 bg-gradient-to-b from-black  w-screen flex justify-between">
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className="w-60 "
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