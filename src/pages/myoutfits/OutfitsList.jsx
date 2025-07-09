import React from "react";
import Image from "../../component/Image";
import OutfitContain from "./OutfitContain";

// fallback images
import Image2 from "../../assets/image/outfit/sphoto.png";
import Image3 from "../../assets/image/outfit/zoom.png";

const OutfitsList = ({ outfits }) => {
  console.log("OutfitsList:", outfits);
  return (
    <div className="p-4 bg-gray-50 rounded-xl my-9">
      <div className="grid grid-cols-12 gap-y-8">
        {outfits.map((outfit, index) => (
          <div
            key={outfit.id || index}
            className="col-span-12 md:col-span-12 md:grid md:grid-cols-12 gap-4 items-start bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Image Section */}
            <div className="md:col-span-4">
              <div className="relative">
                <Image
                  src={outfit.image || Image2}
                  alt={outfit?.name ? outfit.name : `Outfit ${index + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg"
                />

                {/* Optional Zoom Icon */}
                {/* <div className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:scale-105 transition">
                  <Image
                    src={Image3}
                    alt="Zoom Icon"
                    className="w-6 h-6 cursor-pointer"
                  />
                </div> */}
              </div>
            </div>

            {/* Text / Content Section */}
            <div className="md:col-span-8 px-4 py-2 md:px-10 md:py-6">
              <OutfitContain outfit={outfit} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutfitsList;
