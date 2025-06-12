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
        <div className='px-10 grid grid-cols-4 gap-x-36'>
            {/* item */}
            <div className='text-center flex flex-col items-center relative'>
                <Image src={Image1} alt="Upload Image" className="" />
                <p className='text-md text-primary font-inter pt-5'>Upload a few outfit photos</p>
                <Image src={ArrowImage} alt="Upload Image 1" className="absolute top-0 -right-32 w-[200px]" />
            </div>
            <div className='text-center flex flex-col items-center relative'>
                <Image src={Image2} alt="Upload Image 2" className="" />
                <p className='text-md text-primary font-inter pt-5'>Get your Style Card</p>
                <Image src={ArrowImage2} alt="Upload Image 2" className="absolute bottom-16 -right-32 w-[200px]" />
            </div>
            <div className='text-center flex flex-col items-center relative'>
                <Image src={Image3} alt="Upload Image 3" className="" />
                <p className='text-md text-primary font-inter pt-5'>Get your Style Card</p>
                <Image src={ArrowImage} alt="Upload Image 1" className="absolute top-0 -right-32 w-[200px]" />
            </div>
            <div className='text-center flex flex-col items-center'>
                <Image src={Image4} alt="Upload Image 4" className="" />
                <p className='text-md text-primary font-inter pt-5'>Get your Style Card</p>
            </div>
        </div>
    )
}

export default Process
