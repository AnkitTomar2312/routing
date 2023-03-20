import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>This is Product</h1>
      <ul>
        <li>
          <Link to="/product/1">Product 1</Link>
        </li>
        <li>
          <Link to="/product/2">Product 2</Link>
        </li>
        <li>
          <Link to="/product/3">Product 3</Link>
        </li>
        <li>
          <Link to="/product/4">Product 4</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/product/Oreo">Product Oreo</Link>
        </li>
        <li>
          <Link to="/product/Mario">Product Mario</Link>
        </li>
        <li>
          <Link to="/product/Telerio">Product Telerio</Link>
        </li>
        <li>
          <Link to="/product/Sperio">Product Superio</Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
