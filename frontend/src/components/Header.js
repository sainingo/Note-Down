import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between border-b border-slate-600 bg-sky-900 text-white p-4 align-center'>
        <nav className='ml-4 font-bold sm:text-2xl'>
            <Link to="/"><h3>NOTEDOWN</h3></Link>
           
        </nav>
        <ul className='flex gap-10 mr-4 text-sm'>
            <Link to='/login'><li className='border border-pink-200 p-2 hover:bg-pink-300 hover:text-white-900'>LOG IN</li></Link>
            <Link to='/register'><li className='bg-pink-400 p-2 hover:border border-sky-400 '>SIGN UP</li></Link>
        </ul>
    </div>
  )
}

export default Header