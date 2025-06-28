import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import Image from "./Image";
import Arrow from "../assets/image/arro_left.png";
import FloatingLabelInput from "./FloatingLabelInput";
import api from "../utils/api";
import LoadingSpinner from "./base/LoadingSpinner";

const PasswordVerifyForm = ({ email }) => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState({
    otp_code: "",
    otp_type: "registration",
    email: email || "",
  });

  const navigate = useNavigate(); // <-- Move this here

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCode({
      ...code,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.otp_code) {
      alert("Please enter the verification code.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/api/verify-otp/", code);
      navigate("/login"); // <-- Use navigate here
    } catch (error) {
      console.error("Verification failed:", error.response?.data || error.message);
      alert("Verification failed. Please check your code and try again.");
    } finally {
      setLoading(false);
    }
  };


  const [resendTimer, setResendTimer] = useState(0);
  const RESEND_TIMEOUT = 10 * 60; // 10 minutes in seconds

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleResendOtp = async () => {
    setLoading(true);
    try {
      await api.post("/api/resend-otp/", {
        email: email,
        otp_type: "registration"
      });
      setResendTimer(RESEND_TIMEOUT);
      // Optionally, show a success message to the user
    } catch (error) {
      // Optionally, handle error (e.g., show an error message)
      console.error("Resend OTP failed:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };


  return (
    <div className="mt-10 py-6 px-10 text-primary font-inter w-full">
      <LoadingSpinner text="Verifying code..." loading={loading} />
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

      <form onSubmit={handleSubmit} action="" method="post" className="py-8 sm:py-10">
        <div className="pb-3">
          <FloatingLabelInput
            type="text"
            id="otp_code"
            label="ENTER CODE"
            placeholder=" "
            inputClassName=""
            labelClassName=""
            value={code.otp_code}
            onChange={handleChange}
          />
        </div>

        <button
          type='submit'
          className="text-white text-[12px] lg:text-[16px] bg-secondary font-inter focus:ring-none focus:outline-none focus:ring-primary/50 font-bold text-md px-5 py-3 text-center"
          disabled={code.otp_code.length !== 6}
        >
          VERIFY
        </button>
      </form>

      <div className="flex justify-center items-center gap-x-1 *:text-sm">
        <p>Didn’t receive a code?</p>
        <button
          onClick={handleResendOtp}
          className="text-red-600 font-semibold hover:underline"
        >
          Resend
        </button>
      </div>
    </div>
  );
};

export default PasswordVerifyForm;
