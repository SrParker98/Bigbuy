import React from "react";
import "./style.css";
import Navbar from "./components/Navbar.jsx";
import Aterrizage from "./components/Aterrizage.jsx";
import Btob from "./components/Btob.jsx";
import RegistroConGoogle from "./components/RegistroConGoogle.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cookies from "./components/Cookies.jsx";
import MarketplaceInfo from "./components/MarketplaceInfo.jsx";
import Ecommerce from "./components/Ecommerce.jsx";
import B2b from "./components/Btob.jsx";
import CookiePolicy from "./components/Cookies.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <CookiePolicy />
      <Aterrizage />
      <RegistroConGoogle />
      <MarketplaceInfo />
      <Ecommerce />
      <B2b />
    </div>
  );
}

export default App;
