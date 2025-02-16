import React, { useState } from "react";

const BackTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="bg-gray-600 flex items-center justify-center text-white text-lg font-medium py-3 cursor-pointer "
      onClick={handleScrollToTop}
    >
      <p>Back to top</p>
    </div>
  );
};

export default BackTop;
