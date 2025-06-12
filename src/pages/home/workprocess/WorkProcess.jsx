import React from 'react'
import Header from '../../../component/Header'
import Process from './Process'
import Button from '../../../component/Button'

const WorkProcess = () => {
  return (
    <div className='py-24 px-40'>
      <Header text="How it works" className="mb-20" />
      <Process />
      <div className='pt-16 text-center'>
        <Button text={"Ask Anything"} className="text-lg w-32 lg:w-64" />
      </div>
    </div>
  )
}

export default WorkProcess
