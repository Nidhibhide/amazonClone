import React, { useState } from "react";
import amazon_logo from "../assets/amazon_logo.png";
import world from "../assets/world.png";
import { IoLocationOutline, IoCart } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import LangList from "./Components/LangList";
import { IoIosSearch } from "react-icons/io";
import ItemList from "./Components/ItemList";
import SettingMenu from "./Components/SettingMenu";

const Navbar = () => {
  const [item, setItem] = useState(false);
  const [lang, setLang] = useState(false);
  const [data, setData] = useState(false);

  const handleItemState = (event) => {
    console.log("Option Clicked");
    setItem(false);
  };

  const handleLangDataState = (event) => {
    setData(false);
    setLang(false);
  };

  return (
    <div className="flex h-20 bg-black ">
      {/* 1st section */}
      <div className="w-[20%] flex   items-center justify-center ">
        <div className="w-1/2 ">
          <img
            className="h-14 w-44 object-cover hover:border border-white"
            src={amazon_logo}
            alt="amazon logo"
          />
        </div>
        <div className="w-1/2 flex  gap-1 hover:border border-white  py-2">
          <span className="text-white text-3xl ">
            <IoLocationOutline />
          </span>
          <div className="-space-y-1">
            <p className="text-gray-300 text-base ">Deliver to Nidhi</p>
            <p className="text-white text-lg font-bold">Solapur 413003</p>
          </div>
        </div>
      </div>

      {/* mid section */}
      <div className="  w-[54%]  flex items-center justify-center">
        <div className=" flex bg-[#e5e4e2] items-center py-3 px-4 rounded-tl-lg rounded-bl-lg cursor-pointer">
          <button className="text-base" onClick={() => setItem(true)}>
            All
          </button>
          <span>
            {" "}
            <GoTriangleDown />
          </span>
        </div>

        <input
          type="text"
          placeholder="Search Amazon.in"
          className=" bg-white w-[85%] p-3 placeholder-gray-500 placeholder:font-medium  placeholder:text-xl"
        ></input>
        <button className=" text-3xl py-2.5 px-3 rounded-tr-lg rounded-br-lg bg-[#f4ca16]">
          <IoIosSearch />
        </button>
      </div>
      {item && (
        <div className=" absolute top-[7%] left-[22%] w-auto h-auto  bg-[#fffafa] shadow-2xl rounded-lg  px-1 py-2">
          <ItemList changeItem={handleItemState} />
        </div>
      )}
      {/* end section */}
      <div className="w-[26%] flex gap-4 items-center justify-center">
        <div
          className="flex hover:border border-white items-center px-2 py-4"
          onMouseEnter={() => {
            setLang(true);
          }}
        >
          <img src={world} className="object-cover h-7 w-7 mr-1"></img>
          <p className="text-white text-lg font-bold">EN</p>
          <span className="text-gray-400 text-base">
            <GoTriangleDown />
          </span>
        </div>
        {lang && (
          <div className=" absolute h-auto w-auto top-[7%] left-[73%]  bg-[#fffafa] shadow-2xl rounded-lg  px-4 py-4 ">
            <LangList handleLangState={handleLangDataState} />
          </div>
        )}
        <div
          className="hover:border border-white  p-2 flex items-center"
          onMouseEnter={() => {
            setData(true);
          }}
        >
          <div className="-space-y-1">
            <p className="text-white text-base ">Hello,Nidhi</p>
            <p className="text-white text-lg font-bold">Account & Lists</p>
          </div>
          <span className="text-gray-400 text-base">
            {" "}
            <GoTriangleDown />
          </span>
        </div>
        {data && (
       <SettingMenu handleLangDataState={handleLangDataState}/>
        )}

        <div className="hover:border border-white -space-y-1 p-2">
          <p className="text-white text-base ">Returns</p>
          <p className="text-white text-lg font-bold">& Orders</p>
        </div>
        <div className="flex items-end hover:border border-white p-1">
          <span className="text-white text-5xl">
            <IoCart />
          </span>
          <p className="text-white font-bold text-lg">Cart</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
