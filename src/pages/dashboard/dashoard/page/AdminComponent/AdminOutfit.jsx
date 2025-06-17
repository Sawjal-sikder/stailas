import React from 'react'
import OutfitsList from '../../../../myoutfits/OutfitsList';

const AdminOutfit = ({isOpenOutfit, setIsOpenOutfit}) => {
      if (!isOpenOutfit) return null;
      return (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center overflow-auto">
                  <div className="bg-white p-8 rounded shadow-lg w-full mx-20 max-h-screen relative overflow-y-auto">
                        <h3 className='text-center text-2xl font-inter font-bold text-primary py-6'>Karthy Karup’s Outfits</h3>
                        <div>
                              <OutfitsList />
                              <OutfitsList />
                              <OutfitsList />
                              <OutfitsList />
                              <OutfitsList />
                              <OutfitsList />
                        </div>

                        <button
                              onClick={() => setIsOpenOutfit(false)}
                              className="mt-4 px-2.5 py-1 bg-black text-white rounded-full font-bold font-inter absolute top-0 right-2 text-center"
                        >
                              X
                        </button>
                  </div>
            </div>
      )
}

export default AdminOutfit
