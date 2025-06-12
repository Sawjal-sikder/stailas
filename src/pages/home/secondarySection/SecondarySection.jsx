import React from "react";
import Image from "../../../component/Image";
import VideoImage from "../../../assets/image/hero/video.png";
import Button from "../../../component/Button";

const SecondarySection = () => {
  return (
    <div className="px-4 md:px-10 lg:px-40 py-10 font-inter">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-5 items-center">
        
        {/* Image Section - ORDER FIRST ON LARGE SCREENS */}
        <div className="order-2 lg:order-1 relative inline-block">
          <Image
            src={VideoImage}
            alt="video"
            className="object-cover rounded-md w-full cursor-pointer"
          />
          <Button
            text="Watch this Video"
            className="absolute bottom-6 right-24 md:bottom-14 md:right-60 w-48 md:w-80 py-3 md:py-4"
          />
        </div>

        {/* Text Section - ORDER SECOND ON LARGE SCREENS */}
        <div className="order-1 lg:order-2">
          <h1 className="text-[20px] md:text-[40px] lg:text-[48px] font-bold pr-20 lg:pr-10">
            How having an AI stylist changed my confidence
          </h1>
          <p className="py-5 text-[12px] md:text-[20px]">
            I will attach the image when I send the pdf. You should add the
            triangle “play” on top and then call youtube full screen to display
            the video.
          </p>
          <p className="text-[12px] md:text-[20px]">
            Both tapping on the image or the button work to activate the video
          </p>
        </div>

      </div>
    </div>
  );
};

export default SecondarySection;
