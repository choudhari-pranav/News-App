import React from "react";
import loading from "./Infinity-1s-200px.gif";

const Spiner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spiner;
