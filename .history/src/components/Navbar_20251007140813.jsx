import React from 'react'
import cric_logo from '../assets/cric_logo.png'
import stack from '../assets/stack.png'
import {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {




   const [showmm , setShowmm]=useState(false);

useEffect(( )=>{
  if(showmm){
    document.body.style.overflow='hidden'
  }
  else{
    document.body.style.overflow='auto'
  }
  return ()=>{
    document.body.style.overflow='auto'
  }
  } , [showmm])




  return (
    <div className='top-0  mt-5 pb-4  left-0 w-full fixed z-99 rounded-full backdrop-blur-lg border overflow-hidden border-white md:h-[15vh]'  >
        

        <div className='mx-auto justify-between flex container items-center px-6 py-4   md:px-20 lg:px-32'>

         <img src={cric_logo} className='h-full max-h-16 object-contain' alt="" />
         


         <ul className='hidden  lg:flex gap-8 text-white '>

              <a href="#Experience" className='rounded-full px-6 py-2 bg-[#030946] text-white'>About</a>
              <a href="#Use" className='rounded-full px-6 py-2 bg-[#030946] text-white'>How to Use</a>
              <a href="#Services" className='rounded-full px-6 py-2 bg-[#030946] text-white'>Services</a>
              <a href="#Contact" className='rounded-full px-6 py-2 bg-[#030946] text-white'>Contact</a>
             



         </ul>
           <Link to="/login"> 
          <a href="#Login"  className='rounded-full hidden md:block px-6 py-2 bg-white cursor-pointer '>Login</a>
          </Link>
          <img onClick={()=> setShowmm(true)}  src={stack} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>




        {/* mobile menu */}
        <div className={`md:hidden ${showmm ? 'fixed w-full' : 'h-0 w-0'} fixed top-0 h-full right-0 bottom-0  w-full overflow-hidden bg-white transition-all`}>
             
             
             <ul className='flex flex-col gap-2 mt-5 px-6 text-lg  font-medium items-center'>
             <a onClick={()=>setShowmm(false)} href="#Experience" className='px-4 py-2 rounded-full inline-block'>About</a>
             <a onClick={()=>setShowmm(false)} href="#Use" className='px-4 py-2 rounded-full inline-block'>How to Use</a>
             <a onClick={()=>setShowmm(false)} href="#Services" className='px-4 py-2 rounded-full inline-block'>Services</a>
             <a onClick={()=>setShowmm(false)} href="#Contact" className='px-4 py-2 rounded-full inline-block'>Contact</a>


             </ul>


        </div>



    </div>
  )
}

export default Navbar