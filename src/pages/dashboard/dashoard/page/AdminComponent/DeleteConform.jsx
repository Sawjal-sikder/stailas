import React from 'react';
import CloseIcon from '../../../../../assets/logo/close.png';

const DeleteConform = ({ isDeleted, setIsDeleted }) => {
      if (!isDeleted) return null;

      return (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
                  <div className="bg-white p-6 sm:p-8 rounded shadow-lg w-[95vw] max-w-md sm:max-w-lg md:w-[611px] relative">
                        <h3 className="text-center text-2xl font-inter font-bold text-primary py-8 sm:py-14">
                              Confirm Account Deletion
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <button
                                    onClick={() => setIsDeleted(false)}
                                    className="border border-secondary text-secondary w-full px-4 py-2 rounded-md font-inter font-semibold hover:bg-secondary hover:text-white transition-colors duration-300"
                              >
                                    Cancel
                              </button>
                              <button
                                    onClick={() => setIsDeleted(false)}
                                    className="border border-secondary w-full px-4 py-2 rounded-md font-inter font-semibold bg-secondary text-white transition-colors duration-300"
                              >
                                    Delete Account
                              </button>
                        </div>
                        <button
                              onClick={() => setIsDeleted(false)}
                              className="absolute top-5 right-5" >
                              <img src={CloseIcon} alt="Close" className="w-6 h-6" />
                        </button>
                  </div>
            </div>
      );
};

export default DeleteConform;
