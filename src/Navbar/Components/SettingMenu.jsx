import React from 'react'

const SettingMenu = ({handleLangDataState}) => {
  return (
    <div
            className="fixed top-[8%] left-[65%] bg-[#fffafa] p-5 shadow-2xl h-auto w-auto rounded-md"
            onMouseLeave={handleLangDataState}
          >
            <div className=" bg-[#d8e6e6] p-4 flex rounded-xl gap-28">
              <p className="text-base">Who is shopping? Select a profile</p>
              <p className="text-lg font-medium">Manage Profiles?</p>
            </div>
            <div className="flex">
              <div className="border-r border-black flex-1">
              <h1 className="my-4 text-xl font-bold">Your Lists</h1>
              <ul className="text-base space-y-1 ">
                <li>Shopping List</li>
                <li>Create a wish List</li>
                <li>Wish from any website</li>
                <li>Baby wishlist</li>
                <li>Discover your style</li>
                <li>Explore Showroom</li>
              </ul>
              </div>
              <div className=" flex-1 ml-4">
              <h1 className="my-4 text-xl font-bold">Your Account</h1>
              <ul className="text-base space-y-1">
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Your Wish List</li>
                <li>Keep Shopping for</li>
                <li>Your Recommendations</li>
                <li>Recalls and product safety Alerts</li>
                <li>Your Prime Membership</li>
                <li>Your Prime Video</li>
                <li>Your Subsribe & Save Items</li>
                <li>Your Seller Account</li>
                <li>Content Library</li>
                <li>Devices</li>
                <li>Register for free Business Account</li>
                <li>Switch Accounts</li>
                <li>Sign Out</li>
              </ul>
              </div>
            </div>
          </div>
  )
}

export default SettingMenu