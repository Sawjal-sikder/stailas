import React, { useState } from "react";
import DashboardNav from "../component/DashboardNav";
import DashboardSidebar from "../component/DashboardSidebar";
import ProfileImage from "../../../../assets/logo/Profile.png";
import editImage from "../../../../assets/logo/edit.png";
import trushImage from "../../../../assets/logo/trush.png";
import Button from "../../../../component/Button";
import AdminCreateUser from "./AdminComponent/AdminCreateUser";
import AdminEditUser from "./AdminComponent/AdminEditUser";

const Administrators = () => {
      const [createUser, setCreateUser] = useState(false);
      const [editUser, setEditUser] = useState(false);
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
      <div className="relative">
            <DashboardNav />
            <DashboardSidebar />
            <div
                  className="absolute top-24 left-[270px] p-5 bg-[#edf3f2] rounded-tl-3xl"
                  style={{ width: "calc(100% - 270px)" }}
            >
                  <div className="min-h-[calc(100vh-138px)] text-primary font-inter">
                        <div className="bg-white rounded-xl px-7 py-5">
                              <div onClick={() => setCreateUser(true)} className="cursor-pointer">
                                    <Button text={"+ New Administrators Profile Create "} className="mb-4 font-light rounded-md" />
                              </div>
                              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="">
                                          <tr>
                                                <th className="px-4 py-2 text-left">SL no</th>
                                                <th className="px-4 py-2 text-left">Name</th>
                                                <th className="px-4 py-2 text-left">Email</th>
                                                <th className="px-4 py-2 text-left">Contact Number</th>
                                                <th className="px-4 py-2 text-left">Has Access to</th>
                                                <th className="px-4 py-2 text-left">Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {userlist.map((user) => (
                                                <tr key={user.id} className=" hover:bg-gray-50">
                                                      <td className="px-4 py-2">#{user.SL}</td>
                                                      <td className="px-4 py-2 flex items-center gap-2">
                                                            <img
                                                                  src={user.image}
                                                                  alt={user.name}
                                                                  className="w-8 h-8 object-cover"
                                                            />
                                                            {user.name}
                                                      </td>
                                                      <td className="px-4 py-2">{user.email}</td>
                                                      <td className="px-4 py-2">{user.Phone}</td>
                                                      <td className="px-4 py-2">{user.roll}</td>
                                                      <td className="px-4 py-2 flex gap-1 items-center">
                                                            <img src={trushImage} alt="View" className="w-8 h-8 object-cover" />
                                                            <div className="cursor-pointer" onClick={() => setEditUser(true)}>
                                                                  <img src={editImage} alt="Action" className="w-8 h-8 object-cover" />
                                                            </div>
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
            <AdminCreateUser createUser={createUser} setCreateUser={setCreateUser} />
            <AdminEditUser editUser={editUser} setEditUser={setEditUser} />
      </div>
);
};
export default Administrators;
