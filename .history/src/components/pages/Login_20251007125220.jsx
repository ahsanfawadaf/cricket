import React from 'react'
import cric_logo from '../assets/cric_logo.png'

const Login = ({onClose}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" id='Login'>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="border p-2 mb-4 w-full" />
        <input type="password" placeholder="Password" className="border p-2 mb-4 w-full" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded mb-2">
          Login
        </button>
        <button onClick={onClose} className="text-gray-500 underline">
          Close
        </button>
      </div>
    </div>






  
  )
}

export default Login