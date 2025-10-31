import React from 'react'
import footerlogo from '../assets/footerlogo.png'

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
             <p>Experience</p>
             <p>Our Services</p>
             <p>Reviews</p>
             <p>Contact Us</p>
            
            
            </div>  
          <div></div>

      </div>


      <div>


      </div>








    </div>
  )
}

export default Footer