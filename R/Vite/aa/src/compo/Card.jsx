import React from "react";
import "./Card.css";
import pic from "../images/aa.png";

const Card = () => {
  return (
    <div className="aa">
      <h2>Dr. Aatif Jamshed</h2>
      <img src={pic} alt="photo" />
      <h3>Emp.Id= 02719</h3>
    </div>
  );
};

export default Card;
