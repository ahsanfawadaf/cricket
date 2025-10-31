import React from 'react';
import logo from '../assets/logo.png'

const Login = () => {
  return (
    <div className="flex min-h-screen bg-white">

      <div className='bg-[#191A25] w-1/2'>

        <img src={logo} alt="" />
      </div>
      <div className="bg-white py-4 flex flex-col items-start w-1/2 justify-start my-12 px-30 rounded-lg">
        <h2 className="text-4xl font-bold mb-6">Login</h2>
        <div className='text-left mb-4'>
          <input type="email" placeholder="Email Address *" className="border py-2 px-24  " />
        </div>
        <div className='text-left mb-4'>
          <input type="password" placeholder="Password *" className="border py-2  px-24  " />
        </div>
        <div className='mb-4 '>
        
          <p>Forget Password?</p>

        </div>
       
        <button className="bg-blue-600 text-white px-4 py-2 rounded mb-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;