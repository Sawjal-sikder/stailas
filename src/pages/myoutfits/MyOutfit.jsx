import React from "react";
import Navbar from "../home/Navbar/Navbar";
import Header from "../../component/Header";
import OutfitsList from "./OutfitsList";
import Button from "../../component/Button";
import Image from "../../component/Image";
import UploadImage from "../../assets/image/outfit/solar_upload-bold.png";
import Footer from "../home/footer/Footer";
import OutfitsDV from "../Outfits/OutfitsDV";
import OutfitsMV from "../Outfits/OutfitsMV";

const MyOutfit = () => {
  return (
    <div>
      <Navbar />
      {/* Desktop & Tablet View (md and up) */}
      <div className="hidden md:block">
        <OutfitsDV />
      </div>

      {/* Mobile View (below md) */}
      <div className="block md:hidden">
        <OutfitsMV />
      </div>
      <Footer />
    </div>
  );
};

export default MyOutfit;
