import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <>
        <Header/>
        <div>   
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg"
                alt="netflix-login-bg"
                className='h-250'/>
            </div>
            <form className='w-3/12 absolute  text-white py-10 px-15 mx-auto right-0 left-0 my-30 rounded-md' style={{backgroundColor: 'rgba(0, 0, 0, 0.7  )'}}>
                <h1 className='my-4 font-bold text-3xl'>Sign In</h1>
                <input type="text" placeholder='Email' className='p-4 my-4  w-full rounded-md border' style={{backgroundColor: 'rgba(0, 0, 0, 0.5  )'}}/>
                <input type="password" placeholder='Password' className='p-4 my-4  w-full rounded-md border' style={{backgroundColor: 'rgba(0, 0, 0, 0.5  )'}}/>
                <button className='bg-red-700 p-2 my-6 w-full rounded-lg'>Sign In</button>
                <h1 className='my-2'>New to Netflix? Sign up now.</h1>
            </form>

        </div>
    </>
  )
}

export default Login