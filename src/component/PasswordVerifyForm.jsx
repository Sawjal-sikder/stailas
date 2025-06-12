import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Image from "./Image";
import Arrow from "../assets/image/arro_left.png";
import FloatingLabelInput from "./FloatingLabelInput";

const PasswordVerifyForm = () => {
  return (
    <div className="mt-10 py-6 px-10 text-primary font-inter w-full">
      <div className="flex items-center justify-start gap-x-2">
        <Image src={Arrow} alt="Arrow_icon" className="w-2" />
        <NavLink to="/login" className="py-4 font-bold font-inter text-primary">
          Back To login
        </NavLink>
      </div>
      <h2 className="text-xl sm:text-5xl font-bold pb-4">Verify code</h2>
      <p className="text-sm sm:text-sm font-extralight">
        An authentication code has been sent to your email.
      </p>

      <form action="" method="post" className="py-8 sm:py-10">
        <div className="pb-3">
          <FloatingLabelInput
            type="text"
            id="code"
            label="ENTER CODE"
            placeholder=" "
            inputClassName=""
            labelClassName=""
          />
        </div>

        <Button text="VERIFY" type="submit" />
      </form>

      <div className="flex justify-center items-center gap-x-1 *:text-sm">
        <p>Didn’t receive a code?</p>
        <NavLink
          to="/"
          className="text-red-600 font-semibold hover:underline"
        >
          Resend
        </NavLink>
      </div>
    </div>
  );
};

export default PasswordVerifyForm;
