import React from 'react'
import Header from '../../../component/Header'
import Items from './Items'

const Service = () => {
    return (
        <div className='py-20 px-4 lg:px-40 font-inter text-primary'>
            <div className='pb-10'>
                <Header text="What You’ll Get" className="mb-4" />
                <p className='text-[12px] lg:text-[20px]'>Think of it as the style refresh you’ve always wanted. No
                    drama, no doubt—just clear, easy wins.</p>
            </div>
            <Items />
        </div>
    )
}

export default Service
