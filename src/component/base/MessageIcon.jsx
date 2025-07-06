import React from 'react';

const MessageIcon = ({ className = "", fill = "#1C1500" }) => {
      return (
            <svg
                  className={className}
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                  fill={fill}
                  xmlns="http://www.w3.org/2000/svg"
            >
                  <path d="M448 0H64C28.7 0 0 28.7 0 64v320c0 35.3 28.7 64 64 64h96v64c0 8.8 7.2 16 16 16 3.9 0 7.8-1.4 10.9-4.1l112.2-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM144 224h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0-64h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 128h144c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
      );
};


export default MessageIcon;
