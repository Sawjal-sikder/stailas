import React from "react";
import Image from "../../component/Image";
// image
import Image1 from "../../assets/image/outfit/fphoto.png";
import Image2 from "../../assets/image/outfit/sphoto.png";
import Image3 from "../../assets/image/outfit/zoom.png";
import Button from "../../component/Button";
import OutfitContain from "./OutfitContain";

const OutfitsList = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-xl my-9">
      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src={Image1}
              alt="Outfit 1"
              className="w-full h-auto rounded-lg"
            />
            <Image
              src={Image3}
              alt="Outfit 1"
              className="rounded-lg absolute top-1 right-1 cursor-pointer"
            />
          </div>
          <div className="relative">
            <Image
              src={Image2}
              alt="Outfit 1"
              className="w-full h-auto rounded-lg"
            />
            <Image
              src={Image3}
              alt="Outfit 1"
              className="rounded-lg absolute top-1 right-1 cursor-pointer"
            />
          </div>

        </div>
        <div className="col-span-8 px-10">
          <OutfitContain />
        </div>
      </div>
    </div>
  );
};

export default OutfitsList;
