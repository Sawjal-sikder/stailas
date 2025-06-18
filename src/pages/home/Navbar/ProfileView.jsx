import React, { useState } from "react";
import Image from "../../../component/Image";
import ProfileImage from "../../../assets/image/profile/profilephoto.png";
import Button from "../../../component/Button";
import ProfileEdit from "./ProfileEdit";

const ProfileView = ({ isProfileOpen, setIsProfileOpen }) => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  return (
    <>
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg py-2 lg:p-6 w-full max-w-sm sm:max-w-md md:max-w-[611px] shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsProfileOpen(false)}
              className="absolute top-2 right-2 bg-black rounded-full text-white px-2 py-1 hover:bg-red-600 transition"
            >
              ✕
            </button>

            {/* Profile Image & Name */}
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

            {/* Profile Info */}
            <div className="py-6 px-2 sm:px-[30px] grid overflow-auto grid-cols-12 gap-3 sm:gap-4 items-center text-sm sm:text-[18px] font-inter text-primary">
              <div className="col-span-3">Name</div>
              <div className="col-span-9">Ovie Rahaman Sheikh</div>

              <div className="col-span-3">Email</div>
              <div className="col-span-9">ovierahaman1@gmail.com</div>

              <div className="col-span-3">Phone</div>
              <div className="col-span-9">+88084454556444</div>
            </div>


            {/* Action Buttons */}
            <div className="py-4 px-2 sm:px-[30px] grid grid-cols-2 gap-3 sm:gap-4">
              <button
                onClick={() => setIsProfileOpen(false)}
                className="text-secondary bg-white border border-secondary font-semibold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsEditProfile(true)}
                className="bg-secondary text-white font-semibold py-2 px-4 rounded"
              >
                Edit Profile
              </button>
            </div>

            <ProfileEdit
              isEditProfile={isEditProfile}
              setIsEditProfile={setIsEditProfile}
            />

            {/* Logout Button */}
            <div className="text-center px-2 sm:px-[30px] mt-6">
              <button className="w-full text-white bg-red-600 font-inter py-3 rounded-full">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileView;
