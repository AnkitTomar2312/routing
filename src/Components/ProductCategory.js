import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Productcategory = () => {
  const data = useParams();
  console.log(data);
  const { category } = data;
  const history = useNavigate();
  const handelback = () => {
    history(-1);
  };
  return (
    <div>
      <h1>This is a Product {category} page</h1>
      {data.subcategory && <h2>This is a {data.subcategory} subcategory</h2>}
      <button onClick={handelback}>Go Back</button>
    </div>
  );
};

export default Productcategory;
