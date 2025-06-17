import React from 'react';

const DeleteConform = ({ isDeleted, setIsDeleted }) => {
      if (!isDeleted) return null;

      return (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
                  <div className="bg-white p-8 rounded shadow-lg w-[611px] relative">
                        <h3 className='text-center text-2xl font-inter font-bold text-primary py-14'>Confirm Account Deletion</h3>
                        <div className='grid grid-cols-2 gap-4'>
                              <button
                                    onClick={() => {
                                          setIsDeleted(false);
                                    }}
                                    className='border border-secondary text-secondary w-full px-4 py-2 rounded-md font-inter font-semibold hover:bg-secondary hover:text-white transition-colors duration-300'

                              >
                                    Cancel
                              </button>
                              <button
                                    onClick={() => {
                                          setIsDeleted(false);
                                    }}
                                    className='border border-secondary w-full px-4 py-2 rounded-md font-inter font-semibold bg-secondary text-white transition-colors duration-300'

                              >
                                    Delete Account
                              </button>
                        </div>
                        <div >
                              <button
                                    onClick={() => setIsDeleted(false)}
                                    className="mt-4 px-2.5 py-1 bg-black text-white rounded-full font-bold font-inter absolute top-0 right-2 text-center"

                              >
                                    X
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default DeleteConform;
