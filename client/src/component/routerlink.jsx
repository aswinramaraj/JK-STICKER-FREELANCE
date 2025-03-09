import React from "react";
import Sticker from "./sticker";
import Product from "./Product";
import Confirmbuy from "./confirmbuy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routerlink = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sticker />} />
        <Route path = "/product" element={<Product/>}></Route>
        <Route path = "/product/confirmbuy" element={<Confirmbuy/>}></Route>
      </Routes>
    </Router>
  );
};

export default Routerlink;
