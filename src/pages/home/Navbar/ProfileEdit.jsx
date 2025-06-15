import React, { useEffect } from "react";
import Image from "../../../component/Image";
import ProfileImage from "../../../assets/image/profile/profilephoto.png";

const ProfileEdit = ({ isEditProfile, setIsEditProfile }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsEditProfile(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [setIsEditProfile]);

  if (!isEditProfile) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg py-2 lg:p-6 w-full max-w-sm sm:max-w-md md:max-w-[611px] shadow-lg relative transition-all">
        <button
          onClick={() => setIsEditProfile(false)}
          className="absolute top-2 right-2 bg-black rounded-full text-white px-2 py-1 hover:bg-red-600 transition"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="text-center">
          <Image
            src={ProfileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h4 className="font-inter font-bold text-[18px] sm:text-[20px] text-primary pt-2">
            Ovie Rahaman Sheikh
          </h4>
        </div>

        <form className="py-6 px-2 sm:px-[30px] grid grid-cols-2 gap-4 items-center text-sm sm:text-[18px] font-inter text-primary">
          {/* Name */}
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue="Ovie Rahaman Sheikh"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />

          {/* Email */}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue="ovierahaman1@gmail.com"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />

          {/* Phone */}
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            defaultValue="+88084454556444"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />

          {/* Image */}
          <label
            htmlFor="Image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="Image"
            name="Image"
            className="mt-1 block w-full border text-xs border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            accept="image/*"
          />

          {/* Submit button spans both columns */}
          <div className="col-span-2 mt-4 text-right flex gap-x-5 items-center">
            <button
              onClick={() => setIsEditProfile(false)}
              className="bg-white text-secondary border border-secondary text-[16px] px-6 w-full py-3 rounded hover:bg-primary-dark transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-secondary text-white text-[16px] px-6 w-full py-3 rounded hover:bg-primary-dark transition"
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
