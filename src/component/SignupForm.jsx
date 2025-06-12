import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import FloatingLabelInput from "./FloatingLabelInput";

const SignupForm = () => {
  return (
    <div className="mt-10 py-6 px-10 text-primary font-inter w-full ">
      <h2 className="text-xl sm:text-5xl font-bold pb-4">Sign up</h2>
      <p className="text-sm sm:text-sm font-extralight">
        Let’s get you all st up so you can access your personal account.
      </p>

      <form action="" method="post" className="py-8 sm:py-10">
        <div className="grid grid-cols-2 items-center">
          <div className="pb-3 pr-2">
            <FloatingLabelInput
              type="text"
              id="first_name"
              label="FIRST NAME"
              placeholder=" "
              inputClassName=""
              labelClassName=""
            />
          </div>
          <div className="pb-3 pl-2">
            <FloatingLabelInput
              type="text"
              id="last_name"
              label="LAST NAME"
              placeholder=" "
              inputClassName=""
              labelClassName=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="pb-3 pr-2">
            <FloatingLabelInput
              type="email"
              id="email"
              label="EMAIL"
              placeholder=" "
              inputClassName=""
              labelClassName=""
            />
          </div>
          <div className="pb-3 pl-2">
            <FloatingLabelInput
              type="text"
              id="phone_number"
              label="PHONE NUMBER"
              placeholder=" "
              inputClassName=""
              labelClassName=""
            />
          </div>
        </div>
        <div className="pb-3">
          <FloatingLabelInput
            type="password"
            id="password"
            label="PASSWORD"
            placeholder=" "
            inputClassName=""
            labelClassName=""
          />
        </div>
        <div className="pt-3">
          <FloatingLabelInput
            type="password"
            id="confirm_password"
            label="CONFIRM PASSWORD"
            placeholder=" "
            inputClassName=""
            labelClassName=""
          />
        </div>

        {/* remember me and forgot password section */}
        <div className="flex items-center py-5">
          <input
            id="agree_terms"
            type="checkbox"
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-sm focus:ring-primary focus:ring-2"
          />
          <label
            htmlFor="agree_terms"
            className="ml-2 text-sm font-medium text-gray-700 font-inter"
          >
            I agree to all the{" "}
            <span className="text-red-600 cursor-pointer hover:underline">
              Terms
            </span>{" "}
            and{" "}
            <span className="text-red-600 cursor-pointer hover:underline">
              Privacy Policies
            </span>
          </label>
        </div>

        <Button text="CREATE ACCOUNT" type="submit" />
      </form>

      <div className="flex justify-center items-center gap-x-1 font-inter">
        <p>Already have an account?</p>
        <NavLink
          to="/login"
          className="text-red-600 font-semibold hover:underline"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default SignupForm;
