import React from "react";

const LoadingSpinner = ({ loading, text = "Processing..." }) => {
      if (!loading) return null;

      return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                  <div className="bg-transparent p-6 rounded relative min-w-[250px] flex flex-col items-center">
                        <div className="w-20 h-20 border-4 border-t-transparent border-secondary rounded-full animate-spin mb-4"></div>
                        <span className="font-medium font-inter text-gray-200">{text}</span>
                  </div>
            </div>
      );
};

export default LoadingSpinner;
