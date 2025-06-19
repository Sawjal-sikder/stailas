import React from 'react'
import Button from '../../../../../component/Button';
import CloseIcon from '../../../../../assets/logo/close.png';

const AdminAccountsSetting = ({ openProfile, setOpenProfile }) => {
      if (!openProfile) return null;
      return (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center overflow-auto font-inter text-primary">
                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl relative overflow-y-auto">
                        <h3 className='text-center text-xl md:text-2xl font-inter font-bold text-primary py-4 md:py-6'>Edit Administrator</h3>
                        <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                              <label htmlFor="name" className='text-base md:text-lg'>Name</label>
                              <input type="text" id='name' required className='border border-primary px-4 py-2 rounded-md' value={"Moni Roy"} />

                              <label htmlFor="Email" className='text-base md:text-lg'>Email</label>
                              <input type="email" id='Email' required className='border border-primary px-4 py-2 rounded-md' value={"examp@gmail.com"} />
                              <label htmlFor="Phone" className='text-base md:text-lg'>Phone Number</label>
                              <input type="text" id='Phone' required className='border border-primary px-4 py-2 rounded-md' value={"+88084454556444"} />
                              <label htmlFor="access" className='text-base md:text-lg'>Role</label>
                              <select id='access' required className='border border-primary px-4 py-2 rounded-md'>
                                    <option value="user">Admin</option>
                                    <option value="admin">Administrator</option>
                                    <option value="both">Both</option>
                              </select>

                              <div onClick={() => setOpenProfile(false)} className="cursor-pointer col-span-1 md:col-span-1">
                                    {/* <Button text={"Cancel"} className="mt-4 w-full bg-white border border-secondary text-black font-bold rounded-md px-4 py-2" /> */}
                                    <button className="mt-4 w-full bg-white border border-secondary text-secondary font-bold rounded-md px-4 py-2" >Cancel</button>
                              </div>
                              <Button text={"Update"} type='submit' className="mt-4 bg-primary text-white font-bold rounded-md px-4 py-2 col-span-1 md:col-span-1" />
                        </form>

                        <button
                              onClick={() => setOpenProfile(false)}
                              className="absolute top-5 right-5"
                        >
                              <img src={CloseIcon} alt="Close" className="w-6 h-6" />
                        </button>
                  </div>
            </div>
      )
}


export default AdminAccountsSetting

