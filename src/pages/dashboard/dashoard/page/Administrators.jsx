import React, { useState } from "react";
import DashboardNav from "../component/DashboardNav";
import DashboardSidebar from "../component/DashboardSidebar";
import ProfileImage from "../../../../assets/logo/Profile.png";
import editImage from "../../../../assets/logo/edit.png";
import trushImage from "../../../../assets/logo/trush.png";
import Button from "../../../../component/Button";
import AdminCreateUser from "./AdminComponent/AdminCreateUser";
import AdminEditUser from "./AdminComponent/AdminEditUser";
import DeleteConform from "./AdminComponent/DeleteConform";
import ProfileAction from "./AdminComponent/ProfileAction";
import { useAdministrators } from "../../../../utils/DashboardHook";

const Administrators = () => {
      const [createUser, setCreateUser] = useState(false);
      const [editUser, setEditUser] = useState(false);
      const [isDeleted, setIsDeleted] = useState(false);
      const [openProfile, setOpenProfile] = useState(false);

      const { data, error, loading } = useAdministrators();

      const userlist = data?.map((user, index) => ({
            id: user.id,
            SL: index + 1 + (data.length * 0),
            name: user.full_name || "N/A",
            image: user.profile_image || ProfileImage,
            email: user.email,
            Phone: user.contract || "N/A",
            roll: user.has_access_to || 'user',
      })) || [];
      return (
            <div className="relative min-h-screen bg-white">
                  <DashboardNav />
                  <div className="flex flex-col md:flex-row">

                        <DashboardSidebar />

                        <div
                              className="w-full mt-7 md:mt-0 p-2 sm:p-4 md:p-5 bg-[#edf3f2] rounded-tl-3xl"
                        >
                              <div className="min-h-[calc(100vh-138px)] text-primary font-inter">
                                    <div className="bg-white rounded-xl px-2 sm:px-4 md:px-7 py-3 sm:py-4 md:py-5">
                                          <div
                                                onClick={() => setCreateUser(true)}
                                                className="cursor-pointer"
                                          >
                                                <Button
                                                      text={"+ New Administrators Profile Create "}
                                                      className="mb-4 font-light rounded-md w-full sm:w-auto"
                                                />
                                          </div>
                                          <div className="overflow-x-auto">
                                                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm sm:text-base">
                                                      <thead>
                                                            <tr>
                                                                  <th className="px-2 sm:px-4 py-2 text-left whitespace-nowrap">SL no</th>
                                                                  <th className="px-2 sm:px-4 py-2 text-left whitespace-nowrap">Name</th>
                                                                  <th className="px-2 sm:px-4 py-2 text-left whitespace-nowrap">Email</th>
                                                                  <th className="px-2 sm:px-4 py-2 text-left whitespace-nowrap">Contact Number</th>
                                                                  <th className="px-2 sm:px-4 py-2 text-left whitespace-nowrap">Has Access to</th>
                                                                  <th className="px-2 sm:px-4 py-2 text-left whitespace-nowrap">Action</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            {userlist.map((user) => (
                                                                  <tr key={user.id} className="hover:bg-gray-50">
                                                                        <td className="px-2 sm:px-4 py-2">#{user.SL}</td>
                                                                        <td className="px-2 sm:px-4 py-2 flex items-center gap-2">
                                                                              <img
                                                                                    src={user.image}
                                                                                    alt={user.name}
                                                                                    className="w-8 h-8 object-cover"
                                                                              />
                                                                              {user.name}
                                                                        </td>
                                                                        <td className="px-2 sm:px-4 py-2">{user.email}</td>
                                                                        <td className="px-2 sm:px-4 py-2">{user.Phone}</td>
                                                                        <td className="px-2 sm:px-4 py-2">{user.roll}</td>
                                                                        <td className="px-2 sm:px-4 py-2 flex gap-1 items-center">
                                                                              <div
                                                                                    className="cursor-pointer"
                                                                                    onClick={() => setIsDeleted(true)}
                                                                              >
                                                                                    <img
                                                                                          src={trushImage}
                                                                                          alt="View"
                                                                                          className="w-8 h-8 object-cover"
                                                                                    />
                                                                              </div>
                                                                              <div
                                                                                    className="cursor-pointer"
                                                                                    onClick={() => setOpenProfile(true)}
                                                                              >
                                                                                    <img
                                                                                          src={editImage}
                                                                                          alt="Action"
                                                                                          className="w-8 h-8 object-cover"
                                                                                    />
                                                                              </div>
                                                                        </td>
                                                                  </tr>
                                                            ))}
                                                      </tbody>
                                                </table>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <AdminCreateUser createUser={createUser} setCreateUser={setCreateUser} />
                  {/* <AdminEditUser editUser={editUser} setEditUser={setEditUser} /> */}
                  <ProfileAction openProfile={openProfile} setOpenProfile={setOpenProfile} />
                  <DeleteConform isDeleted={isDeleted} setIsDeleted={setIsDeleted} />
            </div>
      );
};
export default Administrators;
