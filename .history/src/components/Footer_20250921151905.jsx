import React from 'react'
import footerlogo from '../assets/footerlogo.png'


const Footer = () => {
  return (
    <div className='bg-black pt-4 px-4 md:px-20 lg:px-32 w-full overflow-hidden '>

        <div className=' container flex flex-col md:flex-row gap-16 items-center justify-between mx-auto   '>
                <div className='flex-1  px-4 '> 

                       <img src={footerlogo} className='h-60' alt="" />
            
            
                </div>

                <div className='flex-1 bg-gray-200 px-4'>
                       <h3 className='text-white text-xl font-semibold'>Quick Links</h3>
                       <p className='text-white'>Login</p>
                       <p className='text-white'>Dashboard</p>
                       <p className='text-white'>Experience</p>
                       <p className='text-white'>Our Services</p>
                       <p className='text-white'>Reviews</p>
                       <p className='text-white'>Contact Us</p>
            
            
                </div> 

                <div className='flex-1 bg-blue-200  pl-4 '>
                        <h3 className='text-white text-xl font-semibold'>Contact</h3>
                         <div >
                                <div className='flex'>
                                    
                                    <div className='flex px-4 flex-col'>
                                         <h3 className='text-xl text-white font-semibold'>+ 1800 145 276</h3>
                                         <p className='text-white'>Call us</p>
                                    </div>
                
                                </div>
                                <div className='flex mt-4'>
                                    
                                    <div className='flex flex-col px-4'>
                                         <h3 className='text-xl text-white font-semibold'>cricinsight@gmail.com</h3>
                                         <p className='text-white'>Email us</p>
                                    </div>
                
                                </div>

                        </div>
                       

                </div>
      </div>
               

                <div className='text-center text-gray-500 border-t border-gray-700 mt-10 py-4'>
        
                 Copyright 2024 © GreatStack. All Right Reserved
            

                 </div>


    </div>
  )
}

export default Footer