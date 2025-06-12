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
        <Image src={Logo} alt="Logo" className="w-60 mx-auto mb-6" />
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 py-8'>
        <NavLinkButton to={"/"} label="Home" className="text-white text-xl" />
        <NavLinkButton to={"/"} label="Your Outfits" className="text-white text-xl" />
        <NavLinkButton to={"/"} label="Stailas Chat" className="text-white text-xl" />
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20'>
        <Image src={Facebook} alt="Facebook" className="w-12 " />
        <Image src={Tiktok} alt="Tiktok" className="w-12 " />
        <Image src={Instagram} alt="Instagram" className="w-12 " />
      </div>
      <div className='text-2xl text-center pt-10'>© 2025 Stailas. All rights reserved.</div>
    </div>
  )
}

export default Footer
