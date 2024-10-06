import React, { useState } from 'react';
import image1 from '../../assets/eventA.jpg';
import image2 from '../../assets/eventB.jpg';
import image3 from '../../assets/eventC.jpg';
import image4 from '../../assets/eventA.jpg';

function ImageGallery() {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-gallery text-center my-12">
      <div className="relative w-full md:w-2/3 mx-auto">
        <img src={images[currentImageIndex]} alt="Gallery Image" className="w-full h-auto rounded-lg shadow-lg" />

        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-100">
          Prev
        </button>
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
}

export default ImageGallery;
