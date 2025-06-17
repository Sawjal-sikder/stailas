import React from 'react'
import Button from '../../../../../component/Button';

const AdminEditUser = ({editUser, setEditUser}) => {
if (!editUser) return null;
  return (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center overflow-auto font-inter text-primary">
                  <div className="bg-white p-8 rounded shadow-lg w-[611px] relative overflow-y-auto">
                        <h3 className='text-center text-2xl font-inter font-bold text-primary py-6'>Edit Administrator</h3>
                        <form className='grid grid-cols-2 gap-4'>
                              <label htmlFor="name" className='text-lg '>Name</label>
                              <input type="text" id='name' required className='border border-primary px-4 py-2 rounded-md' value={"Moni Roy"} />

                              <label htmlFor="Email" className='text-lg '>Email</label>
                              <input type="email" id='Email' required className='border border-primary px-4 py-2 rounded-md' value={"examp@gmail.com"} />
                              <label htmlFor="Phone" className='text-lg '>Phone Number</label>
                              <input type="text" id='Phone' required className='border border-primary px-4 py-2 rounded-md' value={"+88084454556444"}/>
                              <label htmlFor="access" className='text-lg '>Role</label>
                              <select id='access' required className='border border-primary px-4 py-2 rounded-md'>
                                    <option value="user">Admin</option>
                                    <option value="admin">Administrator</option>
                                    <option value="both">Both</option>
                              </select>

                                   <div onClick={() => setEditUser(false)} className="cursor-pointer">
                                     <Button text={"Cancel"} className="mt-4 w-full bg-white border border-secondary text-black font-bold rounded-md px-4 py-2" />
                                   </div>
                                    <Button text={"Create"} type='submit' className="mt-4 bg-primary text-white font-bold rounded-md px-4 py-2" />

                        </form>

                        <button
                              onClick={() => setEditUser(false)}
                              className="mt-4 px-2.5 py-1 bg-black text-white rounded-full font-bold font-inter absolute top-0 right-2 text-center"
                        >
                              X
                        </button>
                  </div>
            </div>
      )
}

export default AdminEditUser
