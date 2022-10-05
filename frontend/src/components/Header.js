import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const user  = useSelector((state) => state.auth.user)

  return (
    <div className='flex justify-between border-b border-slate-600 bg-sky-900 text-white p-4 align-center'>
        <nav className='ml-4 font-bold sm:text-2xl'>
            <Link to="/"><h3>NOTEDOWN</h3></Link>
           
        </nav>
        <ul className='flex gap-10 mr-4 text-sm'>
          {!user ? (
           <>
             <Link to='/login'><li className='border border-pink-200 p-2 hover:bg-pink-300 hover:text-white-900'>LOG IN</li></Link>
            <Link to='/register'><li className='bg-pink-400 p-2 hover:border border-sky-400 '>SIGN UP</li></Link>
           </>
          ) : (
            <>
       <li className='p-2 underline underline-offset-2 '>Dear: {user.name}</li>
         <Link to='/logout'><li className='bg-pink-400 p-2 hover:border border-sky-400 '>logout</li></Link>
            </>
          )}
        </ul>
    </div>
  )
}

export default Header