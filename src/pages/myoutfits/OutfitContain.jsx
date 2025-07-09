import React from 'react'
import Image from '../../component/Image'
import Trush from '../../assets/image/outfit/trush.png'
import Circule from '../../assets/image/outfit/circile.png'

const OutfitContain = ({ outfit }) => {
  // console
  return (
    <>
      <div className='flex justify-between items-center'>
        <p className='text-[24px] text-primary font-inter font-bold'>{outfit.title}</p>
        <div className='flex items-center gap-2'>
          {/* <p className='text-[15px] text-primary font-inter '>Created 16 May 2025</p>
          <Image src={Trush} alt="Trash Icon" className='w-[20px] h-[20px] cursor-pointer' /> */}
        </div>
      </div>
      <div className='flex items-center  my-2 *:-mx-0.5'>
        <div className='w-9 h-9 rounded-full' style={{ backgroundColor: outfit.colors?.[0] }}></div>
        <div className='w-9 h-9 rounded-full' style={{ backgroundColor: outfit.colors?.[1] }}></div>
        <div className='w-9 h-9 rounded-full' style={{ backgroundColor: outfit.colors?.[2] }}></div>
      </div>
      <p className='py-4 text-[16px] text-primary font-inter font-normal'>
        {outfit.description}
      </p>
      <div>
        <h4 className="text-[20px] text-primary font-inter font-bold mb-2">Stailas Advice</h4>
        <ul className="list-disc list-inside text-[16px] text-gray-700 space-y-1 font-inter">
          {outfit.bullet_advice && outfit.bullet_advice.map((advice, index) => (
            <li key={index} className="hover:text-primary transition">{advice}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default OutfitContain
