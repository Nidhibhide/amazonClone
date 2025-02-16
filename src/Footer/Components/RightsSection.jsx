import React from "react";

const columns = [
  {
    items: [
      {
        title: "AbeBooks",
        desc: ["Books, art", "& collections"],
      },
      {
        title: "Shopbop",
        desc: ["Designer", "ashion Brands"],
      },
    ],
  },
  {
    items: [
      {
        title: "Amazon Web Services",
        desc: ["Scalable Cloud", "Computing Services"],
      },
      {
        title: "Amazon Business",
        desc: ["Everything for", "Your Business"],
      },
    ],
  },
  {
    items: [
      {
        title: "Audible",
        desc: ["Download", "Audio Books"],
      },
      {
        title: "Prime Now",
        desc: ["2-Hour Delivery", "on Everyday Items"],
      },
    ],
  },
  {
    items: [
      {
        title: "IMDb",
        desc: ["Movies,TV", "& Celebrities"],
      },
      {
        title: "Amazon Prime Music",
        desc: [
          "100 million songs, ad-",
          "free",
          "Over 15 million podcast",
          "episodes",
        ],
      },
    ],
  },
];

const conditionLinks = [
  "Conditions of Use Sale",
  "Privacy Notice",
  "Interest-Based Ads",
];

const RightsSection = () => {
  return (
    <div className="bg-black text-white py-10 flex flex-col gap-6">
      <div className="flex flex-wrap justify-around">
        {columns.map((column, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-4">
            {column.items.map((item, itemIdx) => (
              <div key={itemIdx} className="cursor-pointer hover:underline">
                <p>{item.title}</p>
                <div className="text-gray-400">
                  {item.desc.map((line, lineIdx) => (
                    <p key={lineIdx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-center gap-6 cursor-pointer">
          {conditionLinks.map((link, idx) => (
            <p key={idx} className="hover:underline">
              {link}
            </p>
          ))}
        </div>
        <p className="text-center">
          &copy; 1996-2025, Amazon.com, Inc. or Its affiliates
        </p>
      </div>
    </div>
  );
};

export default RightsSection;
