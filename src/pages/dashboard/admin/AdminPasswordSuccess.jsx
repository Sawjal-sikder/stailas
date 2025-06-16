import React from 'react'
import Image from '../../../component/Image'
import logo from '../../../assets/logo/logo.png'
import Button from '../../../component/Button'
import { useNavigate } from 'react-router-dom';

const AdminPasswordSuccess = () => {
  const navigate = useNavigate();

return (
      <div className='bg-secondary md:h-screen flex justify-center items-center font-inter text-primary'>
            <div className='max-w-[630px] lg:w-[630px] bg-white px-[75px] py-[60px] rounded-lg'>
                  <div>
                        <Image src={logo} alt="Stailas Logo" className='mx-auto mb-9' />
                  </div>
                  <div className='pb-16 px-10'>
                        <h1 className='text-3xl font-semibold text-center mb-4'>Password Updated Successfully!</h1>
                        <p className='text-center text-primary'>Your new password has been saved. You can now continue securely.</p>
                  </div>
                 
                 
            </div>
      </div>
)
}

export default AdminPasswordSuccess
