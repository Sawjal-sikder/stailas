import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import Button from '../../../../../component/Button';
import DeleteConform from './DeleteConform';
import CloseIcon from '../../../../../assets/logo/close.png';

const ProfileAction = ({ openProfile, setOpenProfile }) => {
      if (!openProfile) return null;
      const [isDeleted, setIsDeleted] = useState(false);

      return (
            <div className="fixed inset-0 bg-black bg-opacity-40 lg:z-50 flex justify-center items-center">
                  <div className="bg-white p-6 sm:p-8 rounded shadow-lg w-[90vw] max-w-lg sm:max-w-xl relative">
                        <button
                              className="absolute top-5 right-5"
                              onClick={() => setOpenProfile(false)}
                        >
                              <img src={CloseIcon} alt="Close" className="w-6 h-6" />
                        </button>
                        <div>
                              <div className='text-center text-xl sm:text-2xl font-inter font-bold text-primary'>Action</div>
                              <div>
                                    <div className="flex justify-between items-center py-4 cursor-pointer" >
                                          <ToggleSwitch />
                                    </div>
                                    <div className="flex justify-between items-center py-4 cursor-pointer" >
                                          <div className="text-base sm:text-lg text-primary font-semibold flex items-center">Delete User Account</div>
                                          <div onClick={() => setIsDeleted(true)}>
                                                <Button text={"Delete"} className="bg-secondary text-white py-1 rounded-md" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <DeleteConform isDeleted={isDeleted} setIsDeleted={setIsDeleted} />
            </div>
      );
};

export default ProfileAction;
