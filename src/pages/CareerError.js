import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function CareerError() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error Page</h1>
      <p>{error.message}</p>
      <Link to="/">Back to the Home page</Link>
    </div>
  );
}
