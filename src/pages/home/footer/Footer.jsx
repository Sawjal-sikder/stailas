import React from 'react'
import Image from '../../../component/Image'
import Logo from "../../../assets/logo/logo.png"
import Facebook from ".././../../assets/image/footer/fb.png"
import Instagram from ".././../../assets/image/footer/in.png"
import Tiktok from ".././../../assets/image/footer/ti.png"
import NavLinkButton from '../../../component/navbar/NavLinkButton'

const Footer = () => {
  return (
    <div className='bg-[#252525] text-white py-10 px-6 md:px-16 lg:px-40 font-inter'>
      <div>
        <Image src={Logo} alt="Logo" className="w-[139px] lg:w-[234px] mx-auto mb-6" />
      </div>
      <div className='flex flex-row justify-center items-center gap-x-4 md:gap-8 py-6 '>
        <NavLinkButton to={"/"} label="Home" className="text-white text-[12px] lg:text-[20px]" />
        <NavLinkButton to={"/"} label="Your Outfits" className="text-white text-[12px] lg:text-[20px]" />
        <NavLinkButton to={"/"} label="Stailas Chat" className="text-white text-[12px] lg:text-[20px]" />
      </div>
      <div className='flex flex-row justify-center items-center gap-x-5 md:gap-x-16 border-b border-white pb-10'>
        <Image src={Facebook} alt="Facebook" className="w-6 lg:w-9 " />
        <Image src={Tiktok} alt="Tiktok" className="w-6 lg:w-9 " />
        <Image src={Instagram} alt="Instagram" className="w-6 lg:w-9 " />
      </div>
      <div className='text-[8px] lg:text-[16px] text-center pt-5'>© 2025 Stailas. All rights reserved.</div>
    </div>
  )
}

export default Footer
