import React from 'react'
import footerlogo from '../assets/footerlogo.png'
import call from '../assets/call.png'
import email from '../assets/email.png'

const Footer = () => {
  return (
    <div className='bg-black w-full h-3/4'>

        <div className='flex'>
                <div> 

                       <img src={footerlogo} className='h-90' alt="" />
            
            
                </div>

                <div>
                       <h3 className='text-white'>Quick Links</h3>
                       <p className='text-white'>Login</p>
                       <p className='text-white'>Dashboard</p>
                       <p className='text-white'>Experience</p>
                       <p className='text-white'>Our Services</p>
                       <p className='text-white'>Reviews</p>
                       <p className='text-white'>Contact Us</p>
            
            
                </div> 

                <div>
                        <h3>Contact</h3>
                       

                </div>


            <div>


           </div>




      



    </div>
  )
}

export default Footer