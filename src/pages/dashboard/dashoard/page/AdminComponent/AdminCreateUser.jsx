import React, { useState } from 'react';
import Button from '../../../../../component/Button';
import { useCreateAdministrator } from '../../../../../utils/DashboardHook';
import LoadingSpinner from '../../../../../component/base/LoadingSpinner';
// import { toast } from 'react-toastify'; // ✅ Uncomment if using toast

const AdminCreateUser = ({ createUser, setCreateUser }) => {
      const { createAdministrator, error, loading } = useCreateAdministrator();

      const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            role: 'user',
      });

      const handleChange = (e) => {
            setFormData({ ...formData, [e.target.id]: e.target.value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            const payload = {
                  full_name: formData.name,
                  email: formData.email,
                  phone_number: formData.phone,
                  role: formData.role,
            };

            const res = await createAdministrator(payload);
            if (res) {
                  // Optional: toast.success('Administrator created successfully!');
                  setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        role: 'user',
                  });
                  setCreateUser(false);
            }
      };

      if (!createUser) return null;
      if (loading) return <LoadingSpinner />;

      return (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center overflow-auto font-inter text-primary">
                  <div className="bg-white p-4 sm:p-6 md:p-8 rounded shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl relative overflow-y-auto">
                        <h3 className='text-center text-xl sm:text-2xl font-inter font-bold text-primary py-4 sm:py-6'>
                              New Administrator Profile Create
                        </h3>

                        <form className='grid grid-cols-1 sm:grid-cols-2 gap-4' onSubmit={handleSubmit}>
                              <label htmlFor="name" className='text-base sm:text-lg'>Name</label>
                              <input
                                    type="text"
                                    id='name'
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='border border-primary px-4 py-2 rounded-md'
                              />

                              <label htmlFor="email" className='text-base sm:text-lg'>Email</label>
                              <input
                                    type="email"
                                    id='email'
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='border border-primary px-4 py-2 rounded-md'
                              />

                              <label htmlFor="phone" className='text-base sm:text-lg'>Phone Number</label>
                              <input
                                    type="text"
                                    id='phone'
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className='border border-primary px-4 py-2 rounded-md'
                              />

                              <label htmlFor="role" className='text-base sm:text-lg'>Role</label>
                              <select
                                    id='role'
                                    required
                                    value={formData.role}
                                    onChange={handleChange}
                                    className='border border-primary px-4 py-2 rounded-md'
                              >
                                    <option value="user">User Management</option>
                                    <option value="admin">Administrator</option>
                                    <option value="both">Both</option>
                              </select>

                              <div className="col-span-1">
                                    <button
                                          type="button"
                                          onClick={() => setCreateUser(false)}
                                          className="mt-4 w-full bg-white border border-secondary text-secondary font-bold rounded-md px-4 py-2"
                                    >
                                          Cancel
                                    </button>
                              </div>

                              <Button
                                    text={loading ? "Creating..." : "Create"}
                                    type='submit'
                                    className="mt-4 bg-primary text-white font-bold rounded-md px-4 py-2 col-span-1"
                              />
                        </form>

                        {error && (
                              <p className="text-red-500 text-sm text-center mt-2">
                                    {error.message || "Failed to create user. Please try again."}
                              </p>
                        )}

                        <button
                              onClick={() => setCreateUser(false)}
                              className="mt-4 px-2.5 py-1 bg-black text-white rounded-full font-bold font-inter absolute top-2 right-2 text-center"
                        >
                              X
                        </button>
                  </div>
            </div>
      );
};

export default AdminCreateUser;
