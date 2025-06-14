import React from 'react'
import Header from '../../../component/Header'
import Button from '../../../component/Button'
import Image from '../../../component/Image'
import WomanImage1 from "../../../assets/image/woman/woman1.png"
import WomanImage2 from "../../../assets/image/woman/woman2.png"
import WomanImage3 from "../../../assets/image/woman/woman3.png"
import WomanImage4 from "../../../assets/image/woman/woman4.png"

const WomenLove = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24">
      <Header text="Why Women Love Stailas" className="mb-6 lg:mb-12" />
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 pt-10">
        {/* item */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Image src={WomanImage1} alt="WomanImage1" className="w-full max-w-[366px]" />
          <p className="font-inter text-md text-gray-700 md:px-[27px] font-bold">
            Finally a stylist who gets me—without making me feel judged.
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <Image src={WomanImage2} alt="WomanImage2" className="w-full max-w-[366px]" />
          <p className="font-inter text-md text-gray-700 md:px-[27px] font-bold">
            It helped me see I already have a signature look. I  just needed a mirror.
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <Image src={WomanImage3} alt="WomanImage3" className="w-full max-w-[366px]" />
          <p className="font-inter text-md text-gray-700 md:px-[27px] font-bold">
            Shopping is smarter now. I know what flatters me  and what to skip.”
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <Image src={WomanImage4} alt="WomanImage4" className="w-full max-w-[366px]" />
          <p className="font-inter text-md text-gray-700 md:px-[27px] font-bold">
            The best self-investment I’ve made all year.
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button text="Start Now" className="mt-10 lg:mt-16 text-lg w-32 lg:w-64" />
      </div>
    </div>
  )
}

export default WomenLove
