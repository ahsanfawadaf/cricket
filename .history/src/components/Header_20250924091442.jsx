import React from 'react'
import Navbar from './Navbar'
import cric_home_img from '../assets/cric_home_img.png'
import {motion, scale} from "framer-motion"

const Header = () => {
  return (
    <div className='w-full min-h-screen bg-cover bg-black items-center flex flex-col lg:flex-row overflow-hidden'>
    <Navbar/>
         <div className='flex flex-col mx-auto items-center  lg:items-start px-20 pt lg:px-32'>
             <motion.h1
              

              initial={{opacity:0 , y:-100}}
              transition={{duration:1.5}}
              whileInView={{opacity:1 , y:0}}
              viewport={{once:true}}
             
             
             
             
             
             
             className='text-md block font-xsm sm:text-6xl text-white gap-2 max-w-6xl inline-block pt-20'>Take your game to  the next level with <span className='text-4xl sm:text-6xl font-bold'>CrinInsight</span>.</motion.h1>
             <motion.div
             
              initial={{opacity:0 , y:100}}
              transition={{duration:1.5}}
              whileInView={{opacity:1 , y:0}}
              viewport={{once:true}}
             
             
             
             className='flex  lg:flex-row gap-4 mt-6'>
                 <button className='cursor-pointer hover:bg-blue-200 rounded-full bg-[#030946] text-white px-2 py-2'>Get Started</button>
                 <a href="#Contact" className='cursor-pointer hover:border-blue-500 rounded-full border border-[#030946] bg-transparent  text-white px-2 py-2'>Contact Us</a>
             </motion.div>
         </div>

         <motion.div 
         

         initial={{scale:0.5}}
         animate={{scale:1}}
         transition={{duration:2}}
         viewport={{once:true}}
         
         
         
         
         
         className='w-full bg-cover bg-black overflow-hidden min-h-screen'>
                 <img className='h-full pt-28 object-contain' src={cric_home_img} alt="" />
         </motion.div>
   


    </div>
  )
}

export default Header