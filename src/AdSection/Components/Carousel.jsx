import React, { useState } from "react";
import samsungm14 from "../../assets/samsungm14.jpg";
import realme from "../../assets/realme.webp";
import pant from "../../assets/pant.jpg";
import pant1 from "../../assets/pant1.jpg";
import pant2 from "../../assets/pant2.jpg";
import pant3 from "../../assets/pant3.jpg";
import whiteshirt from "../../assets/whiteshirt.jpeg";
import mouse from "../../assets/maouse.jpg";
import oppo from "../../assets/oppo.jpg";
import laptopbag from "../../assets/laptopbag.avif";
import chair from "../../assets/chair.jpg";
import mousecover from "../../assets/mousecover.jpg";
import cream from "../../assets/cream.jpg";
import pendrive from "../../assets/pendrive.jpg";
import lipstick from "../../assets/lipstick.jpg";
import mousecover1 from "../../assets/mousecover1.jpg";
import chair1 from "../../assets/chair1.jpg";
import tshirt1 from "../../assets/tshirt1.jpg";

const Carousel = () => {
  const images = [
    samsungm14,
    realme,
    pant,
    pant1,
    pant2,
    pant3,
    whiteshirt,
    chair,
    mouse,
    oppo,
    laptopbag,
    mousecover,
    cream,
    pendrive,
    lipstick,
    mousecover1,
    chair1,
    tshirt1,
    cream,
  ];

  // Set 10 images per slide
  const imagesPerSlide = 10;

  // Creating slides (each slide will have 10 images)
  const slides = [];
  for (let i = 0; i < images.length; i += imagesPerSlide) {
    slides.push(images.slice(i, i + imagesPerSlide));
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative m-4 p-2  flex flex-col gap-4">
      <div className="flex  gap-3  items-center">
        <p className="text-3xl font-semibold">Your browsing history</p>
        <p className="text-lg text-blue-600 ">
          View or edit your browsing history
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden  w-full h-[220px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* FLEX Layout for Images */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {slide.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  className="w-[10%] h-[220px] object-contain "
                  alt={`Slide ${index + 1} Image ${idx + 1}`}
                />
              ))}
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
