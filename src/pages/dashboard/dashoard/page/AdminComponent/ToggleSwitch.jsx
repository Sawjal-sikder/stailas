import React, { useState } from "react";

const ToggleSwitch = () => {
      const [isDisabled, setIsDisabled] = useState(false);

      return (
            <div className="flex items-center justify-between w-full ">
                  <label className="text-lg font-semibold text-primary">
                        Disable User Access
                  </label>
                  <button
                        onClick={() => setIsDisabled(!isDisabled)}
                        className={`w-10 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out
          ${isDisabled ? "bg-gray-300" : "bg-black"}`}
                  >
                        <div
                              className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300
            ${isDisabled ? "translate-x-0" : "translate-x-4"}`}
                        ></div>
                  </button>
            </div>
      );
};

export default ToggleSwitch;
