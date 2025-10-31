import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='w-full min-h-screen bg-cover bg-black items-center flex overflow-hidden'>
    <Navbar/>
    <div>
        <h1>Take your game to the next level with CricInsight.</h1>
        <div>
            <button className='rounded-full bg-blue-900 text-white px-2 py-2'>Get Started</button>
            <button className='rounded-full bg-transparent text-white px-2 py-2'>Contact Us</button>
        </div>
    </div>

    <div>

    </div>
   


    </div>
  )
}

export default Header