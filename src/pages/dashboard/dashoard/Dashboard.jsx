import React from "react";
import DashboardNav from "./component/DashboardNav";
import DashboardSidebar from "./component/DashboardSidebar";
import Home from "./page/home";

const Dashboard = () => {
return (
      <div className="relative">
            <DashboardNav />
            <DashboardSidebar />
            <div
                  className="absolute top-24 left-[270px] p-5 bg-[#edf3f2] rounded-tl-3xl"
                  style={{ width: "calc(100% - 270px)" }}
            >
                  <Home />
            </div>
      </div>
);
};

export default Dashboard;
