import React from "react";
import "./Box.css";

const Box = ({ data }) => {
  return (
    <>
      <div className="pageCard">
        <h6>{data}</h6>
      </div>
    </>
  );
};

export default Box;
