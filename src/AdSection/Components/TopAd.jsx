// import React from "react";
// import vivoy16 from "../../assets/vivoy16.jpg";
// import m14 from "../../assets/m14.jpg";
// import phone2 from "../../assets/2phone.webp";
// import fan from "../../assets/fan.jpg";
// import speaker from "../../assets/speaker.jpg";
// import headphones from "../../assets/headphones.jpg";
// import tv from "../../assets/tv.jpg";
// import vivo from "../../assets/vivo.webp";
// import oppo from "../../assets/oppo.jpg";
// import realme from "../../assets/realme.webp";
// import tshirt from "../../assets/tshirt.jpg";
// import amazonblacklogo from "../../assets/amazon-logo-black.webp";
// import fan2 from "../../assets/fan2.jpg"

// const TopAd = () => {
//   return (
//     <div className="flex justify-around bg-gray-300 py-4">
//       <div className="flex flex-col gap-4  py-4 px-12 bg-white">
//         <p className="justify-center text-2xl font-bold">
//           Pick up where you left off
//         </p>
//         <div className="flex gap-12">
//           <div className="flex-1">
//             <img src={vivoy16} className="object-cover h-40 w-36"></img>
//             <p className="text-base text-center font-medium">Vivo Y16</p>
//           </div>
//           <div className="flex-1 ">
//             <img src={m14} className="object-cover  h-40 w-36"></img>
//             <p className="text-base text-center font-medium">Galaxy M14</p>
//           </div>
//         </div>
//         <div className="flex gap-12">
//           <div className="flex-1">
//             <img src={oppo} className="object-cover  h-40 w-36"></img>
//             <p className="text-base text-center font-medium">Oppo A78</p>
//           </div>
//           <div className="flex-1">
//             <img src={realme} className="object-cover  h-40 w-36"></img>
//             <p className="text-base text-center font-medium">Realme C33</p>
//           </div>
//         </div>
//         <p className="justify-start text-lg font-medium text-blue-800">
//           See more
//         </p>
//       </div>

//       <div className="flex flex-col gap-8  py-4 px-12 bg-white">
//         <p className="justify-center text-2xl font-bold">
//           Continue Shopping deals
//         </p>
//         <div className="flex">
//           <div className="flex-1">
//             <img src={phone2} className="object-cover h-40 w-36"></img>
//           </div>
//           <div className="flex-1">
//             <img src={fan} className="object-cover h-40 w-40"></img>
//           </div>
//         </div>
//         <div className="flex gap-12">
//           <div className="flex-1">
//             <img src={speaker} className="object-cover h-40 w-36"></img>
//           </div>
//           <div className="flex-1">
//             <img src={phone2} className="object-cover h-40 w-36"></img>
//           </div>
//         </div>
//         <p className="justify-start text-lg font-medium text-blue-800">
//           See all deals
//         </p>
//       </div>

//       <div className="flex flex-col gap-6  py-4 px-8 bg-white">
//         <p className="justify-center text-2xl font-bold">
//           Deals related to items you've saved
//         </p>
//         <div className="flex ">
//           <div className="flex-1  ">
//             <img src={headphones} className="object-cover h-40 w-40"></img>
//           </div>
//           <div className="flex-1 ">
//             <img src={tv} className="object-cover   h-40 w-48"></img>
//           </div>
//         </div>
//         <div className="flex gap-12 ">
//           <div className="flex-1">
//             <img src={vivo} className="object-cover  h-40 w-36"></img>
//           </div>
//           <div className="flex-1">
//             <img src={tshirt} className="object-cover  h-44 w-40"></img>
//           </div>
//         </div>
//         <p className="justify-start text-lg font-medium text-blue-800">
//           See all deals
//         </p>
//       </div>

//       <div className="flex flex-col gap-4  ">
//         <div className="flex bg-white gap-4 py-4 px-4">
//           <div className="flex flex-col  w-[65%] gap-4">
//             <div className="text-3xl font-bold flex flex-col">
//               <p className="">Get Bulk discounts + </p>
//               <p className="">Top B2B deals !!</p>
//             </div>
//             <p className="text-lg">Register Now</p>
//           </div>
//           <div className="w-[35%] flex   ">
//             <img className=" h-18 w-40" src={amazonblacklogo}></img>
//           </div>
//         </div>

//         <div className="bg-white flex justify-center p-6">
//           <img
//             className="object-cover h-64 w-auto red-400"
//             src={fan2}
//           ></img>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopAd;
import React from "react";
import vivoy16 from "../../assets/vivoy16.jpg";
import m14 from "../../assets/m14.jpg";
import phone2 from "../../assets/2phone.webp";
import laptopbag from "../../assets/laptopbag.avif";
import speaker from "../../assets/speaker.jpg";
import mouse from "../../assets/maouse.jpg";
import tv from "../../assets/tv.jpg";
import vivo from "../../assets/vivo.webp";
import oppo from "../../assets/oppo.jpg";
import realme from "../../assets/realme.webp";
import tshirt from "../../assets/tshirt.jpg";
import amazonblacklogo from "../../assets/amazon-logo-black.webp";
import fan2 from "../../assets/fan2.jpg";

//need to be fixed
const TopAd = () => {
  return (
    <div className="flex justify-around bg-gray-200  py-4 px-4 gap-4">
      {/* Pick up where you left off */}
      <div className="flex flex-col gap-4 p-4 bg-white">
        <p className="text-2xl font-bold text-center ">
          Pick up where you left off
        </p>
        <div className="flex gap-4 ">
          {[
            { img: vivoy16, name: "Vivo Y16" },
            { img: m14, name: "Galaxy M14" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.img}
                className="object-cover h-42 w-44"
                alt={item.name}
              />
              <p className="text-base font-medium">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 ">
          {[
            { img: oppo, name: "Oppo A78" },
            { img: realme, name: "Realme C33" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.img}
                className="object-cover h-42 w-44"
                alt={item.name}
              />
              <p className="text-base font-medium">{item.name}</p>
            </div>
          ))}
        </div>
        <p className="text-lg font-medium text-blue-800">See more</p>
      </div>

      {/* Continue Shopping deals */}
      <div className="flex flex-col gap-8 p-4 bg-white">
        <p className="text-2xl font-bold text-center ">
          Continue Shopping deals
        </p>
        <div className="flex gap-4 ">
          {[phone2, laptopbag].map((img, index) => (
            <img
              key={index}
              src={img}
              className="object-cover h-42 w-44"
              alt="Shopping deal"
            />
          ))}
        </div>
        <div className="flex gap-4 ">
          {[speaker, phone2].map((img, index) => (
            <img
              key={index}
              src={img}
              className="object-cover h-42 w-44"
              alt="Shopping deal"
            />
          ))}
        </div>
        <p className="text-lg font-medium text-blue-800 ">See all deals</p>
      </div>

      {/* Deals related to saved items */}
      <div className="flex flex-col gap-8 p-4 bg-white">
        <p className="text-2xl font-bold text-center ">
          Deals related to items you've saved
        </p>
        <div className="flex gap-4  ">
          {[mouse, tv].map((img, index) => (
            <img
              key={index}
              src={img}
              className="object-cover h-40 w-full"
              alt="Saved item deal"
            />
          ))}
        </div>
        <div className="flex gap-4 justify-center">
          {[vivo, tshirt].map((img, index) => (
            <img
              key={index}
              src={img}
              className="object-cover h-46 w-40"
              alt="Saved item deal"
            />
          ))}
        </div>
        <p className="text-lg font-medium text-blue-800 ">
          See all deals
        </p>
      </div>

      {/* Bulk Discounts */}
      <div className="flex flex-col gap-4">
        <div className="flex bg-white gap-4 py-4 px-4">
          <div className="flex flex-col  w-[65%] gap-6">
            <div className="text-3xl font-bold  flex flex-col">
              <p>Get Bulk discounts +</p>
              <p>Top B2B deals !!</p>
            </div>
            <p className="text-lg ">Register Now</p>
          </div>
          <div className="w-[35%] flex  items-center">
            <img
              className="h-28  w-40 "
              src={amazonblacklogo}
              alt="Amazon Logo"
            />
          </div>
        </div>

        <div className=" flex justify-center items-center bg-white  h-full">
          <img
            className="object-cover h-60 w-96 red-400  "
            src={fan2}
            alt="Fan Image"
          />
        </div>
      </div>
    </div>
  );
};

export default TopAd;
