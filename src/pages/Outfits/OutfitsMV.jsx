import React from "react";
import Image from "../../component/Image";
import OutfitImage1 from "../../assets/image/outfit/outfit1.png";
import OutfitImage2 from "../../assets/image/outfit/outfit2.png";
import OutfitImage3 from "../../assets/image/outfit/outfit3.png";
import { NavLink } from 'react-router-dom';
import Header from "../../component/Header";

const OutfitsMV = () => {
  const outfits = [
    {
      id: 1,
      image: OutfitImage1,
      title: "Smart Casual",
      description:
        "Polished everyday look with neutral layers. Works for meetings or lunch.",
      link: "/outfit-details",
    },
    {
      id: 2,
      image: OutfitImage2,
      title: "Smart Casual",
      description:
        "Polished everyday look with neutral layers. Works for meetings or lunch.",
      link: "/outfit-details",
    },
    {
      id: 3,
      image: OutfitImage3,
      title: "Smart Casual",
      description:
        "Polished everyday look with neutral layers. Works for meetings or lunch.",
      link: "/outfit-details",
    },
  ];

  return (
    <div>
      {outfits.map((outfit) => (
        <div key={outfit.id} className="bg-gray-50 shadow-md mx-5 my-5 rounded-xl">
          {outfit.link ? (
            <NavLink to={outfit.link}>
              <Image
                src={outfit.image}
                className="w-full h-[331px] mb-4 rounded-t-xl"
                alt="Outfit"
              />
              <div className="px-4 py-4">
                <Header text={outfit.title} className="text-[18px] font-semibold mb-2" />
                <p className="text-[14px] font-inter text-[#878787] leading-relaxed">
                  {outfit.description}
                </p>
              </div>
            </NavLink>
          ) : (
            <>
              <Image
                src={outfit.image}
                className="w-full h-[331px] mb-4 rounded-t-xl"
                alt="Outfit"
              />
              <div className="px-4 py-4">
                <Header text={outfit.title} className="text-[18px] font-semibold mb-2" />
                <p className="text-[14px] font-inter text-[#878787] leading-relaxed">
                  {outfit.description}
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default OutfitsMV;
