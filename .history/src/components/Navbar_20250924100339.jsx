import React from 'react'
import cric_logo from '../assets/cric_logo.png'
import stack from '../assets/stack.png'

const Navbar = () => {
  return (
    <div className='top-0  mt-5 pb-4  left-0 w-full fixed z-99 rounded-full backdrop-blur-lg border overflow-hidden border-white' style={{height:'15vh'}}  >
        

        <div className='mx-auto justify-between flex container items-center px-6 py-4   md:px-20 lg:px-32'>

         <img src={cric_logo} className='h-full max-h-16 object-contain' alt="" />
         


         <ul className='hidden  md:flex gap-8 text-white '>

              <a href="#Experience" className='rounded-full px-6 py-2 bg-[#030946] text-white'>About</a>
              <a href="#Use" className='rounded-full px-6 py-2 bg-[#030946] text-white'>How to Use</a>
              <a href="#Services" className='rounded-full px-6 py-2 bg-[#030946] text-white'>Services</a>
              <a href="#Contact" className='rounded-full px-6 py-2 bg-[#030946] text-white'>Contact</a>
             



         </ul>

         <button className='rounded-full hidden md:block px-6 py-2 bg-white'>Login</button>

          <img  src={stack} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>




        {/* mobile menu */}
        <div className={`md:hidden ${showmm ? 'fixed w-1/2' : ' w-0 overflow-hidden'} fixed top-0 right-0 bottom-0 w-full overflow-hidden bg-white transition-all`}>
             
             
             <ul className='flex flex-col gap-2 mt-5 px-6 text-lg  font-medium items-center'>
             <a onClick={()=>setShowmm(false)} href="#Experience" className='px-4 py-2 rounded-full inline-block'>About</a>
             <a onClick={()=>setShowmm(false)} href="#Use" className='px-4 py-2 rounded-full inline-block'>How to Use</a>
             <a onClick={()=>setShowmm(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Services</a>
             <a onClick={()=>setShowmm(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Contact</a>


             </ul>


        </div>



    </div>
  )
}

export default Navbar