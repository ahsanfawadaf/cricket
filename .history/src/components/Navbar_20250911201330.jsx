import React from 'react'
import {assets} from "../assets/assets"

const Navbar = () => {
  return (
    <div className='top-0 left-0 w-full fixed z-10'>
        

        <div className='mx-auto justify-between flex container items-center px-6 py-4 bg-transparent md:px-20 lg:px-32'>


         <img src={assets.cric_logo} alt="" />


         <ul className='flex gap-8 text-white '>

             <button className='rounded-full px-6 py-2 bg-'>About</button>



         </ul>

         <button>Login</button>
        </div>



    </div>
  )
}

export default Navbar