import React from "react";
import IconOverview1 from "../../../../assets/logo/overview/Icon.png";
import IconOverview2 from "../../../../assets/logo/overview/Icon1.png";
import IconOverview3 from "../../../../assets/logo/overview/Icon2.png";
import Button from "../../../../component/Button";
import { useDashboard } from "../../../../utils/DashboardHook";

const Home = () => {

  const { data, error } = useDashboard();


  const Overview = [
    {
      title: "Total Users",
      value: data?.total_users ?? "N/A",
      text: "",
      icon: IconOverview1,
    },
    {
      title: "New Users",
      value: data?.new_users ?? "N/A",
      text: "+5% from yesterday",
      icon: IconOverview2,
    },
    {
      title: "Inactive Users",
      value: data?.anonymous_users ?? "N/A",
      text: "+5% from yesterday",
      icon: IconOverview3,
    },
  ];
  // Define the background colors
  const bgClasses = ["bg-[#FFE2E5]", "bg-[#EFEDFF]", "bg-[#FFF4DE]"];

  return (
    <div className="lg:min-h-[calc(100vh-138px)] text-primary font-inter px-2 py-4 md:px-6">
      <div className="bg-white rounded-xl px-4 md:px-7 py-5">
        <p className="text-md">Hi, Good Morning</p>
        <h3 className="text-2xl font-semibold py-1">{data?.full_name ?? "N/A"}</h3>
      </div>

      <div className="bg-white rounded-xl px-4 md:px-7 py-5 my-5">
        <h3 className="text-2xl font-semibold py-1">User’s Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Overview.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-6 md:p-8 my-3 rounded-lg ${bgClasses[idx % bgClasses.length]
                }`}
            >
              <div className="flex flex-col gap-5">
                <img src={item.icon} alt={item.title} className="w-10 h-10" />
                <div>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <h4 className="text-lg py-2">{item.title}</h4>
                  <p className="text-[12px] text-blue-600">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl px-4 md:px-7 py-5">
        <h3 className="text-2xl font-semibold py-1">Prompt</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <div>
            <h2 className="text-xl py-2">System Prompt</h2>
            <form action="" method="post">
              <textarea
                className="w-full h-40 p-3 border border-primary rounded-md resize-none"
                placeholder="Enter your system prompt here..."
              ></textarea>

              <Button text={"Save"} className="rounded-lg mt-3 font-light w-full md:w-[220px]" />
            </form>
          </div>
          <div>
            <h2 className="text-xl py-2">Image Prompt</h2>
            <form action="" method="post">
              <textarea
                className="w-full h-40 p-3 border border-primary rounded-md resize-none"
                placeholder="Enter your system prompt here..."
              ></textarea>

              <Button text={"Save"} className="rounded-lg mt-3 font-light w-full md:w-[220px]" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
