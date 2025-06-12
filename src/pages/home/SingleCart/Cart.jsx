import React from 'react'
import Header from '../../../component/Header'
import Image from '../../../component/Image'
import CartImage from "../../../assets/image/service/cart.png"
import Button from '../../../component/Button'

const Cart = () => {
  return (
    <div className='px-40 py-20'>
      <Header className='pr-20 pb-20' text={`For Women Who Want to Feel More “Put Together” Without the Effort`} />
      <div className='grid grid-cols-2 items-center gap-x-10'>  
        <div>
            <Image src={CartImage} alt={"Cart Image"} />
        </div>
        <div className='font-inter text-primary'>
            <p className='text-lg pr-14'>Whether you’re back in the office, starting over, chasing a toddler, or just tired of second-guessing your look—Stailas is here to help you glow up quietly.</p>
            <p className='text-lg pt-5'> No pressure. Just practical, beautiful style—your way.</p>
            <Button text="Start With One Outfit" className="w-96 mt-10 text-xl" />

        </div>
      </div>
    </div>
  )
}

export default Cart
