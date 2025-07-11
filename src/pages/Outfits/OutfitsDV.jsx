import React, { useState } from "react";
import Header from "../../component/Header";
import Button from "../../component/Button";
import Image from "../../component/Image";
import UploadImage from "../../assets/image/outfit/solar_upload-bold.png";
import OutfitsList from "../myoutfits/OutfitsList";
import { NavLink } from 'react-router-dom';


const OutfitsDV = ({ outfits }) => {

  // const [currentPage, setCurrentPage] = useState(1);
  // const outfitsPerPage = 2; // Adjust as needed
  // const outfitsList = [<OutfitsList key={1} />, <OutfitsList key={2} />, <OutfitsList key={3} />]; // Example data

  // const totalPages = Math.ceil(outfitsList.length / outfitsPerPage);

  // const handlePrev = () => {
  //   setCurrentPage((prev) => Math.max(prev - 1, 1));
  // };

  // const handleNext = () => {
  //   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  // };

  // const startIdx = (currentPage - 1) * outfitsPerPage;
  // const currentOutfits = outfitsList.slice(startIdx, startIdx + outfitsPerPage);

  return (
    <>
      <div className="px-4 md:px-16 lg:px-40 py-[22px] mb-12">
        <Header text={"Your outfits"} className="text-center" />
        <OutfitsList outfits={outfits} />
        <div className="grid grid-cols-3 justify-center">
          <div></div>
          <div className="flex justify-center items-center gap-x-4">
            <Button text={"< PREV"} className="rounded-lg" />
            <Button text={"currentPage.toString()"} className="rounded-lg" />
            <Button text={"NEXT >"} className="rounded-lg" />
            {/* <Button text={"< PREV"} className="rounded-lg" onClick={handlePrev} disabled={currentPage === 1} />
            <Button text={currentPage.toString()} className="rounded-lg" />
            <Button text={"NEXT >"} className="rounded-lg" onClick={handleNext} disabled={currentPage === totalPages} /> */}
          </div>
          <div className="text-end">
            <div className="font-inter">
              <NavLink to={"/myoutfit"}
                htmlFor="file-upload"
                className="inline-block cursor-pointer px-5 py-4 text-white text-[12px] lg:text-[16px] bg-secondary font-inter rounded-full transition"
              >
                <Image
                  src={UploadImage}
                  alt="Upload Icon"
                  className="inline-block ml-2 w-5 h-5 mx-2"
                />
                Upload another outfit
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutfitsDV;
