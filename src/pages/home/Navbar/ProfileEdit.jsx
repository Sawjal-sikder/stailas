import React, { useEffect, useState } from "react";
import Image from "../../../component/Image";
import ProfileImage from "../../../assets/image/profile/profilephoto.png";
import CloseIcon from "../../../assets/logo/close.png";
import { UpdateProfile } from "../../../utils/authService";

const ProfileEdit = ({ isEditProfile, setIsEditProfile, profile }) => {
  const { full_name, email, phone_number } = profile?.data || {};

  const [formData, setFormData] = useState({
    full_name: full_name || "",
    email: email || "",
    phone_number: phone_number || "",
    profile_image: null,
  });

  useEffect(() => {
    if (profile?.data) {
      setFormData({
        full_name: profile.data.full_name || "",
        email: profile.data.email || "",
        phone_number: profile.data.phone_number || "",
        profile_image: null,
      });
    }
  }, [profile]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsEditProfile(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [setIsEditProfile]);

  if (!isEditProfile) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("full_name", formData.full_name);
    data.append("email", formData.email);
    data.append("phone_number", formData.phone_number);
    if (formData.profile_image) {
      data.append("profile_image", formData.profile_image);
    }

    try {
      await UpdateProfile({ formData: data });
      alert("Profile updated successfully!");
      setIsEditProfile(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg py-5 px-5 lg:p-6 w-full max-w-sm sm:max-w-md md:max-w-[611px] shadow-lg relative transition-all">
        <button
          onClick={() => setIsEditProfile(false)}
          className="absolute top-5 right-5"
          aria-label="Close"
        >
          <img src={CloseIcon} alt="Close" className="w-6 h-6" />
        </button>

        <div className="text-center">
          <Image
            src={ProfileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto my-4"
          />
          <h4 className="font-inter font-bold text-[18px] sm:text-[20px] text-primary pt-2">
            {formData.full_name || "Your Name"}
          </h4>
        </div>

        <form
          onSubmit={handleSubmit}
          className="py-6 px-2 sm:px-[30px] grid grid-cols-12 gap-4 items-center text-sm sm:text-[18px] font-inter text-primary"
        >
          {/* Name */}
          <label htmlFor="name" className="text-sm font-medium text-gray-700 col-span-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="full_name"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            className="mt-1 block w-full border col-span-9 border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />

          {/* Email */}
          <label htmlFor="email" className="text-sm font-medium text-gray-700 col-span-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full border col-span-9 border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />

          {/* Phone */}
          <label htmlFor="phone" className="text-sm font-medium text-gray-700 col-span-3">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone_number"
            value={formData.phone_number}
            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
            className="mt-1 block w-full border col-span-9 border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />

          {/* Image */}
          <label htmlFor="Image" className="text-sm font-medium text-gray-700 col-span-3">
            Image
          </label>
          <input
            type="file"
            id="Image"
            name="profile_image"
            onChange={(e) => setFormData({ ...formData, profile_image: e.target.files[0] })}
            className="mt-1 block w-full border text-xs border-gray-300 col-span-9 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            accept="image/*"
          />

          {/* Buttons */}
          <div className="col-span-12 mt-4 text-right flex gap-x-5 items-center">
            <button
              type="button"
              onClick={() => setIsEditProfile(false)}
              className="bg-white text-secondary border border-secondary text-[16px] px-6 w-full py-3 rounded hover:bg-primary-dark transition col-span-6"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-secondary text-white text-[16px] px-6 w-full py-3 rounded hover:bg-primary-dark transition col-span-6"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
