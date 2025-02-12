import React from "react";
import BackTop from "./Components/BackTop";
import MidFooter from "./Components/MidFooter";
import RightSection from "./Components/RightsSection";

const Footer = () => {
  return (
    <div className="flex flex-col mt-[50%]">
      {/* back to top */}
      <div>
        <BackTop />
      </div>

      {/* mid footer */}
      <div>
        <MidFooter />
      </div>

      {/* rights section */}
      <div>
        <RightSection />
      </div>
    </div>
  );
};

export default Footer;
