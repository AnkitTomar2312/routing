import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <ul>
        <li>
          <NavLink to="/product">Products</NavLink>
        </li>
        <li>
          <NavLink to="/product?Search=something">
            Products with search something
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: "/product",
              search: "mobile",
            }}
          >
            Products with search mobile using the objec model
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
