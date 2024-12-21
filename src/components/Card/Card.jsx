import React from "react";
import "./Card.css";
import house from "../../assets/house.jpg";
import house1 from "../../assets/housekichen.jpg";
import house2 from "../../assets/houseliving.jpg";

const Card = ({imge1,image2,image3,title,price}) => {
  return (
    <div className="card">
      <div className="images">
        <img src={imge1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
      <span className="cardspan1">{title}</span>
      <span className="cardspan2">₹{price}/month</span>
    </div>
  );
};

export default Card;
