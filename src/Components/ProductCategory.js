import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCategory = () => {
  const history = useNavigate();
  const handelBack = () => {
    if (history) {
      history(-1);
    }
  };
  return (
    <div>
      <h1>Product Category "Something" </h1>
      <button onClick={handelBack}>Go Back</button>
    </div>
  );
};

export default ProductCategory;
