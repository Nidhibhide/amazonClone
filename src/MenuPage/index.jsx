import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";

const MenuList = () => {
  return (
    <div className="bg-gray-800 flex text-white justify-around text-lg font-medium py-2">
      <div className="flex  gap-2 ">
        {" "}
        <span className="text-white text-3xl">
          {" "}
          <FiAlignJustify />
        </span>{" "}
        <p>All</p>
      </div>
      <p>MX Player</p>
      <p>Sell</p>
      <p>Amazon Pay</p>
      <p>Gift Cards</p>
      <p>Buy Again</p>
      <p>AmazonBasics</p>
      <p>Gift Ideas</p>
      <p>Today's Deals</p>
      <p>Customer Service</p>
      <p>Subscribe & Save</p>
      <div className="flex items-center">
        <p>Browsing History</p>
        <span className="text-gray-400">
          {" "}
          <GoTriangleDown />
        </span>
      </div>
      <p>Nidhi's Amazon.in</p>
      <p>Home Improvement</p>
      <p>Mobiles</p>
    </div>
  );
};

export default MenuList;
