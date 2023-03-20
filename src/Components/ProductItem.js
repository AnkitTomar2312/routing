import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = () => {
  const previous = useNavigate();
  const handelback = () => {
    if (previous) {
      previous(-1);
    }
  };
  return (
    <div>
      <h1>Product Item 1</h1>
      <button onClick={handelback}>Go Back</button>
    </div>
  );
};

export default ProductItem;
