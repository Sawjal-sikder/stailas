import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";
import MenuIcon from "../../../assets/logo/gg_menu-left.png";
import UserIcon from "../../../assets/logo/user-icon.png";
import Image from "../../../component/Image";
import NavLinkButton from "../../../component/navbar/NavLinkButton";
import ProfileView from "./ProfileView";
import { getProfile } from "../../../utils/authService";
import UserIconSvg from '../../../component/base/UserIcon'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [profile, setProfile] = useState({});
  // console.log(profile?.data?.first_name);
  // console.log(profile);

  useEffect(() => {
    getProfile().then(data => {
      setProfile(data);
    });
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-40 py-4">
      <div className="flex items-center justify-between lg:justify-normal relative px-4 py-3">
        {/* Menu Icon - Only on Mobile */}
        <button
          className="block lg:hidden absolute left-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image src={MenuIcon} alt="Menu Icon" className="w-6" />
        </button>

        {/* Logo */}
        <NavLink to="/" className="mx-auto lg:mx-0 lg:mr-auto">
          <Image src={Logo} alt="logo" className="w-20 md:w-[192px]" />
        </NavLink>

        {/* Nav Links - Centered on Large Screens */}
        <div className="hidden lg:flex justify-center items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          <NavLinkButton to="/outfit" label="Your Outfits" />
          <NavLinkButton to="/chat" label="Stailas Chat" />
        </div>

        {/* User Info or Login - Right on Large Screens */}
        {profile?.data ? (
          <div
            onClick={() => setIsProfileOpen(true)}
            className="hidden lg:flex bg-secondary px-6 py-2 rounded-full items-center gap-3 ml-auto cursor-pointer"
          >
            <Image src={profile?.data?.profile_image || UserIcon} alt="user-icon" className="w-7 h-7" />
            <p className="text-white font-inter font-medium">{profile?.data?.first_name || "Hi"}</p>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="hidden lg:flex bg-secondary px-6 py-2 rounded-full items-center gap-3 ml-auto cursor-pointer"
          >
            {/* <Image src={UserIcon} alt="user-icon" className="w-7 h-7" /> */}
            <UserIconSvg />
            <p className="text-white font-inter font-medium">Login</p>
          </NavLink>
        )}
        <ProfileView
          isProfileOpen={isProfileOpen}
          setIsProfileOpen={setIsProfileOpen}
          profile={profile}
        />
        {isMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-3 font-inter text-sm">
            <NavLinkButton to="/outfit" label="Your Outfits" />
            <NavLinkButton to="/chat" label="Stailas Chat" />
            {profile?.data ? (
              <NavLinkButton
                label="My Profile"
                onClick={() => setIsProfileOpen(true)}
              />
            ) : (
              <NavLinkButton to="/login" label="Login" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
