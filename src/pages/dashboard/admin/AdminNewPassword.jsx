import React from 'react'
import Image from '../../../component/Image'
import logo from '../../../assets/logo/logo.png'
import Button from '../../../component/Button'
import { useNavigate } from 'react-router-dom';

const AdminNewPassword = () => {
 const navigate = useNavigate();

return (
      <div className='bg-secondary md:h-screen flex justify-center items-center font-inter text-primary'>
            <div className='max-w-[630px] lg:w-[630px] bg-white px-[75px] py-[60px] rounded-lg'>
                  <div>
                        <Image src={logo} alt="Stailas Logo" className='mx-auto mb-9' />
                  </div>
                  <div className='pb-16'>
                        <h1 className='text-3xl font-semibold text-center mb-4'>Set a new password</h1>
                        <p className='text-center text-primary px-16'>Create a new password. Ensure it differs from previous ones for security</p>
                  </div>
                  <form
                        onSubmit={e => {
                              e.preventDefault();
                              // handle submit logic here
                              navigate('/admin/success');
                        }}
                  >
                        <div className='mb-6'>
                              <label htmlFor="new_password" className='block mb-2 text-md font-medium text-primary'>New Password</label>
                              <input type="password" id="new_password" name="new_password" required className='w-full text-primary px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
                        </div>
                        <div className='mb-6'>
                              <label htmlFor="c_password" className='block mb-2 text-md font-medium text-primary'>Conform Password</label>
                              <input type="password" id="c_password" name="c_password" required className='w-full text-primary px-4 py-3 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
                        </div>
                        <Button text={"Continue"} type="submit" className='w-full' />
                  </form>
            </div>
      </div>
)
}
export default AdminNewPassword
