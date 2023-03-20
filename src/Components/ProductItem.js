import React from "react";
import { useNavigate } from "react-router-dom";
const ProductItem = () => {
  const history = useNavigate();
  const handelRedirection = () => {
    if (history) {
      history("/product", { replace: true });
    }
  };
  return (
    <div>
      <h1>Product Item 1</h1>
      <button onClick={handelRedirection}>Go Back</button>
    </div>
  );
};

export default ProductItem;
