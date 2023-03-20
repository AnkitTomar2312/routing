import React from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Product from "./Components/Product";
import ProductCategory from "./Components/ProductCategory";
import ProductItem from "./Components/ProductItem";
const App = () => {
  return (
    <div>
      <Main>
        <Routes>
          <Route path="/product/:id([0-9]+)" element={<ProductItem />} />
          <Route
            path="/product/:category([a-zA-Z]+)"
            element={<ProductCategory />}
          />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
