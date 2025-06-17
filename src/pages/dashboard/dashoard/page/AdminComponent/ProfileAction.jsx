import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import Button from '../../../../../component/Button';
import DeleteConform from './DeleteConform';

const ProfileAction = ({ openProfile, setOpenProfile }) => {
      if (!openProfile) return null;
      const [isDeleted, setIsDeleted] = useState(false);

      return (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
                  <div className="bg-white p-8 rounded shadow-lg w-[611px] relative">
                        
                        <button
                              className="mt-4 px-2.5 py-1 bg-black text-white rounded-full font-bold font-inter absolute top-0 right-2 text-center"
                              onClick={() => setOpenProfile(false)}
                        >
                              X
                        </button>
                  <div>
                        <div className='text-center text-2xl font-inter font-bold text-primary'>Action</div>
                        <div>
                              <div className="flex justify-between items-center py-4 cursor-pointer" >
                                    <ToggleSwitch />
                              </div>
                              <div className="flex justify-between items-center py-4 cursor-pointer" >
                                    <div className="text-lg text-primary font-semibold flex items-center">Delete User Account</div>
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
