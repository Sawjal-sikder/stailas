import React from "react";
import Image from "../../../component/Image";
import VideoImage from "../../../assets/image/hero/video.png";
import Button from "../../../component/Button";

const SecondarySection = () => {
  return (
    <div className="px-40 py-10 font-inter">
      <div className="grid grid-cols-2 gap-x-5 items-center">
        <div className="relative inline-block">
          <Image
            src={VideoImage}
            alt="video"
            className="object-cover rounded-md"
          />
          <Button
            text="Watch this Video"
            className="absolute bottom-14 right-60 w-80 py-4"
          />
        </div>

        <div>
          <h1 className="text-[48px] font-inter font-bold pr-10">
            How having an AI stylist changed my confidence
          </h1>
          <p className="py-5 text-[20px]">
            I will attach the image when I send the pdf. You should add the
            triangle “play” on top and then call youtube full screen to display
            the video.{" "}
          </p>
          <p className="    text-[20px]">
            Both tapping on the image or the button work to activate the video
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondarySection;
