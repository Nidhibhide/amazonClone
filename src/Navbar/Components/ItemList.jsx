import React from "react";

const items = [
  { value: "Electronics", label: "Electronics" },
  { value: "Laptops", label: "Laptops" },
  { value: "Smartphones", label: "Smartphones" },
  { value: "HomeAppliances", label: "Home Appliances" },
  { value: "Fashion", label: "Fashion" },
  { value: "Books", label: "Books" },
  { value: "GamingConsoles", label: "Gaming Consoles" },
  { value: "Furniture", label: "Furniture" },
  { value: "Groceries", label: "Groceries" },
  { value: "ToysGames", label: "Toys & Games" },
  { value: "BeautyProducts", label: "Beauty & Personal Care" },
  { value: "Watches", label: "Watches" },
  { value: "Automotive", label: "Automotive Accessories" },
  { value: "KitchenAppliances", label: "Kitchen Appliances" },
  { value: "FitnessEquipment", label: "Fitness Equipment" },
  { value: "PetSupplies", label: "Pet Supplies" },
  { value: "OfficeSupplies", label: "Office Supplies" },
  { value: "OutdoorGear", label: "Outdoor & Camping Gear" },
  { value: "MusicalInstruments", label: "Musical Instruments" },
  { value: "SmartHome", label: "Smart Home Devices" },
  { value: "HealthCare", label: "Health & Personal Care" },
  { value: "Cameras", label: "Cameras & Photography" },
  { value: "Jewelry", label: "Jewelry" },
  { value: "Handbags", label: "Handbags & Wallets" },
  { value: "BabyProducts", label: "Baby Products" },
  { value: "CarAccessories", label: "Car & Bike Accessories" },
  { value: "Stationery", label: "Stationery & Art Supplies" },
  { value: "VideoStreaming", label: "Video Streaming & Subscriptions" },
  { value: "Software", label: "Software & Digital Services" },
];

const ItemList = ({ changeItem }) => {
  return (
    <select
      name="AmazonItems"
      size="15"
      className="w-full h-full rounded-lg p-2 text-xl border-none outline-none"
      onMouseLeave={changeItem}
    >
      {items.map((item, index) => (
        <option key={index} value={item.value} className="py-1">
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default ItemList;
