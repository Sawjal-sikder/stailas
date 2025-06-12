import React from 'react'
import Image from '../../../component/Image'
import ServiceImage1 from "../../../assets/image/service/s1.png"
import ServiceImage2 from "../../../assets/image/service/s2.png"
import ServiceImage3 from "../../../assets/image/service/s3.png"
import ServiceImage4 from "../../../assets/image/service/s4.png"


const Items = () => {
  return (
    <div className='grid grid-cols-4 gap-x-10 pt-10 '> 
    {/* item */}
      <div className='p-5 text-center flex flex-col items-center border border-[#E5E5E5] rounded-md'>
        <Image src={ServiceImage1} alt="Service Image 1" className="" />
        <p className='font-bold text-xl py-4'>Style Profile</p>
        <p className='text-md'>Color palette, signature vibes, and pro insights</p>
      </div>
      <div className='p-5 text-center flex flex-col items-center border border-[#E5E5E5] rounded-md'>
        <Image src={ServiceImage2} alt="Service Image 1" className="" />
        <p className='font-bold text-xl py-4'>Wardrobe Review</p>
        <p className='text-md'>Suggestions on what to keep,how to wear it</p>
      </div>
      <div className='p-5 text-center flex flex-col items-center border border-[#E5E5E5] rounded-md'>
        <Image src={ServiceImage3} alt="Service Image 1" className="" />
        <p className='font-bold text-xl py-4'>Smart Shopping</p>
        <p className='text-md'>AI advice before you buy</p>
      </div>
      <div className='p-5 text-center flex flex-col items-center border border-[#E5E5E5] rounded-md'>
        <Image src={ServiceImage4} alt="Service Image 1" className="" />
        <p className='font-bold text-xl py-4'>Confidence Boost</p>
        <p className='text-md'>Feel polished, not overwhelmed</p>
      </div>
    </div>
  )
}

export default Items
