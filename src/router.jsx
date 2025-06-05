import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
// import Browse from "./components/Browse";
import { lazy } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase'
import { useEffect } from 'react'
import { addUser, removeUser } from './utils/userSlice'
import { useDispatch } from "react-redux";
const Browse=lazy(()=>import("./components/Browse"))


const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'browse',
        element:<Browse/>
    }

])

const Router=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {

        const {uid,email,displayName,photoURL} = user;
        console.log(uid);
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        
        } else {
        // User is signed out
        dispatch(removeUser());
        }
    });
    },[])
    return <RouterProvider router={appRouter}/>
}
export default Router;