import React from "react";
import DashboardNav from "../component/DashboardNav";
import DashboardSidebar from "../component/DashboardSidebar";
import ProfileImage from "../../../../assets/logo/Profile.png";
import converImage from "../../../../assets/logo/conver.png";
import viewImage from "../../../../assets/logo/view.png";
import actionImage from "../../../../assets/logo/action.png";

const UserManagement = () => {
  const userlist = [
    {
      id: 1,
      SL: 1233,
      name: "Moni Roy",
      image: ProfileImage,
      email: "bockely@att.com",
      Phone: "(201) 555-0124",
      anonymous: "No",
      create_at: "16 March 2025",
      achive: "5:20 PM, 16 March 2025",
      Conversation: "Yes",
    },
    {
      id: 2,
      SL: 1234,
      name: "John Doe",
      image: ProfileImage,
      email: "johndoe@example.com",
      Phone: "(202) 555-0198",
      anonymous: "Yes",
      create_at: "17 March 2025",
      achive: "6:10 PM, 17 March 2025",
      Conversation: "No",
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
                              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                                    <thead className="">
                                          <tr>
                                                <th className="px-4 py-2 text-left">SL no</th>
                                                <th className="px-4 py-2 text-left">Full Name</th>
                                                <th className="px-4 py-2 text-left">Email</th>
                                                <th className="px-4 py-2 text-left">Phone Number</th>
                                                <th className="px-4 py-2 text-left">Anonymous</th>
                                                <th className="px-4 py-2 text-left">Date Created</th>
                                                <th className="px-4 py-2 text-left">Last Active</th>
                                                <th className="px-4 py-2 text-left">Conversation</th>
                                                <th className="px-4 py-2 text-left">Outfits</th>
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
                                                      <td className="px-4 py-2">{user.anonymous}</td>
                                                      <td className="px-4 py-2">{user.create_at}</td>
                                                      <td className="px-4 py-2">{user.achive}</td>
                                                      <td className="px-4 py-2">
                                                            <img src={converImage} alt="Conversation" className="w-8 h-8 object-cover" />
                                                      </td>
                                                      <td className="px-4 py-2 flex gap-1 items-center">
                                                            <p>8</p>
                                                            <img src={viewImage} alt="View" className="w-8 h-8 object-cover" />
                                                      </td>
                                                      <td className="px-4 py-2">
                                                            <img src={actionImage} alt="Action" className="w-8 h-8 object-cover" />
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      </div>
);
};

export default UserManagement;
