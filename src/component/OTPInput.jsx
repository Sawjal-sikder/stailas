import React, { useRef } from "react";

const OTPInput = () => {
  const inputs = Array(5).fill(""); // 5 boxes
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // only digits
    e.target.value = value;
    if (value && index < 4) {
      inputRefs.current[index + 1].focus(); // move to next box
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus(); // go back on delete
    }
  };

  return (
    <div className="flex gap-7 justify-center mt-5">
      {inputs.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-14 text-2xl text-center border-2 rounded-xl outline-none focus:ring-2 ring-blue-500"
        />
      ))}
    </div>
  );
};

export default OTPInput;
