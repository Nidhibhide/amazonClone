import React from "react";
import kitchen1 from "../../assets/kitchen1.jpg";

import kitchen from "../../assets/kitchen.webp";
import kitchen2 from "../../assets/kitchen2.webp";
import kitchen3 from "../../assets/kitchen3.webp";
import pant from "../../assets/pant.jpg";
import pant1 from "../../assets/pant1.jpg";
import pant2 from "../../assets/pant2.jpg";
import pant3 from "../../assets/pant3.jpg";
import kitchen4 from "../../assets/kitchen4.avif";
import saree from "../../assets/saree.jpg";

const TopAd = () => {
  return (
    <div className="flex justify-around bg-gray-200  py-2 px-4 gap-4">
      {/* Pick up where you left off */}
      <div className="flex flex-col gap-4 p-4   bg-white">
        <p className="text-2xl font-bold text-center  ">
          Continue Shopping deals
        </p>
        <div className="flex gap-8  justify-center">
          {[pant, pant1].map((img, index) => (
            <img
              key={index}
              src={img}
              className="object-contain h-48 w-44"
              alt="Shopping deal"
            />
          ))}
        </div>
        <div className="flex gap-4 justify-center">
          {[pant2, pant3].map((img, index) => (
            <img
              key={index}
              src={img}
              className="object-contain h-48 w-44"
              alt="Shopping deal"
            />
          ))}
        </div>
        <p className="text-lg font-medium text-blue-800 ">Explore more</p>
      </div>

      {/* Continue Shopping deals */}
      <div className="flex flex-col gap-4 bg-white  p-4">
        <p className="text-2xl font-bold text-center ">
          Up to 50% off | International brands
        </p>
        <div className="flex gap-4 justify-center items-center ">
          <img
            src={kitchen}
            className="object-contain h-[400px] w-full"
            alt="Shopping deal"
          />
        </div>

        <p className="text-lg font-medium text-blue-800 ">See all offers</p>
      </div>

      {/* Deals related to saved items */}
      <div className="flex flex-col gap-8 p-4 bg-white">
        <p className="text-2xl font-bold text-center ">
          Inspired by your shopping trends
        </p>
        <div className="flex gap-6  justify-center ">
          {[kitchen1, kitchen2].map((img, index) => (
            <img
              key={index}
              src={img}
              className="object-content  h-44 w-48 "
              alt="Saved item deal"
            />
          ))}
        </div>
        <div className="flex gap-6 justify-center ">
          {[kitchen3, kitchen4].map((img, index) => (
            <img
              key={index}
              src={img}
              className="object-content h-44 w-48 "
              alt="Saved item deal"
            />
          ))}
        </div>
      </div>

      {/* Bulk Discounts */}
      <div className="flex flex-col gap-4 bg-white  p-4">
        <div className=" flex flex-col text-2xl font-bold text-center ">
          <p>Up to 60% off | Bestselling</p>
          <p>products from women-owne...</p>
        </div>
        <div className="flex gap-4 justify-center   ">
          <img
            src={saree}
            className="object-contain h-[360px] w-[400px] "
            alt="Shopping deal"
          />
        </div>

        <p className="text-lg font-medium text-blue-800 ">See all offers</p>
      </div>
    </div>
  );
};

export default TopAd;
