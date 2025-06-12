import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Image from "./Image";
import Arrow from "../assets/image/arro_left.png";
import FloatingLabelInput from "./FloatingLabelInput";

const ForgotPasForm = () => {
  return (
    <div className="mt-10 py-6 px-10 text-primary font-inter w-full">
      <div className="flex items-center justify-start gap-x-2">
        <Image src={Arrow} alt="Arrow_icon" className="w-2" />
        <NavLink
          to="/login"
          className="py-4 font-bold font-inter text-primary"
        >
          Back To login
        </NavLink>
      </div>
      <h2 className="text-xl sm:text-5xl font-bold pb-4">Forgot your <p className="py-5">password?</p></h2>
      <p className="text-sm sm:text-sm font-extralight">
        Don’t worry, happens to all of us. Enter your email below to recover your password
      </p>

      <form action="" method="post" className="py-8 sm:py-10">
        <div className="pb-3">
          <FloatingLabelInput
            type="email"
            id="email"
            label="EMAIL"
            placeholder=" "
            inputClassName=""
            labelClassName=""
          />
        </div>        

        <Button text="SUBMIT" type="submit" />
      </form>

      
    </div>
  );
};

export default ForgotPasForm;
