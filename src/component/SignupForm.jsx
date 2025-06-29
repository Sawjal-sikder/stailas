import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import FloatingLabelInput from "./FloatingLabelInput";
import api from "../utils/api";
import LoadingSpinner from "./base/LoadingSpinner";

const SignupForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: '',
    agree_terms: false,
  });
  const [errorMsg, setErrorMsg] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree_terms) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    if (!formData.email || !formData.phone_number || !formData.first_name || !formData.last_name) {
      alert('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirm_password) {
      alert('Passwords do not match!');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/api/register/', formData);

      // console.log('Registration successful:', response.data);
      // Redirect or show success message
      navigate('/signup/verify', { state: { email: formData.email } });
    } catch (error) {
      const errorData = error.response?.data;
      // console.error('Registration failed:', errorData || error.message);
      setErrorMsg(errorData || { detail: error.message });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-10 py-6 px-10 text-primary font-inter w-full ">
      <LoadingSpinner text="Creating account..." loading={loading} />
      <h2 className="text-xl sm:text-5xl font-bold pb-4">Sign up</h2>
      <p className="text-sm sm:text-sm font-extralight">
        Let’s get you all st up so you can access your personal account.
      </p>
      {Object.keys(errorMsg).length > 0 && (
        <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded-md text-sm">
          <ul className="list-disc list-inside">
            {Object.entries(errorMsg).map(([field, messages]) =>
              messages.map((msg, i) => (
                <li key={`${field}-${i}`}>
                  <strong>{field.replace('_', ' ')}:</strong> {msg}
                </li>
              ))
            )}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="py-8 sm:py-10">
        <div className="grid grid-cols-2 items-center">
          <div className="pb-3 pr-2">
            <FloatingLabelInput
              type="text"
              id="first_name"
              label="FIRST NAME"
              placeholder=" "
              inputClassName=""
              labelClassName=""
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="pb-3 pl-2">
            <FloatingLabelInput
              type="text"
              id="last_name"
              label="LAST NAME"
              placeholder=" "
              value={formData.last_name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="pb-3 pl-2">
            <FloatingLabelInput
              type="text"
              id="phone_number"
              label="PHONE NUMBER"
              placeholder=" "
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="pb-3">
          <FloatingLabelInput
            type="password"
            id="password"
            label="PASSWORD"
            placeholder=" "
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="pt-3">
          <FloatingLabelInput
            type="password"
            id="confirm_password"
            label="CONFIRM PASSWORD"
            placeholder=" "
            value={formData.confirm_password}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center py-5">
          <input
            id="agree_terms"
            type="checkbox"
            checked={formData.agree_terms}
            onChange={handleChange}
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-sm focus:ring-primary focus:ring-2"
          />
          <label
            htmlFor="agree_terms"
            className="ml-2 text-sm font-medium text-gray-700 font-inter"
          >
            I agree to all the{' '}
            <span className="text-red-600 cursor-pointer hover:underline">Terms</span> and{' '}
            <span className="text-red-600 cursor-pointer hover:underline">Privacy Policies</span>
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
