import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Image from "./Image";
import Arrow from "../assets/image/arro_left.png";
import FloatingLabelInput from "./FloatingLabelInput";

const NewPasswordForm = () => {
  return (
    <div className="mt-10 py-6 px-10 text-primary font-inter w-full">
      <h2 className="text-xl sm:text-5xl font-bold pb-4">Set a password</h2>
      <p className="text-sm sm:text-sm font-extralight">
        Your previous password has been reseted. Please set a new password for
        your account.
      </p>

      <form action="" method="post" className="py-8 sm:py-10">
        <div className="pb-3">
          <FloatingLabelInput
            type="password"
            id="password"
            label="ENTER PASSWORD"
            placeholder=" "
            inputClassName=""
            labelClassName=""
          />
        </div>
        <div className="pt-3">
          <FloatingLabelInput
            type="password"
            id="confirm-password"
            label="CONFIRM PASSWORD"
            placeholder=" "
            inputClassName=""
            labelClassName=""
          />
        </div>
        <div className="py-5">
          <Button text="VERIFY" type="submit" />
        </div>
      </form>

      <div className="flex justify-center items-center gap-x-1 *:text-sm">
        <p>Didn’t receive a code?</p>
        <NavLink to="/" className="text-red-600 font-semibold hover:underline">
          Resend
        </NavLink>
      </div>
    </div>
  );
};

export default NewPasswordForm;
