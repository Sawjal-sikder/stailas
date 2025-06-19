import React from "react";
import DashboardNav from "./component/DashboardNav";
import DashboardSidebar from "./component/DashboardSidebar";
import Home from "./page/home";

const Dashboard = () => {
      return (
            <div className="relative min-h-screen bg-white">
                  <DashboardNav />
                  <div className="flex">
                        <DashboardSidebar />
                        <div
                              className="
                                    flex-1
                                    p-2
                                    lg:rounded-tl-3xl
                                    mt-4
                                    bg-[#edf3f2]
                                    min-w-0
                                    "
                              style={{ marginLeft: 0 }}
                        >
                              <Home />
                        </div>
                  </div>
            </div>
      );
};

export default Dashboard;
