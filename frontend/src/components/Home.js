import React from 'react'

const Home = () => {
  return (
    <div className='text-center m-2 text-white'>
        <h2 className='text-2xl'>Note down some great ideas</h2>
        <div className='p-2 w-[60%] mx-auto'>
            <form className='flex gap-6'>
                <input type='text' 
                 placeholder="Note down your Idea..."
                 className='w-[80%] p-2 rounded-sm text-black focus:outline-none focus:border-slate-500' />
                 <button className='text-[15px] bg-red-400 sm:px-4 w-[20%] rounded font-bold hover:bg-violet-500'>New Idea</button>
            </form>
        </div>
        <div className='pt-2'>
            <div className='bg-slate-400 w-[60%] mx-auto my-4 p-6 rounded'>
            <p>This is a platform for taking down your ideas</p>
            </div>
            <div className='bg-slate-400 w-[60%] mx-auto my-4 p-6 rounded'>
            <p>This is a platform for taking down your ideas</p>
            </div>
        </div>
    </div>
  )
}

export default Home