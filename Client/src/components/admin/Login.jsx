import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100'>
      <div className='w-full max-w-sm p-8 max-md:m-6 border border-primary/20 shadow-xl shadow-primary/10 rounded-2xl bg-white backdrop-blur-sm'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-4 text-center mb-2'>
            <h1 className='text-3xl font-bold text-gray-800'>
              <span className='text-primary'>Admin</span> Login
            </h1>
            <p className='font-light text-gray-500 mt-1 text-sm'>
              Enter your credentials to access the admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className='w-full mt-4'>
            <div className='flex flex-col mb-5'>
              <label className='mb-2 text-sm font-medium text-gray-600'>Email</label>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder='your email id'
                className='border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-400 text-sm'
              />
            </div>

            <div className='flex flex-col mb-6'>
              <label className='mb-2 text-sm font-medium text-gray-600'>Password</label>
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder='your password'
                className='border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-400 text-sm'
              />
            </div>

            <button
              type='submit'
              className='w-full py-3 font-medium bg-primary text-white rounded-lg cursor-pointer hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
