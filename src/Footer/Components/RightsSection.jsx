import React from "react";

const RightsSection = () => {
  return (
    <div className="bg-black text-white py-10 flex flex-col gap-6">
      <div className=" flex justify-around">
        <div className="flex flex-col gap-4">
          <div className="cursor-pointer hover:underline ">
            <p>AbeBooks</p>
            <div className="text-gray-400">
              <p>Books, art</p>
              <p>& collections</p>
            </div>
          </div>
          <div className="cursor-pointer hover:underline  ">
            <p>Shopbop</p>
            <div className="text-gray-400">
              <p>Designer</p>
              <p>ashion Brands</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="cursor-pointer hover:underline ">
            <p>Amazon Web Services</p>
            <div className="text-gray-400">
              <p>Scalable Cloud</p>
              <p>Computing Services</p>
            </div>
          </div>
          <div className="cursor-pointer hover:underline  ">
            <p>Amazon Business</p>
            <div className="text-gray-400">
              <p>Everything for</p>
              <p>Your Business</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="cursor-pointer hover:underline ">
            <p>Audible</p>
            <div className="text-gray-400">
              <p>Download</p>
              <p>Audio Books</p>
            </div>
          </div>
          <div className="cursor-pointer hover:underline ">
            <p>Prime Now</p>
            <div className="text-gray-400">
              <p>2-Hour Delivery</p>
              <p>on Everyday Items</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="cursor-pointer hover:underline  ">
            <p>IMDb</p>
            <div className="text-gray-400">
              <p>Movies,TV</p>
              <p>& Celebrities</p>
            </div>
          </div>
          <div className="cursor-pointer hover:underline">
            <p>Amazon Prime Music</p>
            <div className="text-gray-400">
              <p>100 million songs, ad-</p>
              <p>free</p>
              <p>Over 15 million podcast</p>
              <p>episodes</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-6 cursor-pointer ">
          <p className="hover:underline">Conditions of Use Sale</p>
          <p className="hover:underline">Privacy Notice</p>
          <p className="hover:underline">Interest-Based Ads</p>
        </div>
        <p className="text-center">
          &copy; 1996-2025, Amazon.com,Inc. or Its affiliates
        </p>
      </div>
    </div>
  );
};

export default RightsSection;
