import React from 'react';
import logo from '../assets/logo.png'


const Sign = () => {
  return (
    <div className="flex min-h-screen bg-white">

      

      <div className='bg-[#0A0F3C] w-1/2 flex items-center'>

        <img src={logo} className='object-fit ml-12 max-w-sm' alt="" />
      </div>
    </div>
  );
};

export default Sign;