import React from "react";
import { Link, NavLink } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>This is Product</h1>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/Product/1">
            Product Item 1
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ fontWeight: "20px", color: "red" }}
            to="/Product/1"
          >
            Product Item 2
          </NavLink>
        </li>
        <li>
          <NavLink to="/Product/1">Product Item 3</NavLink>
        </li>
        <li>
          <NavLink to="/Product/1">Product Item 4</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Product;
