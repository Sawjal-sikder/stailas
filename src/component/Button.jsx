import React from 'react'

const Button = ({ text, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      className={`text-white text-[12px] lg:text-[16px] bg-secondary font-inter focus:ring-none focus:outline-none focus:ring-primary/50 font-bold text-md px-5 py-3 text-center ${className}`}
    >
      {text}
    </button>
  );
};
export default Button;


