import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function LayOut() {
  return (
    <div className="container-one">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/careers">Careers</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
