import React from "react";

const EyeIcon = ({ className = "", bgColor = "#4e837c", iconColor = "#ffffff" }) => {
      return (
            <svg
                  className={className}
                  width="30"
                  height="30"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
            >
                  <rect width="52" height="52" rx="8" fill={bgColor} />
                  <path
                        d="M26 16C18 16 11.7 21.3 9 26C11.7 30.7 18 36 26 36C34 36 40.3 30.7 43 26C40.3 21.3 34 16 26 16ZM26 32C22.7 32 20 29.3 20 26C20 22.7 22.7 20 26 20C29.3 20 32 22.7 32 26C32 29.3 29.3 32 26 32ZM26 23C24.3 23 23 24.3 23 26C23 27.7 24.3 29 26 29C27.7 29 29 27.7 29 26C29 24.3 27.7 23 26 23Z"
                        fill={iconColor}
                  />
            </svg>
      );
};

export default EyeIcon;
