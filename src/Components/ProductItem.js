import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>This is a Product {id} page</h1>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default ProductItem;
