import React from "react";
import BanarImage from "../../../assets/image/hero/heroBan.png";
import BanarImageSm from "../../../assets/image/hero/BanarImageSm.png";
import PhoneImage from "../../../assets/image/hero/HeroPhone.png";
import Button from "../../../component/Button";

import Image from "../../../component/Image";

const Hero = () => {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Background Banner Image */}
      {/* Mobile View */}
      <div className="block md:hidden">
        <img src={BanarImageSm} alt="Hero Banner" className="h-[616px] w-full object-cover" />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <img src={BanarImage} alt="Hero Banner" className="w-full" />
      </div>


      {/* Overlay: Flex container to split left/right */}
      <div className="absolute left-0 top-0 lg:left-20 lg:top-64 px-6 md:px-20">
        {/* Left Side: Text */}
        <div className="text-white lg:space-y-2 font-inter py-8">
          <h1 className="text-xl md:text-7xl font-bold">Your Wardrobe.</h1>
          <h1 className="text-xl md:text-7xl font-bold">Reinvented.</h1>
          <h1 className="text-xl md:text-7xl font-bold">With AI.</h1>
        </div>
      </div>
      <Button
        text="Try It Free"
        className="absolute top-[550px] left-36 lg:top-[550px] lg:left-40 w-[110px] lg:w-[345px] text-[12px] lg:text-[16px] px-1 rounded-lg "
      />
      {/* Right Side: Phone Image */}
      <Image
        src={PhoneImage}
        alt="PhoneImage"
        className="absolute left-36 top-48 lg:rigtht-0 lg:top-[310px] lg:w-[650px] w-96"
      />
    </div>
  );
};

export default Hero;
