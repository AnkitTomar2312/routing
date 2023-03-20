import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/Product/2">Product Item 2</NavLink>
        </li>
        <li>
          <NavLink to="/Product/3">Product Item 3</NavLink>
        </li>
        <li>
          <NavLink to="/Product/4">Product Item 4</NavLink>
        </li>
      </ul>

      <ol>
        <li>
          <NavLink activeClassName="active" to="/Product/abc">
            Product category 1
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ fontWeight: "20px", color: "red" }}
            to="/Product/abcd"
          >
            Product category 2
          </NavLink>
        </li>
        <li>
          <NavLink to="/Product/abcde">Product category 3</NavLink>
        </li>
        <li>
          <NavLink to="/Product/abcdef">Product category 4</NavLink>
        </li>
      </ol>
    </div>
  );
};

export default Product;
