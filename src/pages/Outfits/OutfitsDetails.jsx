import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; //
import Navbar from "../home/Navbar/Navbar";
import OutfitImage from "../../assets/image/outfit/outfit1.png";
import RoundIcon from "../../assets/image/outfit/RoundIcon.png";
import ListIcon from "../../assets/image/outfit/ListIcon.png";
import Image from "../../component/Image";
import Header from "../../component/Header";

const OutfitsDetails = () => {
      const advice = [
            "Try a cropped pant for better silhouette",
            "Add a gold necklace to elevate neckline",
            "Switch to loafers for more relaxed style",
      ];
      const navigate = useNavigate();

      useEffect(() => {
            if (window.innerWidth >= 767) {
                  navigate("/outfit"); // 
            }
      }, [navigate]);


      return (
            <div className="lg:hidden">
                  <Navbar />
                  <div className="py-5">
                        <Image
                              src={OutfitImage}
                              className="w-full mb-4 rounded-t-xl"
                              alt="Outfit"
                        />
                        <div className="px-4">
                              <div className="py-2">
                                    <Image src={RoundIcon} className="w-20" alt="Round Icon" />
                              </div>
                              <div>
                                    <Header
                                          text={"Smart Casual"}
                                          className="text-[18px] font-semibold mb-2"
                                    />
                                    <p className="text-[14px] font-inter text-[#878787] leading-relaxed">
                                          {
                                                "Polished everyday look with neutral layers. Works for meetings or lunch."
                                          }
                                    </p>
                              </div>
                              <div className="py-3.5">
                                    <h4 className="font-inter text-[14px] text-secondary">
                                          Stailas Advice
                                    </h4>
                                    {advice.map((item, idx) => (
                                          <div className="flex items-center gap-2 py-2" key={idx}>
                                                <Image src={ListIcon} className="w-4 h-4" alt="List Icon" />
                                                <p className="font-bold text-[14px]">{item}</p>
                                          </div>
                                    ))}
                              </div>
                              <NavLink to={"/chat"}>
                                    <button
                                          type="button"
                                          className="w-full text-white text-[12px] lg:text-[16px] bg-secondary font-inter focus:ring-4 focus:outline-none focus:ring-primary/50 font-bold rounded-full text-md px-5 py-4 text-center"
                                    >
                                          {"Ask About This Look"}
                                    </button>
                              </NavLink>
                        </div>
                  </div>
            </div>
      );
};

export default OutfitsDetails;
