import React from 'react'

const Login = () => {
  return (
    <div className=' w-[80%] mx-auto my-6'>
      <h3 className='text-2xl text-white text-center underline underline-offset-2'>Please Login</h3>
      <div className='w-[50%] mx-auto p-4 text-sky-100'>
        <form>
          <div className='grid p-2'>
          <label>Email</label>
          <input type='email' required placeholder="Enter your email address" className='p-2 rounded-sm mt-1 focus:outline-none focus:border-sky-500 text-black'/>
          </div>
          <div className='grid p-2'>
          <label>Password</label>
          <input type='password' required placeholder="Enter your email address" className='p-2 rounded-sm mt-1 focus:outline-none focus:border-sky-500 text-black'/>
          </div>
          <div className='bg-red-400 w-[30%] px-4 py-2 hover:bg-blue-500 ml-2 mt-4 font-bold'>
            <button>SIGN IN</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login