import React from "react";
import "./Card.css";
import Rectangle from "../static/Images/Rectangle 84.png";

const Card = ({ image, description }) => {
  return (
    <>
      <div className="cardDiv">
        <div>
          <img className="cardImg" src={image} alt="" />
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
