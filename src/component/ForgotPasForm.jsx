import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import Image from "./Image";
import Arrow from "../assets/image/arro_left.png";
import FloatingLabelInput from "./FloatingLabelInput";
import api from "../utils/api";
import LoadingSpinner from "./base/LoadingSpinner";

const ForgotPasForm = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();




  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      alert('Please enter your email address');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/api/password-reset-request/', formData);
      if (response.status === 200) {
        navigate('/forgot-password/verify', { state: { email: formData.email } });

        // Optionally redirect to another page or clear the form
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while processing your request');

    } finally {
      setLoading(false);
      setMessage(true);
    }
  }
  return (
    <div className="mt-10 py-6 px-10 text-primary font-inter w-full">
      <LoadingSpinner loading={loading} text="Sending password reset link..." />
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
      {message && <p className="text-sm sm:text-sm font-extralight text-secondary">
        Password reset OTP has been sent to your email address. Please check your inbox (and spam/junk folder) to continue.
      </p>}

      <form action="" method="post" className="py-8 sm:py-10" onSubmit={handleSubmit}>
        <div className="pb-3">
          <FloatingLabelInput
            type="email"
            id="email"
            label="EMAIL"
            placeholder=" "
            inputClassName=""
            labelClassName=""
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <Button text="SUBMIT" type="submit" />
      </form>


    </div>
  );
};

export default ForgotPasForm;
