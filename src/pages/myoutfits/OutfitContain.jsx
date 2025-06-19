import React from 'react'
import Image from '../../component/Image'
import Trush from '../../assets/image/outfit/trush.png'
import Circule from '../../assets/image/outfit/circile.png'

const OutfitContain = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <p className='text-[24px] text-primary font-inter font-bold'>Outfit style</p>
        <div className='flex items-center gap-2'>
          <p className='text-[15px] text-primary font-inter '>Created 16 May 2025</p>
          <Image src={Trush} alt="Trash Icon" className='w-[20px] h-[20px] cursor-pointer' />
        </div>
      </div>
      <div>
        <Image src={Circule} alt="Circle Icon" className='mt-2.5' />
      </div>
      <p className='py-4 text-[16px] text-primary font-inter font-normal'>
        You're rocking a trendy casual look with a relaxed-fit beige sweater and high-waisted jeans — effortlessly stylish and season-appropriate. The outfit is comfy yet modern, but a few styling tweaks could elevate it further.
      </p>
      <div>
        <h4 className="text-[20px] text-primary font-inter font-bold mb-2">Stailas Advice</h4>
        <ul className="list-disc list-inside text-[16px] text-gray-700 space-y-1 font-inter">
          <li className="hover:text-primary transition">Add a belt or tuck in the sweater slightly to define your waist and balance proportions.</li>
          <li className="hover:text-primary transition">Pair the look with ankle boots or white sneakers to keep it clean and chic.</li>
          <li className="hover:text-primary transition">Try layering a light trench coat or adding a pop of color like mustard or teal in your accessories to liven up the outfit.</li>
        </ul>
      </div>

    </>
  )
}

export default OutfitContain
