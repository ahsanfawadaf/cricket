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
             <p className='text-white'>Experience</p>
             <p className='text-white'>Our Services</p>
             <p className='text-white'>Reviews</p>
             <p className='text-white'>Contact Us</p>
            
            
            </div>  
          <div>
              <h3>Contact</h3>
                 <div >
                            <div className='flex'>
                               <img src={call} className='h-10' alt="" />
                               <div className='flex px-4 flex-col'>
                                <h3 className='text-xl font-semibold'>+ 1800 145 276</h3>
                               <p className='text-gray-600'>Call us</p>
                               </div>
                
                            </div>
                            <div className='flex mt-4'>
                                <img src={email} className='h-10' alt="" />
                                <div className='flex flex-col px-4'>
                                  <h3 className='text-xl font-semibold'>cricinsight@gmail.com</h3>
                                <p className='text-gray-600'>Email us</p>
                                </div>
                
                            </div>





          </div>

      </div>


      <div>


      </div>








    </div>
  )
}

export default Footer