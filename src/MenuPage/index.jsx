import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";
import Profile from "./Components/Allsection";

const MenuList = () => {
  const [click, Setclick] = useState(false);

  const handleProfile = (event) => {
    Setclick(false);
  };
  return (
    <>
      <div className="bg-gray-800 flex text-white justify-around text-lg font-medium items-center p-1">
        <div
          className="flex cursor-pointer border border-transparent hover:border-white gap-1 p-2"
          onClick={() => Setclick(true)}
        >
          <span className="text-3xl">
            <FiAlignJustify />
          </span>
          <p>All</p>
        </div>
        <p className="border border-transparent hover:border-white p-2">
          MX Player
        </p>
        <p className="border border-transparent hover:border-white p-2">Sell</p>
        <p className="border border-transparent hover:border-white p-2">
          Amazon Pay
        </p>
        <p className="border border-transparent hover:border-white p-2">
          Gift Cards
        </p>
        <p className="border border-transparent hover:border-white p-2">
          Buy Again
        </p>
        <p className="border border-transparent hover:border-white p-2">
          AmazonBasics
        </p>
        <p className="border border-transparent hover:border-white p-2">
          Gift Ideas
        </p>
        <p className="border border-transparent hover:border-white p-2">
          Today's Deals
        </p>
        <p className="border border-transparent hover:border-white p-2">
          Customer Service
        </p>
        <p className="border border-transparent hover:border-white p-2">
          Subscribe & Save
        </p>
        <div className="flex items-center border border-transparent hover:border-white p-2">
          <p>Browsing History</p>
          <span className="text-gray-400">
            <GoTriangleDown />
          </span>
        </div>
        <p className="border border-transparent hover:border-white p-2">
          Nidhi's Amazon.in
        </p>
        <p className="border border-transparent hover:border-white p-2">
          Home Improvement
        </p>
        <p className="border border-transparent hover:border-white p-2">
          Mobiles
        </p>
      </div>

      {click && (
        <>
          <Profile handleProfile={handleProfile} />
        
        </>
      )}
    </>
  );
};

export default MenuList;
