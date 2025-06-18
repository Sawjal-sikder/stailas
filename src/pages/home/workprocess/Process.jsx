import React from 'react'
import Image from '../../../component/Image'
import Image1 from "../../../assets/image/work/p1.png"
import Image2 from "../../../assets/image/work/p2.png"
import Image3 from "../../../assets/image/work/p3.png"
import Image4 from "../../../assets/image/work/p4.png"
import ArrowImage from "../../../assets/image/work/a1.png"
import ArrowImage2 from "../../../assets/image/work/a2.png"

const Process = () => {
  return (
    <div className='px-4 md:px-10 lg:py-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-x-36'>
      {/* Step 1 */}
      <div className='text-center flex flex-col items-center relative'>
        <Image src={Image1} alt="Upload Image" className="w-20 h-auto sm:w-32" />
        <p className='text-md text-primary font-inter pt-5'>Upload a few outfit photos</p>
        <Image
          src={ArrowImage}
          alt="Arrow 1"
          className="rotate-[45deg] lg:rotate-0 absolute top-2/4 lg:top-1/4 -right-28 lg:-right-40 w-32 lg:w-48 -translate-y-1/2"
        />
      </div>
      <div className='lg:hidden'></div>

      <div className='lg:hidden'></div>
      {/* Step 2 */}
      <div className='text-center flex flex-col items-center relative'>
        <Image src={Image2} alt="Style Card" className="w-20 h-auto sm:w-32" />
        <p className='text-md text-primary font-inter pt-5'>Get your Style Card</p>
        <Image
          src={ArrowImage2}
          alt="Arrow 2"
          className="rotate-[135deg] lg:rotate-0 absolute top-2/4 right-32 lg:-right-40 w-32 lg:w-48 -translate-y-1/2"
        />
      </div>
      <div className='lg:hidden'></div>

      <div className='lg:hidden'></div>

      {/* Step 3 */}
      <div className='text-center flex flex-col items-center relative'>
        <Image src={Image3} alt="Style Suggestion" className="w-20 h-auto sm:w-32" />
        <p className='text-md text-primary font-inter pt-5'>Try personalized outfits</p>
        <Image
          src={ArrowImage}
          alt="Arrow 3"
          className="rotate-[45deg] lg:rotate-0 absolute top-2/4 lg:top-1/4 -right-28 lg:-right-40 w-32 lg:w-48 -translate-y-1/2"
        />
      </div>
      <div className='lg:hidden'></div>

      <div className='lg:hidden'></div>

      {/* Step 4 */}
      <div className='text-center flex flex-col items-center'>
        <Image src={Image4} alt="Shop" className="w-20 h-auto sm:w-32" />
        <p className='text-md text-primary font-inter pt-5'>Shop your favorite look</p>
      </div>
    </div>
  )
}

export default Process
