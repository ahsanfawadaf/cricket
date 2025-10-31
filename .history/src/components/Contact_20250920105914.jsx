import React from 'react'

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
                     <input type="text" name='Name' placeholder='Full Name' className='w-1/2 rounded border bg-white py-4  ' />
                     </div>

                     <div className='w-full md:w-1/2 text-left'>
                     <input type="text" name='Name' placeholder='Company Name' className='w-full rounded border bg-white py-4 ' />
                     </div>


                </div>

                <div>
                      <div>
                        <input type="Email" name='Email' placeholder='Email' className='w-full rounded py-4 border bg-white' />
                      </div>

                </div>

                <div>
                      
                      <textarea name="Message" className=' w-full border bg-white rounded px-4 py-3 h-48 mt-2' placeholder='Message'></textarea>

                </div>
                  












          </form>
        </div>








       </div>




      </div>


      






    </div>
  )
}

export default Contact