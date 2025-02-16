import React from "react";
import vivoy16 from "../../assets/vivoy16.jpg";
import m14 from "../../assets/m14.jpg";
import samsung14 from "../../assets/samsungm14.jpg";
import phone2 from "../../assets/2phone.webp";
import laptopbag from "../../assets/laptopbag.avif";
import speaker from "../../assets/speaker.jpg";
import oppo from "../../assets/oppo.jpg";
import realme from "../../assets/realme.webp";
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
import familyman from "../../assets/familyman.jpg"

const TopAd = () => {
  // Data for first row
  const firstRowColumn1 = [
    [
      { img: vivoy16, name: "Vivo Y16" },
      { img: m14, name: "Galaxy M14" },
    ],
    [
      { img: samsung14, name: "iPhone 13" },
      { img: realme, name: "Redmi Note 12" },
    ],
  ];

  const firstRowColumn2 = [
    [
      { img: phone2, name: "Phone" },
      { img: laptopbag, name: "Laptop Bag" },
    ],
    [
      { img: oppo, name: "Oppo" },
      { img: speaker, name: "Speaker" },
    ],
  ];

  // Data for second row
  const secondRowColumn1 = [
    [{ img: pant }, { img: pant1 }],
    [{ img: pant2 }, { img: pant3 }],
  ];

  const secondRowColumn3 = [
    [{ img: kitchen1 }, { img: kitchen2 }],
    [{ img: kitchen3 }, { img: kitchen4 }],
  ];

  return (
    <div className="flex flex-col bg-gray-300 p-5 space-y-4">
      {/* First Row */}
      <div className="flex h-[500px] space-x-4">
        {/* Column 1 */}
        <div className="flex flex-col w-1/4 bg-white space-y-3 p-2">
          <p className="text-2xl font-bold text-center">Pick up where you left off</p>
          <div className="flex flex-col space-y-3">
            {firstRowColumn1.map((row, rowIdx) => (
              <div key={rowIdx} className="flex space-x-2">
                {row.map((item, idx) => (
                  <div key={idx} className="flex-1 text-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="object-contain h-40 w-44"
                    />
                    <p className="text-base font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-lg font-medium text-blue-800">See more</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col w-1/4 bg-white space-y-3 p-2">
          <p className="text-2xl font-bold text-center">Continue Shopping deals</p>
          <div className="flex flex-col space-y-2">
            {firstRowColumn2.map((row, rowIdx) => (
              <div key={rowIdx} className="flex space-x-2">
                {row.map((item, idx) => (
                  <div key={idx} className="flex-1 text-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="object-contain h-40 w-44"
                    />
                    <p className="text-base font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="text-lg font-medium text-blue-800">See all deals</p>
        </div>

        {/* Column 3: Featured image */}
        <div className="flex flex-col w-1/2 items-center justify-center bg-purple-500">
          <img
            src={familyman}
            alt="Featured deal"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex h-[500px] space-x-4">
        {/* Column 1 */}
        <div className="flex flex-col w-1/4 bg-white space-y-3 p-2">
          <p className="text-2xl font-bold text-center">Continue Shopping deals</p>
          <div className="flex flex-col space-y-4">
            {secondRowColumn1.map((row, rowIdx) => (
              <div key={rowIdx} className="flex justify-center space-x-2">
                {row.map((item, idx) => (
                  <img
                    key={idx}
                    src={item.img}
                    alt="Shopping deal"
                    className="object-contain h-44 w-44"
                  />
                ))}
              </div>
            ))}
          </div>
          <p className="text-lg font-medium text-blue-800">Explore more</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col bg-white w-1/4 space-y-3 p-2">
          <p className="text-2xl font-bold text-center">Up to 50% off | International brands</p>
          <div className="flex justify-center">
            <img
              src={kitchen}
              alt="Shopping deal"
              className="object-contain h-[370px] w-full"
            />
          </div>
          <p className="text-lg font-medium text-blue-800">See all offers</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col bg-white w-1/4 space-y-3 p-2">
          <p className="text-2xl font-bold text-center">Inspired by your shopping trends</p>
          <div className="flex flex-col space-y-3">
            {secondRowColumn3.map((row, rowIdx) => (
              <div key={rowIdx} className="flex justify-center space-x-3">
                {row.map((item, idx) => (
                  <img
                    key={idx}
                    src={item.img}
                    alt="Saved item deal"
                    className="object-contain h-44 w-48"
                  />
                ))}
              </div>
            ))}
          </div>
          <p className="text-lg font-medium text-blue-800">See all offers</p>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col bg-white w-1/4 space-y-3 p-2">
          <p className="text-2xl font-bold text-center">Up to 60% off | Bestselling products</p>
          <div className="flex justify-center">
            <img
              src={saree}
              alt="Shopping deal"
              className="object-contain h-[370px] w-full"
            />
          </div>
          <p className="text-lg font-medium text-blue-800">See all offers</p>
        </div>
      </div>
    </div>
  );
};

export default TopAd;
