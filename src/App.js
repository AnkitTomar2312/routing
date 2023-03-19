import React from "react";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Product from "./Components/Product";
import ProductItem from "./Components/ProductItem";
const App = () => {
  return (
    <div>
      <Main>
        <Routes>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/products/1">
            <ProductItem />
          </Route>
        </Routes>
      </Main>
    </div>
  );
};

export default App;
