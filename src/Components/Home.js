import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <ul>
        <li>
          <NavLink activeClassName="active" to="/product">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Home;
