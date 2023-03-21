import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Help() {
  return (
    <div>
      <h2>This is a Help Page.</h2>
      <NavLink to="faq">FAQ</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <Outlet />
    </div>
  );
}
