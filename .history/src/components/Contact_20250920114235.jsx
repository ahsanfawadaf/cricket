import React from 'react'
import call from '../assets/call.png'
import email from '../assets/email.png'

const Contact = () => {
  return (
    <div className='flex flex-col py-10 items-center'>
        <h3 className='text-[#030946] font-bold mb-2'>Contact Us</h3>
        <h2 className='text-4xl font-semibold'>Get in touch with us</h2>


      <div className='bg-gray-200  h-120 w-11/12 mt-2 mx-auto rounded-md '>
       <div className='mt-8 ml-8 w-full  items-start '>
         <h2 className='text-2xl font-semibold'>Drop us a message</h2>
        <p className='text-gray-600 mt-2 text-sm'>We will get back to you as soon as possible.</p>
       </div>

       <div className='flex flex-row'>

        <div className='mt-6 mx-8'>

          <form >
                
                <div className='flex gap-2 max-w-8xl'>

                     <div className='w-full md:w-1/2 text-left'>
                     <input type="text" name='Name' placeholder='Full Name' className='w-full pl-2 rounded border border-gray-400 bg-white py-4  ' />
                     </div>

                     <div className='w-full md:w-1/2 text-left'>
                     <input type="text" name='Name' placeholder='Company Name' className='w-full pl-2 rounded border border-gray-400 bg-white py-4 ' />
                     </div>


                </div>

                <div className='mt-2'>
                      <div>
                        <input type="Email" name='Email' placeholder='Email' className='w-full pl-2 rounded py-4 border border-gray-400 bg-white' />
                      </div>

                </div>

                <div>
                      
                      <textarea name="Message" className=' w-full pl-2 border border-gray-400 bg-white rounded px-4 py-3 h-36 mt-2' placeholder='Message'></textarea>

                </div>
                  
                  
          </form>

          <button className='rounded-full mt-2 py-4 text-white w-full bg-[#030946]'>SEND</button>
        </div>

        <div>
            <div>
               <img src={call} className='h-6' alt="" />

            </div>
            <div>
                <img src={email} className='h-6' alt="" />

            </div>


        </div>






       </div>




      </div>


      






    </div>
  )
}

export default Contact