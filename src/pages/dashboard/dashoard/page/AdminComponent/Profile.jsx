import React, { useState } from "react";
import Image from "../../../../../component/Image";
import UserImage from "../../../../../assets/logo/user-icon.png";
import Button from "../../../../../component/Button";
import ProfileAction from "./ProfileAction";
import AdminPasswordChange from "./AdminPasswordChange";
import AdminAccountsSetting from "./AdminAccountsSetting";

const Profile = ({ open, setOpen }) => {
      const [openProfile, setOpenProfile] = useState(false);
      const [isChangePassword, setIsChangePassword] = useState(false);
      return (
            <div>
                  {open && (
                        <div className="absolute right-2 sm:right-6 md:right-10 top-24 lg:top-20 bg-white shadow-md rounded-md w-[95vw] max-w-xs sm:max-w-md md:max-w-lg px-4 sm:px-6 py-5 sm:py-7 z-50 font-inter text-primary">
                              <div className="flex items-center gap-x-3 sm:gap-x-4 cursor-pointer border-b-2 pb-6 sm:pb-9 mb-6 sm:mb-9">
                                    <Image
                                          src={UserImage}
                                          alt="User Image"
                                          className="rounded-full w-12 h-12 sm:w-14 sm:h-14"
                                    />
                                    <div className="flex flex-col justify-center">
                                          <h4 className="text-lg sm:text-xl font-bold py-1 sm:py-2">Moni Roy </h4>
                                          <p className="text-xs sm:text-[12px] w-full bg-secondary py-1 sm:py-2 rounded-full text-center text-white">
                                                Super Admin
                                          </p>
                                    </div>
                              </div>
                              <div>
                                    <div className="flex justify-between items-center py-3 sm:py-4 cursor-pointer" onClick={() => setOpenProfile(!openProfile)}>
                                          <div className="text-base sm:text-lg text-primary font-semibold flex items-center">Profile</div>
                                          <div className="text-right px-2 sm:px-4 text-base sm:text-lg text-secondary font-bold flex items-center">{">"}</div>
                                    </div>
                                    <div className="flex justify-between items-center py-3 sm:py-4 cursor-pointer" onClick={() => setIsChangePassword(!isChangePassword)}>
                                          <div className="text-base sm:text-lg text-primary font-semibold flex items-center">Change Password</div>
                                          <div className="text-right px-2 sm:px-4 text-base sm:text-lg text-secondary font-bold flex items-center">{">"}</div>
                                    </div>
                              </div>
                              <div>
                                    <Button text={"Logout"} className="w-full bg-secondary text-white py-2 sm:py-3 mt-4 sm:mt-6 rounded-full" />
                              </div>
                        </div>
                  )}

                  <AdminAccountsSetting openProfile={openProfile} setOpenProfile={setOpenProfile} />
                  <AdminPasswordChange isChangePassword={isChangePassword} setIsChangePassword={setIsChangePassword} />
            </div>
      );
};

export default Profile;
