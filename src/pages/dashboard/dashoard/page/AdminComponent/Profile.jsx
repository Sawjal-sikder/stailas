import React, { useState } from "react";
import Image from "../../../../../component/Image";
import UserImage from "../../../../../assets/logo/user-icon.png";
import Button from "../../../../../component/Button";
import ProfileAction from "./ProfileAction";
import AdminPasswordChange from "./AdminPasswordChange";

const Profile = ({ open, setOpen }) => {
      const [openProfile, setOpenProfile] = useState(false);
      const [isChangePassword, setIsChangePassword] = useState(false);
return (
      <div>
            {open && (
                  <div className="absolute right-10 top-20 bg-white shadow-md rounded-md w-[440px] px-6 py-7 z-50 font-inter text-primary">
                        <div className="flex items-center gap-x-4 cursor-pointer border-b-2 pb-9 mb-9">
                              <Image
                                    src={UserImage}
                                    alt="User Image"
                                    className="rounded-full w-14 h-14 "
                              />
                              <div className="flex flex-col justify-center">
                                    <h4 className="text-xl font-bold py-2">Moni Roy </h4>
                                    <p className="text-[12px] w-full bg-secondary py-2 rounded-full text-xs text-center text-white">
                                          Super Admin
                                    </p>
                              </div>
                        </div>
                        <div>
                              <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => setOpenProfile(!openProfile)}>
                                    <div className=" text-lg text-primary font-semibold flex items-center">Profile</div>
                                    <div className=" text-right px-4 text-lg text-secondary font-bold flex items-center">{">"}</div>
                              </div>
                              <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => setIsChangePassword(!isChangePassword)}>
                                    <div className=" text-lg text-primary font-semibold flex items-center">Change Password</div>
                                    <div className=" text-right px-4 text-lg text-secondary font-bold flex items-center">{">"}</div>
                              </div>
                        </div>
                        <div>
                              <Button text={"Logout"} className="w-full bg-secondary text-white py-3 mt-6 rounded-full"  />
                        </div>
                  </div>
            )}
            <ProfileAction openProfile={openProfile} setOpenProfile={setOpenProfile} />
            <AdminPasswordChange isChangePassword={isChangePassword} setIsChangePassword={setIsChangePassword} />
      </div>
);
};

export default Profile;
