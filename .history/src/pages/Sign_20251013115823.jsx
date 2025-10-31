import React from 'react';
import logo from '../assets/logo.png'


const Sign = () => {
  return (
    <div className="flex min-h-screen bg-white">

      
      <div className="bg-white py-4 flex flex-col items-start w-1/2 justify-start my-12 px-30 rounded-lg">
        <h2 className="text-4xl font-bold mb-6">Login</h2>
        <div className='text-left mb-4'>
          <input type="email" placeholder="Email Address *" className="border border-gray-300 py-2 px-24  " />
        </div>
        <div className='text-left mb-4'>
          <input type="password" placeholder="Password *" className="border border-gray-300 py-2  px-24  " />
        </div>
        <div className='mb-4 flex justify-end w-full  '>
        
          <p className='text-gray-900 '>Forget Password?</p>

        </div>
       
        <button className="bg-[#030947] w-full rounded-full  text-white font-bold px-4 py-2 rounded mb-6">
          Login 
        </button>
        <div className='flex items-center   '>
             <div className=' border border-t w-full border-gray-400'></div>
             <span>or</span> 
             <div className=' border border-t w-full'></div>
        </div>
        
        <
        

      <div className='bg-[#0A0F3C] w-1/2 flex items-center'>

        <img src={logo} className='object-fit ml-12 max-w-sm' alt="" />
      </div>
    </div>
  );
};

export default Sign;