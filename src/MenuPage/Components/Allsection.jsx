import React, { useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";

// Reusable Components
const SectionTitle = ({ title }) => (
  <p className="font-bold text-2xl py-2 px-8">{title}</p>
);

const MenuItem = ({ label, hasArrow = false }) => (
  <div className="flex items-center justify-between hover:bg-gray-300 py-2 px-8">
    <p>{label}</p>
    {hasArrow && <SlArrowRight />}
  </div>
);

const Allsection = ({ handleProfile, click }) => {
  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    }
  });

  const trendingItems = ["Best Sellers", "New Releases", "Movers and Shakers"];
  const digitalContent = [
    "Echo & Alexa",
    "Fire TV",
    "Kindle E-Readers & eBooks",
    "Audible Audiobooks",
    "Amazon Prime Video",
    "Amazon Prime Music",
  ];
  const categories = ["Mobiles, Computers", "Men's Fashion", "Women's Fashion"];
  const programs = ["Amazon Pay", "Amazon Launchpad", "Amazon Business"];
  const helpSettings = ["Your Account", "Customer Service", "Sign Out"];

  return (
    <>
      {click && (
        <div className="fixed bg-black/50 inset-0 z-40 transition-opacity h-[100%] overflow-y-hidden"></div>
      )}

      <div
        className={`bg-gray-100 absolute top-0 left-0 flex flex-col w-[450px] h-full overflow-auto z-50 transition duration-700 ease-in-out ${
          click ? "translate-x-1" : "-translate-x-full"
        }`}
      >
        {/* User Info */}
        <div className="flex bg-gray-800 text-white items-center gap-4 p-4">
          <FaUserAlt className="text-xl" />
          <p className="font-bold text-2xl">Hello, Nidhi</p>
        </div>

        {/* Sections */}
        <div className="border-b border-black text-lg py-2">
          <SectionTitle title="Trending" />
          {trendingItems.map((item) => (
            <MenuItem key={item} label={item} />
          ))}
        </div>

        <div className="border-b border-black text-lg py-2">
          <SectionTitle title="Digital Content and Devices" />
          {digitalContent.map((item) => (
            <MenuItem key={item} label={item} hasArrow />
          ))}
        </div>

        <div className="border-b border-black text-lg py-2">
          <SectionTitle title="Shop by Category" />
          {categories.map((item) => (
            <MenuItem key={item} label={item} hasArrow />
          ))}
        </div>

        <div className="border-b border-black text-lg py-2">
          <SectionTitle title="Programs & Features" />
          {programs.map((item) => (
            <MenuItem key={item} label={item} />
          ))}
          <MenuItem label="Gift Cards & Mobile Recharges" hasArrow />
        </div>

        <div className="text-lg py-2">
          <SectionTitle title="Help & Setting" />
          {helpSettings.map((item) => (
            <MenuItem key={item} label={item} />
          ))}
        </div>
      </div>
      {click && (
        <div
          className={`fixed   left-[24%] top-2 border border-white text-white z-40  rounded-md cursor-pointer transition duration-300 ease-in-out ${
            click ? "translate-x-1" : "-translate-x-full"
          }`}
          onClick={handleProfile}
        >
          <span className="text-5xl">
            <IoMdClose />
          </span>
        </div>
      )}
    </>
  );
};

export default Allsection;
