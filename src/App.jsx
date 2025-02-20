import Navbar from "./Navbar/index";
import Menu from "./MenuPage/index";
import Footer from "./Footer/index";
import Advertise from "./AdSection/index";
import { useState } from "react";

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <Advertise />
      <Footer />
    </>
  );
}

export default App;
