import React from "react";
import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>Error 404 </h1>
      <p>
        Esse labore labore veniam voluptate id. Amet minim amet quis tempor
        labore irure voluptate id consectetur. Lorem officia cupidatat aliqua
        labore ullamco sunt minim dolor cillum magna. Culpa ullamco amet laborum
        minim sit est ullamco ea.
      </p>
      <h3>
        Go to the <NavLink to="/">HOMEPAGE</NavLink>
      </h3>
    </div>
  );
}
