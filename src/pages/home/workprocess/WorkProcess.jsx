import React from 'react'
import Header from '../../../component/Header'
import Process from './Process'
import Button from '../../../component/Button'
import { NavLink } from 'react-router-dom'

const WorkProcess = () => {
  return (
    <div className='lg:py-24 lg:px-40 p-4'>
      <Header text="How it works" className="mb-20" />
      <Process />
      <div className='pt-16 text-center'>
        <NavLink to={"/chat"}>
          <Button text={"Ask Anything"} className="text-sm w-36 lg:w-64 rounded-lg" />
        </NavLink>
      </div>
    </div>
  )
}

export default WorkProcess
