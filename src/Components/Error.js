import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const nav = useNavigate();
  const handelreverse = () => {
    nav(-1);
  };
  return (
    <div>
      <h1>Error 404 Page not found</h1>
      <button onClick={handelreverse}>Revert Back</button>
    </div>
  );
};

export default Error;
