import React from 'react'
import Navbar from './Navbar'
import cric

const Header = () => {
  return (
    <div className='w-full min-h-screen bg-cover bg-black items-center flex overflow-hidden'>
    <Navbar/>
         <div className='flex flex-col mx-auto items-start px-2 md:px-20 lg:px-32'>
             <h1 className='text-md block font-xsm sm:text-6xl text-white gap-2 max-w-6xl inline-block pt-20'>Take your game to  the next level with <span className='text-4xl sm:text-6xl font-bold'>CrinInsight</span>.</h1>
             <div className='flex gap-4 mt-6'>
                 <button className='rounded-full bg-blue-900 text-white px-2 py-2'>Get Started</button>
                 <button className='rounded-full bg-transparent border text-white px-2 py-2'>Contact Us</button>
             </div>
         </div>

         <div className='w-full bg-cover bg-black overflow-hidden min-h-screen'>
                 <img src={cric_home_img} alt="" />
         </div>
   


    </div>
  )
}

export default Header