import React from 'react'
import Button from '../../../../../component/Button';
import CloseIcon from '../../../../../assets/logo/close.png';
const AdminPasswordChange = ({ isChangePassword, setIsChangePassword }) => {
      if (!isChangePassword) return null;
      return (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center overflow-auto font-inter text-primary">
                  <div className="bg-white p-8 rounded shadow-lg w-[611px] relative overflow-y-auto">
                        <h3 className='text-center text-2xl font-inter font-bold text-primary py-6'>Password Change</h3>
                        <form className='grid grid-cols-2 gap-4'>
                              <label htmlFor="Opassword" className='text-lg '>Old Password</label>
                              <input type="password" id='Opassword' required className='border border-primary px-4 py-2 rounded-md' value={"25645"} />

                              <label htmlFor="nPasswrod" className='text-lg '>New Password</label>
                              <input type="password" id='nPasswrod' required className='border border-primary px-4 py-2 rounded-md' value={"25645"} />
                              <label htmlFor="cPassword" className='text-lg '>Re Type New Password</label>
                              <input type="password" id='cPassword' required className='border border-primary px-4 py-2 rounded-md' value={"25645"} />

                              <div onClick={() => setIsChangePassword(false)} className="cursor-pointer">
                                    <Button text={"Cancel"} className="mt-4 w-full bg-white border border-secondary text-black font-bold rounded-md px-4 py-2" />
                              </div>
                              <Button text={"Update"} type='submit' className="mt-4 bg-primary text-white font-bold rounded-md px-4 py-2" />

                        </form>

                        <button
                              onClick={() => setIsChangePassword(false)}
                              className="absolute top-5 right-5"
                              aria-label="Close"
                        >
                              <img src={CloseIcon} alt="Close" className="w-6 h-6" />
                        </button>
                  </div>
            </div>
      )
}
export default AdminPasswordChange
