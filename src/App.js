import React from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Productcategory from "./Components/ProductCategory";
import ProductItem from "./Components/ProductItem";
import Error from "./Components/Error";
const App = () => {
  return (
    <div>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/product/:id" element={<ProductItem />} />
          <Route
            exact
            path="/product/:category"
            element={<Productcategory />}
          />
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
