import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
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
    return <RouterProvider router={appRouter}/>
}
export default Router;