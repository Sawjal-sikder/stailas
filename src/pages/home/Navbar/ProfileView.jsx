import React, { useState } from "react";
import Image from "../../../component/Image";
import ProfileImage from "../../../assets/image/profile/profilephoto.png";
import Button from "../../../component/Button";
import ProfileEdit from "./ProfileEdit";
import CloseIcon from "../../../assets/logo/close.png";
import { logout } from "../../../utils/authService";
import { useNavigate } from "react-router-dom";

const ProfileView = ({ isProfileOpen, setIsProfileOpen, profile }) => {
  const { full_name, first_name, last_name, email, phone_number, profile_image } = profile?.data || {};
  const navigate = useNavigate();
  const [isEditProfile, setIsEditProfile] = useState(false);
  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (

    <>
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg py-8 px-5 lg:p-6 w-full max-w-sm sm:max-w-md md:max-w-[611px] shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsProfileOpen(false)}
              className="absolute top-5 right-5"
            >
              <img src={CloseIcon} alt="Close" className="w-6 h-6" />
            </button>

            {/* Profile Image & Name */}
            <div className="text-center">
              <Image
                src={profile_image || ProfileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="font-inter font-bold text-[18px] sm:text-[20px] text-primary pt-2">
                {full_name}
              </h4>
            </div>

            {/* Profile Info */}
            <div className="py-6 px-2 sm:px-[30px] grid overflow-auto grid-cols-12 gap-3 sm:gap-4 items-center text-sm sm:text-[18px] font-inter text-primary">
              <div className="col-span-3">Name</div>
              <div className="col-span-9">
                {full_name}
              </div>

              <div className="col-span-3">Email</div>
              <div className="col-span-9">{email || "example@gmail.com"}</div>

              <div className="col-span-3">Phone</div>
              <div className="col-span-9">{phone_number || "+97258488"}</div>
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
              <button
                onClick={handleLogout}
                className="w-full text-white bg-red-600 font-inter py-3 rounded-full">
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
