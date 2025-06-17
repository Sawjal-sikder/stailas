import React from "react";
import Image from "../../../../component/Image";
import logo from "../../../../assets/logo/logo.png";
import User_logo from "../../../../assets/logo/user-icon.png";
import BorderIcon from "../../../../assets/logo/Border.png";
import { NavLink } from "react-router-dom";
import Profile from "../page/AdminComponent/Profile";

const DashboardNav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <div className="px-10 py-5 flex justify-between items-center font-inter text-primary ">
        <NavLink to={"/dashoard/home"}>
          <Image src={logo} alt="Stailas Logo" className="w-[160px]" />
        </NavLink>
        <div
          className="border rounded-md flex items-center gap-x-4 px-4 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Image
            src={User_logo}
            alt="User Logo"
            className="rounded-full w-[50px] p-2.5"
          />
          <div>
            <h4 className="text-sm font-bold">Moni Roy</h4>
            <p className="text-[12px]">Super Admin</p>
          </div>
          <Image src={BorderIcon} alt="Border Icon" className="" />
        </div>
      </div>
      <Profile open={open} setOpen={setOpen} />
      {/* {open && (
        <div className="absolute right-10 top-20 bg-white shadow-md rounded-md w-40 p-2 z-50">dffsf</div>
      )} */}
    </div>
  );
};

export default DashboardNav;
