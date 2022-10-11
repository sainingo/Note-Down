import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password} = formData

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleChange = (e) => {
   setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value
   }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const loginDetails = {
      email, 
      password
    }

    dispatch(login(loginDetails))
  }

  if(isLoading) {
    <p>Loading...</p>
  }
  return (
    <div className=' w-[80%] mx-auto my-6'>
      <h3 className='text-2xl text-white text-center underline underline-offset-2'>Please Login</h3>
      <div className='sm:w-[50%] mx-auto p-4 text-sky-100'>
        <form onSubmit={handleSubmit}>
          <div className='grid p-2'>
          <label>Email</label>
          <input type='email' name="email" value={email} onChange={handleChange} required placeholder="Enter your email address" className='p-2 rounded-sm mt-1 focus:outline-none focus:border-sky-500 text-black'/>
          </div>
          <div className='grid p-2'>
          <label>Password</label>
          <input type='password' name="password" value={password} onChange={handleChange} required placeholder="Enter your email address" className='p-2 rounded-sm mt-1 focus:outline-none focus:border-sky-500 text-black'/>
          </div>
          <div className='bg-red-400 sm:w-[30%] px-4 py-2 hover:bg-blue-500 ml-2 mt-4 font-bold'>
            <button type='submit'>SIGN IN</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login