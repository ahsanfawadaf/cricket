import React from 'react'
import cric_logo from '../assets/cric_logo.png'

const Navbar = () => {
  return (
    <div className='top-0  mt-5 pb-4  left-0 w-full fixed z-99 rounded-full backdrop-blur-lg border border-white' style={{height:'15vh'}}  >
        

        <div className='mx-auto justify-between flex items-center px-4 py-4   md:px-20 lg:px-32'>

         <img src={cric_logo} className='h-full max-h-16 object-contain' alt="" />
         


         <ul className='hidden md:flex gap-8 text-white '>

              <a href="#Experience" className='rounded-full px-6 py-2 bg-[#030946] text-white'>About</a>
              <a href="/about" className='rounded-full px-6 py-2 bg-[#030946] text-white'>About</a>
               <a href="/about" className='rounded-full px-6 py-2 bg-[#030946] text-white'>About</a>
               
             <button className='rounded-full px-6 py-2 bg-[#030946] text-white'>Services</button>
             <button className='rounded-full px-6 py-2 bg-[#030946] text-white'>Contact</button>



         </ul>

         <button className='rounded-full hidden md:block px-6 py-2 bg-white'>Login</button>
        </div>



    </div>
  )
}

export default Navbar