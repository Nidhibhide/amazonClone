import React, { useState, useEffect, useCallback } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";
import Profile from "./Components/Allsection";

const MenuList = () => {
  const [click, setClick] = useState(false);

  const handleProfile = useCallback(() => {
    setClick(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = click ? "hidden" : "auto";
  }, [click]);

  const menuItems = [
    "MX Player",
    "Sell",
    "Amazon Pay",
    "Gift Cards",
    "Buy Again",
    "AmazonBasics",
    "Gift Ideas",
    "Today's Deals",
    "Customer Service",
    "Subscribe & Save",
    "Nidhi's Amazon.in",
    "Home Improvement",
    "Mobiles",
  ];

  return (
    <>
      {/* Navbar */}
      <div className="bg-gray-800 flex text-white justify-around text-lg font-medium items-center p-1">
        {/* Sidebar Open Button */}
        <div
          className="flex cursor-pointer border border-transparent hover:border-white gap-1 p-2"
          onClick={() => setClick(true)}
        >
          <FiAlignJustify className="text-3xl" />
          <p>All</p>
        </div>

        {/* Dynamic Menu Items */}
        {menuItems.map((item, index) => (
          <p key={index} className="border border-transparent hover:border-white p-2">
            {item}
          </p>
        ))}

        {/* Browsing History with Dropdown Icon */}
        <div className="flex items-center border border-transparent hover:border-white p-2">
          <p>Browsing History</p>
          <GoTriangleDown className="text-gray-400 ml-1" />
        </div>
      </div>

      {/* Sidebar Component */}
      <Profile handleProfile={handleProfile} click={click} />
    </>
  );
};

export default MenuList;
