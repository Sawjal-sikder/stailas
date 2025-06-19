import React from 'react'
import Button from '../../../../../component/Button';

const AdminCreateUser = ({ createUser, setCreateUser }) => {
      if (!createUser) return null;
      return (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center overflow-auto font-inter text-primary">
                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl relative overflow-y-auto">
                        <h3 className='text-center text-xl sm:text-2xl font-inter font-bold text-primary py-4 sm:py-6'>
                              New Administrator Profile Create
                        </h3>
                        <form className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                              <label htmlFor="name" className='text-base sm:text-lg'>Name</label>
                              <input type="text" id='name' required className='border border-primary px-4 py-2 rounded-md' />

                              <label htmlFor="Email" className='text-base sm:text-lg'>Email</label>
                              <input type="email" id='Email' required className='border border-primary px-4 py-2 rounded-md' />

                              <label htmlFor="Phone" className='text-base sm:text-lg'>Phone Number</label>
                              <input type="text" id='Phone' required className='border border-primary px-4 py-2 rounded-md' />

                              <label htmlFor="access" className='text-base sm:text-lg'>Role</label>
                              <select id='access' required className='border border-primary px-4 py-2 rounded-md'>
                                    <option value="user">User Management</option>
                                    <option value="admin">Administrator</option>
                                    <option value="both">Both</option>
                              </select>

                              <div onClick={() => setCreateUser(false)} className="cursor-pointer col-span-1">
                                    <button className="mt-4 w-full bg-white border border-secondary text-secondary font-bold rounded-md px-4 py-2" >Cancel</button>
                              </div>
                              <Button text={"Create"} type='submit' className="mt-4 bg-primary text-white font-bold rounded-md px-4 py-2 col-span-1" />
                        </form>

                        <button
                              onClick={() => setCreateUser(false)}
                              className="mt-4 px-2.5 py-1 bg-black text-white rounded-full font-bold font-inter absolute top-2 right-2 text-center"
                        >
                              X
                        </button>
                  </div>
            </div>
      )
}

export default AdminCreateUser
