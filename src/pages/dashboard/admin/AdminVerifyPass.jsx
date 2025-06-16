import React from 'react'
import Image from '../../../component/Image'
import logo from '../../../assets/logo/logo.png'
import { NavLink } from 'react-router-dom'
import Button from '../../../component/Button'
import { useNavigate } from 'react-router-dom';
import OTPInput from '../../../component/OTPInput'

const AdminVerifyPass = () => {
  const navigate = useNavigate();

return (
      <div className='bg-secondary md:h-screen flex justify-center items-center font-inter text-primary'>
            <div className='max-w-[630px] lg:w-[630px] bg-white px-[75px] py-[60px] rounded-lg'>
                  <div>
                        <Image src={logo} alt="Stailas Logo" className='mx-auto mb-9' />
                  </div>
                  <div className='pb-16'>
                        <h1 className='text-3xl font-semibold text-center mb-4'>Check your email</h1>
                        <p className='text-center text-primary'>We sent a code to your email address @. Please check your email for the 5 digit code.</p>
                  </div>
                  <form
                        onSubmit={e => {
                              e.preventDefault();
                              // handle submit logic here
                              navigate('/admin/new-password');
                        }}
                  >
                        <div className='mb-10'>
                              <OTPInput />
                        </div>
                        
                        <Button text={"Verify"} type="submit" className='w-full' />
                  </form>
                  <p className='text-center mt-6 text-md text-primary'>
                        You have not received the email? <span className='text-secondary text-md cursor-pointer hover:underline'>Resend</span>
                  </p>
            </div>
      </div>
)
}

export default AdminVerifyPass
