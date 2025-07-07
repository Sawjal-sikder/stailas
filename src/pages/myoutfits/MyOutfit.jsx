import React from "react";
import Navbar from "../home/Navbar/Navbar";
import Footer from "../home/footer/Footer";
import OutfitsDV from "../Outfits/OutfitsDV";
import OutfitsMV from "../Outfits/OutfitsMV";
import { useGetOutfits } from "../../utils/OutfitHook";
import LoadingSpinner from "../../component/base/LoadingSpinner";

const MyOutfit = () => {

  const { getOutfits, loading, error, outfits } = useGetOutfits();

  // console.log("Outfits:", outfits);
  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <div className="text-red-500 text-center">Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      {/* Desktop & Tablet View (md and up) */}
      <div className="hidden md:block">
        <OutfitsDV outfits={outfits} />
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
