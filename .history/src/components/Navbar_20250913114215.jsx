import React from 'react'
import cric_logo from '../assets/cric_logo.png'

const Navbar = () => {
  return (
    <div className='top-0 mt-4  left-0 w-full fixed z-10 rounded-full bg-black' style={{height:'13vh'}}  >
        

        <div className='mx-auto justify-between flex items-center px-6 py-4  bg-transparent md:px-20 lg:px-32'>

         <img src={cric_logo} clas alt="" />
         


         <ul className='hidden md:flex gap-8 text-white '>

             <button className='rounded-full px-6 py-2 bg-blue-900 text-white'>About</button>
             <button className='rounded-full px-6 py-2 bg-blue-900 text-white'>How to use</button>
             <button className='rounded-full px-6 py-2 bg-blue-900 text-white'>Services</button>
             <button className='rounded-full px-6 py-2 bg-blue-900 text-white'>Contact</button>



         </ul>

         <button className='rounded-full hidden md:block px-6 py-2 bg-white'>Login</button>
        </div>



    </div>
  )
}

export default Navbar