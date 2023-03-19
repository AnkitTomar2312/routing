import React from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Product from "./Components/Product";
import ProductItem from "./Components/ProductItem";
const App = () => {
  return (
    <div>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/product/1" element={<ProductItem />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
