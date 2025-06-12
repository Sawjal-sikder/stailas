import React from "react";
import Image from "./Image";
import groupImage from '../assets/image/group-48.png';

const SuccessComp = () => {
  return (
    <div className="mt-10 py-6 px-10 text-primary font-inter w-full">
      <h2 className="text-xl sm:text-5xl font-bold pb-4">Password Reset</h2>
      <p className="text-sm sm:text-sm font-extralight">
        Your password has been successfully reset. click confirm to set a new
        password
      </p>
      <div className="flex justify-center items-center py-20">
            <Image
              src={groupImage}
              alt="Logo"
              className="w-40"
            />
      </div>
    </div>
  );
};

export default SuccessComp;
