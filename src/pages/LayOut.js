import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs";

export default function LayOut() {
  return (
    <div className="container-one">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/help">Help</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
