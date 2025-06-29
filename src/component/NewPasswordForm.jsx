import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import Image from "./Image";
import Arrow from "../assets/image/arro_left.png";
import FloatingLabelInput from "./FloatingLabelInput";
import LoadingSpinner from "./base/LoadingSpinner";
import api from "../utils/api"; // Make sure this path matches where your api instance is defined

const NewPasswordForm = ({ email, otp_code }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: email || "",
    otp_code: otp_code || "",
    new_password: "",
    confirm_password: "",
  })
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.new_password || !formData.confirm_password) {
      alert("Please fill in all fields.");
      return;
    }
    if (formData.new_password !== formData.confirm_password) {
      alert("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const response = await api.post("/api/password-reset/", formData);
      if (response.status === 200) {
        // Redirect to login or another page
        navigate("/password-success");
      }
    } catch (error) {
      const data = error.response?.data;
      if (data && typeof data === "object") {
        setErrors(data);
      } else {
        setErrors({ non_field_errors: ["Failed to set new password."] });
      }
      setErrorMsg(""); // Optional: hide generic error message if you're showing field-level ones
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-10 py-6 px-10 text-primary font-inter w-full">
      <LoadingSpinner loading={loading} />
      <h2 className="text-xl sm:text-5xl font-bold pb-4">Set a password</h2>
      <p className="text-sm sm:text-sm font-extralight">
        Your previous password has been reseted. Please set a new password for
        your account.
      </p>
      {errors.new_password && (
        <p className="text-sm text-red-600 mt-1">{errors.new_password[0]}</p>
      )}
      <form action="" method="post" className="py-8 sm:py-10" onSubmit={handleSubmit}>
        <div className="pb-3">
          <FloatingLabelInput
            type="password"
            id="password"
            label="ENTER PASSWORD"
            placeholder=" "
            inputClassName=""
            labelClassName=""
            value={formData.new_password}
            onChange={(e) => setFormData({ ...formData, new_password: e.target.value })}
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
            value={formData.confirm_password}
            onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
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
