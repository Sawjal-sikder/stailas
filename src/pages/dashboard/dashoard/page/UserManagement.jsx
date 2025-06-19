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

const Administrators = () => {
      const [createUser, setCreateUser] = useState(false);
      const [editUser, setEditUser] = useState(false);
      const [isDeleted, setIsDeleted] = useState(false);
      const [openProfile, setOpenProfile] = useState(false);

      const userlist = [
            {
                  id: 1,
                  SL: 1233,
                  name: "Moni Roy",
                  image: ProfileImage,
                  email: "bockely@att.com",
                  Phone: "(201) 555-0124",
                  roll: "Admin",
            },
            {
                  id: 2,
                  SL: 1234,
                  name: "John Doe",
                  image: ProfileImage,
                  email: "johndoe@example.com",
                  Phone: "(202) 555-0198",
                  roll: "user",
            },
      ];

      return (
            <div className="relative min-h-screen bg-white">
                  <DashboardNav />
                  <DashboardSidebar />
                  <div
                        className="absolute top-32 left-0 md:left-[270px] w-full md:w-[calc(100%-270px)] p-2 md:p-5 bg-[#edf3f2] rounded-tl-3xl"
                        style={{ minHeight: "100vh" }}
                  >
                        <div className="min-h-[calc(100vh-138px)] text-primary font-inter">
                              <div className="bg-white rounded-xl px-2 py-3 md:px-7 md:py-5">
                                    <div
                                          onClick={() => setCreateUser(true)}
                                          className="cursor-pointer mb-4"
                                    >
                                          <Button
                                                text={"+ New Administrators Profile Create "}
                                                className="font-light rounded-md w-full sm:w-auto"
                                          />
                                    </div>
                                    {/* Table for md+ screens */}
                                    <div className="overflow-x-auto hidden md:block">
                                          <table className="min-w-[700px] w-full border border-gray-200 rounded-lg overflow-hidden text-xs md:text-sm">
                                                <thead>
                                                      <tr>
                                                            <th className="px-2 md:px-4 py-2 text-left whitespace-nowrap">SL no</th>
                                                            <th className="px-2 md:px-4 py-2 text-left whitespace-nowrap">Name</th>
                                                            <th className="px-2 md:px-4 py-2 text-left whitespace-nowrap">Email</th>
                                                            <th className="px-2 md:px-4 py-2 text-left whitespace-nowrap">Contact Number</th>
                                                            <th className="px-2 md:px-4 py-2 text-left whitespace-nowrap">Has Access to</th>
                                                            <th className="px-2 md:px-4 py-2 text-left whitespace-nowrap">Action</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {userlist.map((user) => (
                                                            <tr key={user.id} className="hover:bg-gray-50">
                                                                  <td className="px-2 md:px-4 py-2">#{user.SL}</td>
                                                                  <td className="px-2 md:px-4 py-2 flex items-center gap-2">
                                                                        <img
                                                                              src={user.image}
                                                                              alt={user.name}
                                                                              className="w-6 h-6 md:w-8 md:h-8 object-cover"
                                                                        />
                                                                        <span className="truncate">{user.name}</span>
                                                                  </td>
                                                                  <td className="px-2 md:px-4 py-2">{user.email}</td>
                                                                  <td className="px-2 md:px-4 py-2">{user.Phone}</td>
                                                                  <td className="px-2 md:px-4 py-2">{user.roll}</td>
                                                                  <td className="px-2 md:px-4 py-2 flex gap-1 items-center">
                                                                        <div
                                                                              className="cursor-pointer"
                                                                              onClick={() => setIsDeleted(true)}
                                                                        >
                                                                              <img
                                                                                    src={trushImage}
                                                                                    alt="Delete"
                                                                                    className="w-6 h-6 md:w-8 md:h-8 object-cover"
                                                                              />
                                                                        </div>
                                                                        <div
                                                                              className="cursor-pointer"
                                                                              onClick={() => setOpenProfile(true)}
                                                                        >
                                                                              <img
                                                                                    src={editImage}
                                                                                    alt="Edit"
                                                                                    className="w-6 h-6 md:w-8 md:h-8 object-cover"
                                                                              />
                                                                        </div>
                                                                  </td>
                                                            </tr>
                                                      ))}
                                                </tbody>
                                          </table>
                                    </div>
                                    {/* Card view for small screens */}
                                    <div className="md:hidden mt-7 space-y-4">
                                          {userlist.map((user) => (
                                                <div key={user.id} className="bg-gray-50 rounded-lg p-3 shadow border">
                                                      <div className="flex items-center gap-2 mb-2">
                                                            <img src={user.image} alt={user.name} className="w-8 h-8 object-cover rounded-full" />
                                                            <div>
                                                                  <div className="font-semibold">{user.name}</div>
                                                                  <div className="text-xs text-gray-500">{user.email}</div>
                                                            </div>
                                                      </div>
                                                      <div className="text-xs">
                                                            <div><span className="font-medium">SL no:</span> #{user.SL}</div>
                                                            <div><span className="font-medium">Phone:</span> {user.Phone}</div>
                                                            <div><span className="font-medium">Has Access to:</span> {user.roll}</div>
                                                            <div className="flex items-center gap-2 mt-2 flex-wrap">
                                                                  <button
                                                                        className="flex items-center gap-1"
                                                                        onClick={() => setOpenProfile(true)}
                                                                  >
                                                                        <img src={editImage} alt="Edit" className="w-6 h-6" />
                                                                        <span>Edit</span>
                                                                  </button>
                                                                  <button
                                                                        className="flex items-center gap-1"
                                                                        onClick={() => setIsDeleted(true)}
                                                                  >
                                                                        <img src={trushImage} alt="Delete" className="w-6 h-6" />
                                                                        <span>Delete</span>
                                                                  </button>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
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
