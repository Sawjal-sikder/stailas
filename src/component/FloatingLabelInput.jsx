import React from 'react';

const FloatingLabelInput = ({
  type = 'text',
  id,
  label,
  placeholder = ' ',
  inputClassName = '',
  labelClassName = '',
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`block px-4 pb-2.5 pt-4 w-full text-sm text-primary bg-white rounded-md border border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer ${inputClassName}`}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm text-primary font-bold duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${labelClassName}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
