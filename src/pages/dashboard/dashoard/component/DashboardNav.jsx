import React, { useState } from "react";
import Image from "../../../../component/Image";
import logo from "../../../../assets/logo/logo.png";
import User_logo from "../../../../assets/logo/user-icon.png";
import BorderIcon from "../../../../assets/logo/Border.png";
import { NavLink } from "react-router-dom";
import Profile from "../page/AdminComponent/Profile";

const DashboardNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 flex flex-col sm:flex-row justify-between items-center font-inter text-primary gap-y-3 sm:gap-y-0">
        <NavLink to={"/dashboard/home"}>
          <Image src={logo} alt="Stailas Logo" className="w-[120px] sm:w-[140px] md:w-[160px]" />
        </NavLink>
        <div
          className="border rounded-md flex items-center gap-x-2 sm:gap-x-4 px-2 sm:px-4 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Image
            src={User_logo}
            alt="User Logo"
            className="rounded-full w-[36px] sm:w-[44px] md:w-[50px] p-1.5 sm:p-2.5"
          />
          <div className="hidden xs:block">
            <h4 className="text-xs sm:text-sm font-bold">Moni Roy</h4>
            <p className="text-[10px] sm:text-[12px]">Super Admin</p>
          </div>
          <Image src={BorderIcon} alt="Border Icon" className="w-3 sm:w-4" />
        </div>
      </div>
      <Profile open={open} setOpen={setOpen} />
    </div>
  );
};

export default DashboardNav;
