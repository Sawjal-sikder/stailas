import React from "react";
import Navbar from "../home/Navbar/Navbar";
import Footer from "../home/footer/Footer";
import Header from "../../component/Header";
import ImageFileUpload from "../../component/ImageFileUpload";
import Button from "../../component/Button";
import Image from "../../component/Image";
import ImagteIcon1 from '../../assets/image/outfit/photo.png'
import ImagteIcon2 from '../../assets/image/outfit/ai.png'
import ImagteIcon3 from '../../assets/image/outfit/light.png'
import ImagteIcon4 from '../../assets/image/outfit/prog.png'

const Outfits = () => {
  return (
    <>
      <Navbar />
      <div className="px-[417px] mx-auto mt-10">
        <div className="px-[197px] text-center">
          <Header text={"Instant advice from your photos"} />
          <p className="text-[20px] pt-6 px-14">
            Upload a photo of yourself showing an outfit and I will give you
            instant personalised style tips, favorite colors and outfit ideas.
          </p>
          <div className="py-24">
            <ImageFileUpload />
            <p className="text-[16px] text-primary pb-7">
              Formats accepted are .png .jpeg and .jpg
            </p>
            <Button text={"Upload Your Looks"} className={"w-[345px]"} />
            <p className="text-[16px] text-primary pt-3">
              Takes less than 30 seconds
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center pb-7 relative">
          <div className="flex flex-col items-center w-[200px]">
            <Image src={ImagteIcon1} className={"w-[100px] h-[100px]"} />
            <p className="text-[20px] font-inter text-center">Upload Photos</p>
            <Image src={ImagteIcon4} className={" absolute top-1/4 right-52"} />
          </div>
          <div className="flex flex-col items-center w-[200px]">
            <Image src={ImagteIcon2} className={"w-[100px] h-[100px]"} />
            <p className="text-[20px] font-inter text-center">
              {" "}
              Ai Analyzes Style
            </p>
            <Image src={ImagteIcon4} className={" absolute top-1/4 left-52"} />
          </div>
          <div className="flex flex-col items-center w-[200px]">
            <Image src={ImagteIcon3} className={"w-[100px] h-[100px]"} />
            <p className="text-[20px] font-inter text-center">
              Get Personalized Insights
            </p>
          </div>
        </div>
      </div>    

      <Footer />
    </>
  );
};

export default Outfits;
