import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "https://thumbs.dreamstime.com/b/plain-maggi-noodles-instant-masala-maggi-plain-maggi-noodles-instant-masala-maggi-isolated-white-background-206531178.jpg",
    "https://source.unsplash.com/800x400/?city",
    "https://source.unsplash.com/800x400/?technology",
    "https://source.unsplash.com/800x400/?ocean",
    "https://source.unsplash.com/800x400/?mountains",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[300px] bg-red-500 px-4">
     <div className="flex items-center gap-2"> <p className="text-3xl font-semibold">Your browsing history</p><p className="text-xl">view or edit your browsing history</p></div>
      {/* Carousel Wrapper */}
      <div className="relative w-full h-full rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex">
              <img src={image} className=" object-cover w-24 h-24" alt={`Slide ${index + 1}`} />
              <img src={image} className="  object-cover w-24 h-24" alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 z-30 flex items-center justify-center p-2 -translate-y-1/2 bg-gray-800/50 rounded-full text-white hover:bg-gray-800 transition"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 z-30 flex items-center justify-center p-2 -translate-y-1/2 bg-gray-800/50 rounded-full text-white hover:bg-gray-800 transition"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
