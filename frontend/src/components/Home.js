import React from 'react'
import Notes from './Notes'

const Home = () => {
  return (
    <div className='text-center m-2 text-white'>
        <h2 className='text-2xl m-4'>Note Down some Great Ideas</h2>
        <div className='p-2 w-[60%] mx-auto'>
            <form className='flex gap-6'>
                <input type='text' 
                 placeholder="Note down your Idea..."
                 className='w-[80%] p-2 rounded-sm text-black focus:outline-none focus:border-slate-500' />
                 <button className='text-[15px] bg-red-400 sm:px-4 w-[20%] rounded font-bold hover:bg-violet-500'>New Idea</button>
            </form>
        </div>
        <div className='pt-2'>
            <Notes />
        </div>
    </div>
  )
}

export default Home