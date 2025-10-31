import React from 'react'
import footerlogo from '../assets/footerlogo.png'
import {motion} from "framer-motion"


const Footer = () => {
  return (
    <motion.div className='bg-black pt-4 px-4 md:px-20 lg:px-32 w-full overflow-hidden '>

        <div className=' container flex flex-col md:flex-row gap-16 items-center justify-between mx-auto   '>
                <div className='flex-1  px-4 '> 

                       <img src={footerlogo} className='h-60' alt="" />
            
            
                </div>

                <div className='flex-1 gap-2 px-4'>
                       <h3 className='text-white text-xl font-semibold'>Quick Links</h3>
                       <p className='text-white'>Login</p>
                       <p className='text-white'>Dashboard</p>
                       <p className='text-white'>Experience</p>
                       <p className='text-white'>Our Services</p>
                       <p className='text-white'>Reviews</p>
                       <p className='text-white'>Contact Us</p>
            
            
                </div> 

                <div className='flex-1   pl-4  mb-8'>
                        <h3 className='text-white pl-4 text-xl font-semibold'>Contact</h3>
                         <div >
                                <div className='flex'>
                                    
                                    <div className='flex px-4 flex-col'>
                                         <h3 className='text-white '>+ 1800 145 276</h3>
                                         <p className='text-white'>Call us</p>
                                    </div>
                
                                </div>
                                <div className='flex mt-4'>
                                    
                                    <div className='flex flex-col px-4'>
                                         <h3 className=' text-white '>cricinsight@gmail.com</h3>
                                         <p className='text-white'>Email us</p>
                                    </div>
                
                                </div>

                        </div>
                       

                </div>
      </div>
               

                <div className='text-center text-white border-t mb-8 border-gray-700 mt-10 py-4'>
        
                 Copyright © 2025 CricInsight
            

                 </div>


    </div>
  )
}

export default Footer