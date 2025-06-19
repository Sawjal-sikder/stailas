import React from "react";
import BanarImage from "../../../assets/image/hero/heroBan.png";
import BanarImageSm from "../../../assets/image/hero/BanarImageSm.png";
import PhoneImage from "../../../assets/image/hero/HeroPhone.png";
import Button from "../../../component/Button";

import Image from "../../../component/Image";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Background Banner Image */}
      {/* Mobile View */}
      <div className="block md:hidden">
        <img src={BanarImageSm} alt="Hero Banner" className="w-full object-cover" />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <img src={BanarImage} alt="Hero Banner" className="w-full" />
      </div>


      {/* Overlay: Flex container to split left/right */}
      <div className="absolute left-0 top-0 lg:left-20 lg:top-64 px-6 md:px-20">
        <div className="text-white lg:space-y-2 font-inter py-8">
          <h1 className="text-xl md:text-7xl font-bold">Your Wardrobe.</h1>
          <h1 className="text-xl md:text-7xl font-bold">Reinvented.</h1>
          <h1 className="text-xl md:text-7xl font-bold">With AI.</h1>
        </div>
      </div>
      <NavLink to="/outfit">
        <Button
          text="Try It Free"
          className={`
        absolute
        top-[550px]
        sm:top-[650px]
        md:top-[650px]
        [@media(min-width:375px)]:top-[650px]
        [@media(min-width:425px)]:top-[690px]

        left-1/2 -translate-x-1/2
        lg:left-40 lg:translate-x-0

        z-10
        w-[110px] lg:w-[345px]
        text-[12px] lg:text-[16px]
        px-1 rounded-lg
      `}
        />
      </NavLink>
      {/* Right Side: Phone Image */}
      <Image
        src={PhoneImage}
        alt="PhoneImage"
        className={`absolute left-28 top-[250px] lg:left-[1200px] lg:top-[280px] lg:w-[650px] w-[400px] 
          [@media(min-width:375px)]:top-[300px] 
          [@media(min-width:425px)]:top-[320px] 
          `}
      />
    </div>
  );
};

export default Hero;
