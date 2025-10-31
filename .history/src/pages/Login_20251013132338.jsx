import React from 'react';
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import fb from '../assets/fb.png'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      toast.error('An error occurred. Please try again.');
    } else {
      
      toast.success('Login successful!');
    }
  };

  return (
    <div className="flex min-h-screen bg-white">

      <div className='bg-[#0A0F3C] w-1/2 flex items-center justify-center'>

        <img src={logo} className='object-fit ml-12 max-w-sm' alt="" />
      </div>
      <div className="bg-white py-4 flex flex-col items-start w-1/2 justify-start my-12 px-30 rounded-lg">
        <h2 className="text-4xl font-bold mb-6">Login</h2>
        <div className='text-left mb-4'>
          <input type="email" placeholder="Email Address *" className="border border-gray-300 rounded py-2 px-26  "  value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='text-left mb-4'>
          <input type="password" placeholder="Password *" className="border border-gray-300 rounded py-2  px-26  " value={pass} />
        </div>
        <div className='mb-4 flex justify-end w-full  '>
        
          <p className='text-gray-900 '>Forget Password?</p>

        </div>
       
        <button className="bg-[#030947] w-full rounded-full text-sm text-white font-bold px-4 py-2 rounded mb-6">
          Login &gt;&gt;
        </button>
        <div className='flex items-center   '>
             <div className=' border border-t w-full border-gray-400'></div>
             <span>or</span> 
             <div className=' border border-t w-full'></div>
        </div>
        

        <div className="flex flex-row w-full gap-12 my-4">
          <button className="bg-transparent gap-2 text-sm flex border border-gray-300 text-black p-2  rounded mb-2">
            <img src={search} alt="Google" className="h-5 w-5 " />
            Sign in with Google
          </button>
          <button className="bg-transparent gap-2 flex text-black text-sm border border-gray-300 p-2 rounded mb-2">
            <img src={fb} alt="Facebook" className="h-5 w-5 " />
            Sign in with Facebook
          </button>
        </div>
        
        <div className='flex justify-center w-full'>
              <p className='text-sm'>Don't have an account?</p><Link to="/Signup" className=' text-sm font-bold'>Signup </Link>

        </div>




      </div>
    </div>
  );
};

export default Login;