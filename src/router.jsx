import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
// import Browse from "./components/Browse";
import { lazy } from "react";

// const Browse=lazy(()=>import("./components/Browse"))
import Browse from "./components/Browse";


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
    console.log('router');

    return <RouterProvider router={appRouter}/>
}
export default Router;