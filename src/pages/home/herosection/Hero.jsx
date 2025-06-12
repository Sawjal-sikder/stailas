import React from "react";
import BanarImage from "../../../assets/image/hero/heroBan.png";
import PhoneImage from "../../../assets/image/hero/HeroPhone.png";
import Button from "../../../component/Button";

import Image from "../../../component/Image";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Background Banner Image */}
<Image
  src={BanarImage}
  alt="Hero Banner"
  className="h-[620px] lg:h-auto w-full object-cover lg:object-cover "
  style={{ filter: "brightness(0.8)" }}
/>


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
        className="absolute top-[550px] left-36 lg:top-[550px] lg:left-40 w-32 lg:w-56"
      />
      {/* Right Side: Phone Image */}
      <Image
        src={PhoneImage}
        alt="PhoneImage"
        className="absolute lg:right-0 lg:top-64"
      />
    </div>
  );
};

export default Hero;
