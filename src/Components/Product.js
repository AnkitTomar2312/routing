import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>This is Product</h1>
      <ul>
        <li>
          <Link to="/Product/1">Product Item 1</Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
