import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductItem = () => {
  const data = useParams();
  console.log(data);
  const { id } = data;
  const history = useNavigate();
  const handelback = () => {
    history(-1);
  };
  return (
    <div>
      <h1>This is a Product {id} page</h1>
      <button onClick={handelback}>Go Back</button>
    </div>
  );
};

export default ProductItem;
