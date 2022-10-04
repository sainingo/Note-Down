import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between bg-sky-900 text-white p-4 align-center'>
        <nav className='ml-4 font-bold text-2xl'>
            <Link to="/"><h3>NOTEDOWN</h3></Link>
           
        </nav>
        <ul className='flex gap-10 mr-4'>
            <Link to='/login'><li>LOGIN</li></Link>
            <Link to='/register'><li>SIGN UP</li></Link>
        </ul>
    </div>
  )
}

export default Header