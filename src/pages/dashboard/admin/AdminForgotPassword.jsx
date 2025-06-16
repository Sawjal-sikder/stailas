import React from 'react'
import Image from '../../../component/Image'
import logo from '../../../assets/logo/logo.png'
import Button from '../../../component/Button'
import { useNavigate } from 'react-router-dom';

const AdminForgotPassword = () => {
const navigate = useNavigate();

return (
      <div className='bg-secondary md:h-screen flex justify-center items-center font-inter text-primary'>
            <div className='max-w-[630px] lg:w-[630px] bg-white px-[75px] py-[60px] rounded-lg'>
                  <div>
                        <Image src={logo} alt="Stailas Logo" className='mx-auto mb-9' />
                  </div>
                  <div className='pb-16'>
                        <h1 className='text-3xl font-semibold text-center mb-4'>Forget Password?</h1>
                        <p className='text-center text-primary'>Please enter your email to get verification code</p>
                  </div>
                  <form
                        onSubmit={e => {
                              e.preventDefault();
                              // handle submit logic here
                              navigate('/admin/verify-code');
                        }}
                  >
                        <div className='mb-6'>
                              <label htmlFor="email" className='block mb-2 text-md font-medium text-primary'>Email</label>
                              <input type="email" id="email" placeholder='example@gmail.com' name="email" required className='w-full text-primary px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
                        </div>
                        <Button text={"Continue"} type="submit" className='w-full' />
                  </form>
            </div>
      </div>
)
}

export default AdminForgotPassword
