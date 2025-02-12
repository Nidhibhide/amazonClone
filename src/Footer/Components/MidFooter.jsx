import React, { useState } from "react";
import amazon_logo from "../../assets/amazon_logo.png";
import { TbWorld } from "react-icons/tb";
import LangList from "../../Navbar/Components/LangList";
import world from "../../assets/world.png";

const MidFooter = () => {
  const [lang, setLang] = useState(false);
  const handleLangState = (event) => {
    //setLang(false);
  };

  return (
    <>
      <div className="   bg-gray-800 flex justify-around text-white py-8 border-b-2 border-gray-500">
        <div className="">
          <p className="text-xl font-bold py-4">Get to Know Us</p>
          <ul className="text-lg mb-2">
            <li>About Amazon</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-bold py-4">Connect with Us</p>
          <ul className="text-lg mb-2">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-bold py-4">Make Money with Us</p>
          <ul className="text-lg mb-2">
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Product and Build Your Brand</li>
            <li>Supply to Amazon</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-bold py-4">Let Us Help You</p>
          <ul className="text-lg mb-2">
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="flex bg-gray-800 py-10 justify-center  text-white gap-8">
        <div className="">
          <img
            src={amazon_logo}
            className="object-cover h-10 w-32 cursor-pointer  "
          ></img>
        </div>

        <div className="flex gap-4 ">
          <div
            className="flex border-2 border-gray-500 rounded-md items-center gap-2 px-4 cursor-pointer"
            onMouseEnter={() => {
              setLang(true);
            }}
          >
            <span className="text-lg">
              <TbWorld />
            </span>
            <p>English</p>
          </div>

          {lang && (
            <div className=" absolute bottom-0 bg-red-800">
              {/* <LangList handleLangState={handleLangState} /> */}
            </div>
          )}

          <div className="flex border-2 border-gray-500 rounded-md items-center gap-2 px-4 cursor-pointer">
            <img className="object-cover h-8 w-10" src={world}></img>
            <p>India</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidFooter;
