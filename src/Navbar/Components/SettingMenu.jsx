import React from "react";

const yourLists = [
  "Shopping List",
  "Create a wish List",
  "Wish from any website",
  "Baby wishlist",
  "Discover your style",
  "Explore Showroom",
];

const yourAccount = [
  "Your Account",
  "Your Orders",
  "Your Wish List",
  "Keep Shopping for",
  "Your Recommendations",
  "Recalls and product safety Alerts",
  "Your Prime Membership",
  "Your Prime Video",
  "Your Subsribe & Save Items",
  "Your Seller Account",
  "Content Library",
  "Devices",
  "Register for free Business Account",
  "Switch Accounts",
  "Sign Out",
];

const SettingMenu = ({ handleConflict }) => {
  return (
    <div
      className="fixed top-[8%] left-[65%] bg-[#fffafa] p-5 shadow-2xl rounded-md"
      onMouseLeave={handleConflict}
    >
      <div className="bg-[#d8e6e6] p-4 flex rounded-xl gap-28">
        <p className="text-base">Who is shopping? Select a profile</p>
        <p className="text-lg font-medium">Manage Profiles?</p>
      </div>
      <div className="flex">
        <div className="flex-1 border-r border-black pr-4">
          <h1 className="my-4 text-xl font-bold">Your Lists</h1>
          <ul className="text-base space-y-1">
            {yourLists.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 ml-4">
          <h1 className="my-4 text-xl font-bold">Your Account</h1>
          <ul className="text-base space-y-1">
            {yourAccount.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingMenu;
