import React from 'react'

const ItemList = ({changeItem}) => {
    console.log("Props",changeItem)
  return (
    <select
    name="AmazonItems"
    size="15"
    className="w-full h-full rounded-lg p-2 text-xl border-none outline-none"
    onMouseLeave={changeItem}
  >
    <option value="Electronics" className="py-1">
      Electronics
    </option>
    <option value="Laptops" className="py-1">
      Laptops
    </option>
    <option value="Smartphones" className="py-1">
      Smartphones
    </option>
    <option value="HomeAppliances" className="py-1">
      Home Appliances
    </option>
    <option value="Fashion" className="py-1">
      Fashion
    </option>
    <option value="Books" className="py-1">
      Books
    </option>
    <option value="GamingConsoles" className="py-1">
      Gaming Consoles
    </option>
    <option value="Furniture" className="py-1">
      Furniture
    </option>
    <option value="Groceries" className="py-1">
      Groceries
    </option>
    <option value="ToysGames" className="py-1">
      Toys & Games
    </option>
    <option value="BeautyProducts" className="py-1">
      Beauty & Personal Care
    </option>
    <option value="Watches" className="py-1">
      Watches
    </option>
    <option value="Automotive" className="py-1">
      Automotive Accessories
    </option>
    <option value="KitchenAppliances" className="py-1">
      Kitchen Appliances
    </option>
    <option value="FitnessEquipment" className="py-1">
      Fitness Equipment
    </option>
    <option value="PetSupplies" className="py-1">
      Pet Supplies
    </option>
    <option value="OfficeSupplies" className="py-1">
      Office Supplies
    </option>
    <option value="OutdoorGear" className="py-1">
      Outdoor & Camping Gear
    </option>
    <option value="MusicalInstruments" className="py-1">
      Musical Instruments
    </option>
    <option value="SmartHome" className="py-1">
      Smart Home Devices
    </option>
    <option value="HealthCare" className="py-1">
      Health & Personal Care
    </option>
    <option value="Cameras" className="py-1">
      Cameras & Photography
    </option>
    <option value="Jewelry" className="py-1">
      Jewelry
    </option>
    <option value="Handbags" className="py-1">
      Handbags & Wallets
    </option>
    <option value="BabyProducts" className="py-1">
      Baby Products
    </option>
    <option value="CarAccessories" className="py-1">
      Car & Bike Accessories
    </option>
    <option value="Stationery" className="py-1">
      Stationery & Art Supplies
    </option>
    <option value="VideoStreaming" className="py-1">
      Video Streaming & Subscriptions
    </option>
    <option value="Software" className="py-1">
      Software & Digital Services
    </option>
  </select>
  )
}

export default ItemList