import React from 'react';
import logo from '../assets/logo.png'

const Signup = () => {
  return (
    <div className='flex min-h-screen bg-white'>
      
       <div className="bg-white py-4 flex flex-col items-start w-1/2 justify-start my-12 px-30 rounded-lg">
        <h2 className="text-4xl font-bold mb-6">Sign Up</h2>
        <div className='flex gap-2 '>
             <div className='text-left mb-4'>
                 <input type="name" placeholder="First Name *" className="border border-gray-300 py-2 px-2 " />
            </div>
            <div className='text-left mb-4'>
                 <input type="name" placeholder="Last Name *" className="border border-gray-300 py-2 px-2  " />
            </div>
        </div>
        <div className='text-left mb-4'>
          <input type="email" placeholder="Email Address *" className="border border-gray-300 rounded py-2 px-28  " />
        </div>
        <div className='text-left mb-4'>
          <input type="password" placeholder="Password *" className="border border-gray-300 rounded py-2  px-28  " />
        </div>
        <div className='text-left mb-4'>
          <input type="password" placeholder="Confirm Password *" className="border border-gray-300 rounded py-2  px-28  " />
        </div>
        
       
        <button className="bg-[#030947] w-full rounded-full  text-white font-bold px-4 py-2 rounded mb-6">
          Login &gt;&gt;
        </button>
      
        <div className='flex justify-center w-full'>
              <p className='text-sm'>Already have an account?</p><button className=' text-sm font-bold'>Login</button>

        </div>
       </div>
       
       
       <div className='bg-[#0A0F3C] w-1/2 flex items-center'>
            <img src={logo} className='object-fit ml-12 max-w-sm' alt="" />
       </div>
    </div>
  );
};

export default Signup;