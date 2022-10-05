import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../features/auth/authSlice';

 
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    // dispatch(reset())

  }, [user, isError, isSuccess, message, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== password2) {
      toast('Password dont match')
    }else {
      const userData = {
        name,
        email,
        password
      }
      dispatch(register(userData))
    }
  }

  const handleChange = (e) => {
   setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
   }))
  }

  if(isLoading) {
    <p>Loading...</p>
  }

  return ( 
    <div className=' w-[80%] mx-auto my-6'>
     <h3 className='text-2xl text-white text-center underline underline-offset-2'>Please Register Below</h3>
    <div className='sm:w-[50%] mx-auto p-4 text-sky-100'>
      <form onSubmit={handleSubmit}>
        <div className='grid p-2'>
        <label>Username</label>
        <input type='text' name="name" onChange={handleChange} value={name} required placeholder="Enter your username" className='p-2 rounded-sm mt-1 focus:outline-none focus:border-sky-500 text-black'/>
        </div>
        <div className='grid p-2'>
        <label>Email</label>
        <input type='email' name="email" onChange={handleChange} value={email} required placeholder="Enter your email address" className='p-2 rounded-sm mt-1 focus:outline-none focus:border-sky-500 text-black'/>
        </div>
        <div className='grid p-2'>
        <label>Password</label>
        <input type='password' name="password" onChange={handleChange} value={password} required placeholder="Enter your password" className='p-2 rounded-sm mt-1 focus:outline-none focus:border-sky-500 text-black'/>
        </div>
        <div className='grid p-2'>
        <label>Confirm Password</label>
        <input type='password' name="password2" onChange={handleChange} value={password2} required placeholder="Confirm your password" className='p-2 rounded-sm mt-1 focus:outline-none focus:border-sky-500 text-black'/>
        </div>
        <div className='bg-blue-500 sm:w-[30%] px-4 py-2 hover:bg-red-400 ml-2 mt-4 font-bold'>
          <button type='submit'>SIGN UP</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Register