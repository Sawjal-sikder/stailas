import React from 'react'
import Image from '../../../component/Image'
import ServiceImage1 from "../../../assets/image/service/s1.png"
import ServiceImage2 from "../../../assets/image/service/s2.png"
import ServiceImage3 from "../../../assets/image/service/s3.png"
import ServiceImage4 from "../../../assets/image/service/s4.png"


const Items = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10 '> 
    {/* item */}
      <div className='p-5 text-center flex flex-col items-center border border-[#E5E5E5] rounded-md'>
        <Image src={ServiceImage1} alt="Service Image 1" className="w-[36px] lg:w-[88px] py-5" />
        <p className='font-bold text-[16px] lg:text-[20px] py-2'>Style Profile</p>
        <p className='text-[12px] lg:text-[16px]'>Color palette, signature vibes, and pro insights</p>
      </div>
      <div className='p-5 text-center flex flex-col items-center border border-[#E5E5E5] rounded-md'>
        <Image src={ServiceImage2} alt="Service Image 1" className="w-[36px] lg:w-[88px] py-5" />
        <p className='font-bold text-[16px] lg:text-[20px] py-2'>Wardrobe Review</p>
        <p className='text-[12px] lg:text-[16px]'>Suggestions on what to keep,how to wear it</p>
      </div>
      <div className='p-5 text-center flex flex-col items-center border border-[#E5E5E5] rounded-md'>
        <Image src={ServiceImage3} alt="Service Image 1" className="w-[36px] lg:w-[88px] py-5" />
        <p className='font-bold text-[16px] lg:text-[20px] py-2'>Smart Shopping</p>
        <p className='text-[12px] lg:text-[16px]'>AI advice before you buy</p>
      </div>
      <div className='p-5 text-center flex flex-col items-center border border-[#E5E5E5] rounded-md'>
        <Image src={ServiceImage4} alt="Service Image 1" className="w-[36px] lg:w-[88px] py-5" />
        <p className='font-bold text-[16px] lg:text-[20px] py-2'>Confidence Boost</p>
        <p className='text-[12px] lg:text-[16px]'>Feel polished, not overwhelmed</p>
      </div>
    </div>
  )
}

export default Items
