import React from 'react';
import {}

const Login = () => {
  return (
    <div className="flex min-h-screen bg-white">

      <div>

        <img src="" alt="" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="border p-2 mb-4 w-full" />
        <input type="password" placeholder="Password" className="border p-2 mb-4 w-full" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded mb-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;