import React from 'react';
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import fb from '../assets/fb.png'

const Login = () => {
  return (
    <div className="flex min-h-screen bg-white">

      <div className='bg-[#191A25] w-1/2'>

        <img src={logo} className='object-contain bg-cover' alt="" />
      </div>
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
        

        <div className="flex flex-row w-full gap-12 my-4">
          <button className="bg-transparent border border-gray-300 text-black p-2  rounded mb-2">
            <img src={search} alt="Google" className="h-5 w-5 mr-2" />
            Sign in with Google
          </button>
          <button className="bg-transparent text-black border border-gray-300 p-2 rounded mb-2">
            <img src={fb} alt="Facebook" className="h-5 w-5 mr-2" />
            Sign in with Facebook
          </button>
        </div>
        
        <div className='flex justify-center w-full'>
              <p className='text-sm'>Don't have an account?</p><button className=' text-sm font-bold'>Sign up</button>

        </div>




      </div>
    </div>
  );
};

export default Login;