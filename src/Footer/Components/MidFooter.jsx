import React from "react";
import amazon_logo from "../../assets/amazon_logo.png";
import { TbWorld } from "react-icons/tb";
import world from "../../assets/world.png";

const sections = [
  {
    title: "Get to Know Us",
    links: ["About Amazon", "Careers", "Press Releases", "Amazon Science"],
  },
  {
    title: "Connect with Us",
    links: ["Facebook", "Twitter", "Instagram"],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell on Amazon",
      "Sell under Amazon Accelerator",
      "Product and Build Your Brand",
      "Supply to Amazon",
      "Become an Affiliate",
      "Fulfilment by Amazon",
      "Advertise Your Products",
      "Amazon Pay on Merchants",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Your Account",
      "Returns Centre",
      "Recalls and Product Safety Alerts",
      "100% Purchase Protection",
      "Amazon App Download",
      "Help",
    ],
  },
];

const MidFooter = () => {
  return (
    <>
      <div className="bg-gray-800 flex justify-around text-white py-8 border-b-2 border-gray-500">
        {sections.map((section, index) => (
          <div key={index}>
            <p className="text-xl font-bold py-4">{section.title}</p>
            <ul className="text-lg mb-2 space-y-1">
              {section.links.map((link, idx) => (
                <li key={idx}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex bg-gray-800 py-10 justify-center text-white gap-8">
        <img
          src={amazon_logo}
          className="object-cover h-10 w-32 cursor-pointer"
          alt="Amazon Logo"
        />

        <div className="flex gap-4">
          <div className="flex border-2 border-gray-500 rounded-md items-center gap-2 px-4 cursor-pointer">
            <TbWorld className="text-lg" />
            <p>English</p>
          </div>

          <div className="flex border-2 border-gray-500 rounded-md items-center gap-2 px-4 cursor-pointer">
            <img className="object-cover h-8 w-10" src={world} alt="Globe" />
            <p>India</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidFooter;
