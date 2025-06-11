import React from 'react'

const Button = ({ text, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      className={`w-full text-white bg-secondary font-inter focus:ring-4 focus:outline-none focus:ring-primary/50 font-bold rounded-md text-md px-5 py-2.5 text-center ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
