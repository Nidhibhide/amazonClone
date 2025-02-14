import React from "react";
import adImage from "../../assets/adImage.jpg";

const MainAdd = () => {
  return (
    <>
      <div className=" bg-gray-400 relative">
        <img src={adImage} className=" w-full h-96 object-cover object-top"></img>
        <div className="bg-white p-2 flex justify-center text-lg absolute top-[75%] left-[20%] ">
          <p>
            You are on amazon.com. You can also shop on Amazon India for
            millions o products with fast local delivery. Click here to go to
            amazon.in
          </p>
        </div>
      </div>
    </>
  );
};

export default MainAdd;
