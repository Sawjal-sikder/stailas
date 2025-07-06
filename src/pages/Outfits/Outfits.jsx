import React, { useState } from "react";
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
import { useCreateOutfit } from "../../utils/OutfitHook";
import LoadingSpinner from "../../component/base/LoadingSpinner";

const Outfits = () => {
  const { createOutfit, loading, error } = useCreateOutfit();
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (file) => {
    setImageFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please upload an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("user", localStorage.getItem("userId")); // your backend field name
    formData.append("image", imageFile);
    formData.append("context", ""); // add other fields as required

    const result = await createOutfit(formData);

    if (result?.success || result) {
      console.log("Outfit analyzed:", result);
      // optionally show success message
    } else {
      console.error("Failed:", result?.message || "Unknown error");
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-5xl w-full mx-auto mt-10 px-4">
        <div className="max-w-2xl mx-auto text-center px-2">
          <Header text={"Instant advice from your photos"} />
          <p className="text-[20px] pt-6 px-0 md:px-14">
            Upload a photo of yourself showing an outfit and I will give you
            instant personalised style tips, favorite colors and outfit ideas.
          </p>
          <form onSubmit={handleSubmit} className="py-12 md:py-24">
            <ImageFileUpload onChange={handleImageChange} />
            <p className="text-[16px] text-primary pb-7">
              Formats accepted are .png .jpeg and .jpg
            </p>
            <Button type="submit" text={"Upload Your Looks"} className={"w-full max-w-xs"} />
            <p className="text-[16px] text-primary pt-3">
              Takes less than 30 seconds
            </p>
          </form>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pb-7 relative gap-8 md:gap-0">
          <div className="flex flex-col items-center w-full md:w-[200px] mb-8 md:mb-0">
            <Image src={ImagteIcon1} className={"w-[80px] h-[80px] md:w-[100px] md:h-[100px]"} />
            <p className="text-[20px] font-inter text-center">Upload Photos</p>
            <Image src={ImagteIcon4} className={"hidden md:block absolute top-1/4 right-52"} />
          </div>
          <div className="flex flex-col items-center w-full md:w-[200px] mb-8 md:mb-0">
            <Image src={ImagteIcon2} className={"w-[80px] h-[80px] md:w-[100px] md:h-[100px]"} />
            <p className="text-[20px] font-inter text-center">
              Ai Analyzes Style
            </p>
            <Image src={ImagteIcon4} className={"hidden md:block absolute top-1/4 left-52"} />
          </div>
          <div className="flex flex-col items-center w-full md:w-[200px]">
            <Image src={ImagteIcon3} className={"w-[80px] h-[80px] md:w-[100px] md:h-[100px]"} />
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
