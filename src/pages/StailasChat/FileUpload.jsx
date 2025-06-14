import React, { useState, useRef } from 'react';
import ImageInput from '../../assets/image/chat/ImageInput.png';

const FileUpload = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null); // for programmatically triggering the input

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    fileInputRef.current.click(); // trigger file input when image button is clicked
  };

  return (
    <div className="text-center">
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        className="hidden"
      />

      {/* Custom button with your image */}
      <img
        src={ImageInput}
        alt="Upload Icon"
        onClick={handleClick}
        className="cursor-pointer w-20 h-20 inline-block"
      />

      {/* Image preview after upload */}
      {imagePreview && (
        <div className="mt-4">
          <img
            src={imagePreview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded shadow-md mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
