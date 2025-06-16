import React from 'react'
import Image from '../../../component/Image'
import logo from '../../../assets/logo/logo.png'
import { NavLink } from 'react-router-dom'
import Button from '../../../component/Button'

const AdminLogin = () => {
  return (
    <div className='bg-secondary md:h-screen flex justify-center items-center font-inter text-primary'>
      <div className='max-w-[630px] lg:w-[630px] bg-white px-[75px] py-[60px] rounded-lg'>
            <div>
                  <Image src={logo} alt="Stailas Logo" className='mx-auto mb-9' />
            </div>
            <div className='pb-16'>
                  <h1 className='text-3xl font-semibold text-center mb-4'>Login to Account</h1>
                  <p className='text-center text-primary'>Please enter your email and password to continue</p>
            </div>
            <form action="" method="post">
                  <div className='mb-6'>
                        <label htmlFor="email" className='block mb-2 text-md font-medium text-primary'>Email</label>
                        <input type="email" id="email" placeholder='example@gmail.com' name="email" required className='w-full text-primary px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
                  </div>
                  <div className='mb-6'>
                        <label htmlFor="password" className='block mb-2 text-md font-medium text-primary'>Password</label>
                        <input type="password" id="password" placeholder='Enter your password ..' name="password" required className='w-full text-primary px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
                  </div>
                  <div className='flex justify-between items-center mb-6'>
                        <label className='flex items-center mb-4'>
                              <input type="checkbox" className='mr-2' />
                              <span className='text-sm text-primary'>Remember me</span>
                        </label>
                        <NavLink to="/admin/forgot-password" className='text-sm text-primary hover:underline'>Forgot Password?</NavLink>
                        
                  </div>
                  <Button text={"Sign in"} type="submit" className='w-full' />
                  {/* <button type="submit" className='w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition duration-200'>Login</button> */}
            </form>
            
      </div>
    </div>
  )
}

export default AdminLogin
