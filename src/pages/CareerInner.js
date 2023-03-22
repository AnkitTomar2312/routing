import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

export default function CareerInner() {
  const careers = useLoaderData();
  console.log(careers);
  return (
    <div>
      <h1>Career Inner</h1>
      {careers.map((career) => {
        return (
          <Link to="/" key={career.id}>
            <h2>{career.title}</h2>
            <p>Location is {career.location}</p>
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
}

//Loader Function:

export const carrerloader = async () => {
  const res = await fetch(" http://localhost:4000/careers");
  return res.json();
};
