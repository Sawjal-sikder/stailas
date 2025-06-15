import React from "react";
import Navbar from "../home/Navbar/Navbar";
import Header from "../../component/Header";
import OutfitsList from "./OutfitsList";
import Button from "../../component/Button";
import Image from "../../component/Image";
import UploadImage from "../../assets/image/outfit/solar_upload-bold.png";
import Footer from "../home/footer/Footer";

const MyOutfit = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-16 lg:px-40 py-[22px]">
        <Header text={"Your outfits"} className="text-center" />
        <OutfitsList />
        <OutfitsList />
        <div className="grid grid-cols-3 justify-center">
          <div></div>
          <div className="flex justify-center items-center gap-x-4">
            <Button text={"< PREV"} />
            <Button text={"1"} />
            <Button text={"NEXT >"} />
          </div>
          <div className="text-end">
            <div className="font-inter">
              <label
                htmlFor="file-upload"
                className="inline-block cursor-pointer px-5 py-4 text-white text-[12px] lg:text-[16px] bg-secondary font-inter rounded-full transition"
              >
                <Image
                  src={UploadImage}
                  alt="Upload Icon"
                  className="inline-block ml-2 w-5 h-5 mx-2"
                />
                Upload another outfit
              </label>
              <input id="file-upload" type="file" className="hidden" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyOutfit;
