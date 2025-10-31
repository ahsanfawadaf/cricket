import React from 'react'
import footerlogo from '../assets/footerlogo.png'
import call from '../assets/call.png'
import email from '../assets/email.png'

const Footer = () => {
  return (
    <div className='bg-black pt-4 px-4 md:px-20 lg:px-32 w-full overflow-hidden h-3/4'>

        <div className='flex flex-col md:flex-row items-center justify-between w-full  pt-10 '>
                <div className='w-full '> 

                       <img src={footerlogo} className='h-90' alt="" />
            
            
                </div>

                <div className='w-full mt-10 ml-10'>
                       <h3 className='text-white'>Quick Links</h3>
                       <p className='text-white'>Login</p>
                       <p className='text-white'>Dashboard</p>
                       <p className='text-white'>Experience</p>
                       <p className='text-white'>Our Services</p>
                       <p className='text-white'>Reviews</p>
                       <p className='text-white'>Contact Us</p>
            
            
                </div> 

                <div className='w-full ml-10 '>
                        <h3>Contact</h3>
                         <div >
                                <div className='flex'>
                                    <img src={call} className='h-10' alt="" />
                                    <div className='flex px-4 flex-col'>
                                         <h3 className='text-xl font-semibold'>+ 1800 145 276</h3>
                                         <p className='text-white'>Call us</p>
                                    </div>
                
                                </div>
                                <div className='flex mt-4'>
                                    <img src={email} className='h-10' alt="" />
                                    <div className='flex flex-col px-4'>
                                         <h3 className='text-xl font-semibold'>cricinsight@gmail.com</h3>
                                         <p className='text-white'>Email us</p>
                                    </div>
                
                                </div>

                        </div>
                       

                </div>


            <div>


           </div>




      </div>



    </div>
  )
}

export default Footer