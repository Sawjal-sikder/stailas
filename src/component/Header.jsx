import React from 'react'

const Header = ({ text, className = '' }) => {
  return (
    <h1 className={`text-[48px] text-primary font-inter ${className}`}>
      {text}
    </h1>
  )
}

export default Header
