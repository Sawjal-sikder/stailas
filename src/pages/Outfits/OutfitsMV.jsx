import React from "react";
import Image from "../../component/Image";
import OutfitImage1 from "../../assets/image/outfit/outfit1.png";
import OutfitImage2 from "../../assets/image/outfit/outfit2.png";
import OutfitImage3 from "../../assets/image/outfit/outfit3.png";
import Header from "../../component/Header";

const OutfitsMV = () => {
  return (
    <div>
      <div className="bg-gray-50 shadow-md mx-5 my-5 rounded-xl">
        <Image
          src={OutfitImage1}
          className="w-full h-[331px]  mb-4 rounded-t-xl"
          alt="Outfit"
        />
        <div className="px-4 py-4">
          <Header
            text="Smart Casual"
            className="text-[18px] font-semibold mb-2"
          />
          <p className="text-[14px] font-inter text-[#878787] leading-relaxed">
            Polished everyday look with neutral layers. Works for meetings or
            lunch.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 shadow-md mx-5 my-5 rounded-xl">
        <Image
          src={OutfitImage2}
          className="w-full h-[331px]  mb-4 rounded-t-xl"
          alt="Outfit"
        />
        <div className="px-4 py-4">
          <Header
            text="Smart Casual"
            className="text-[18px] font-semibold mb-2"
          />
          <p className="text-[14px] font-inter text-[#878787] leading-relaxed">
            Polished everyday look with neutral layers. Works for meetings or
            lunch.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 shadow-md mx-5 my-5 rounded-xl">
        <Image
          src={OutfitImage3}
          className="w-full h-[331px]  mb-4 rounded-t-xl"
          alt="Outfit"
        />
        <div className="px-4 py-4">
          <Header
            text="Smart Casual"
            className="text-[18px] font-semibold mb-2"
          />
          <p className="text-[14px] font-inter text-[#878787] leading-relaxed">
            Polished everyday look with neutral layers. Works for meetings or
            lunch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutfitsMV;
