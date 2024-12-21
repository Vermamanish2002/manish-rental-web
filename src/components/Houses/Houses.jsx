import React from "react";
import "./Houses.css";
import Card from "../Card/Card";
import house from "../../assets/house.jpg";
import house1 from "../../assets/housekichen.jpg";
import house2 from "../../assets/houseliving.jpg";
import faramhouse from "../../assets/farmhouse.jpg";
import faramhouse1 from "../../assets/farmhouse1.jpg";
import faramhouse2 from "../../assets/farmhouse2.jpg";
import huthouse from "../../assets/huthouse.jpg";
import huthouse1 from "../../assets/huthouse1.jpg";
import huthouse2 from "../../assets/huthouse2.jpg";
import flat from "../../assets/roomhouse.avif";
import flat1 from "../../assets/roomhouse1.avif";
import flat2 from "../../assets/roomhouse3.avif";
import village from "../../assets/village1.avif";
import village1 from "../../assets/village2.avif";
import village2 from "../../assets/village3.avif";
const Houses = () => {
  return (
    <div id="houses">
      <Card
        imge1={house}
        image2={house1}
        image3={house2}
        title="3BHK villa in Noida"
        price="40,000"
      />
      <Card
        imge1={faramhouse}
        image2={faramhouse1}
        image3={faramhouse2}
        title="1BHK Farm house in Delhi"
        price="60,000"
      />
      <Card
        imge1={huthouse}
        image2={huthouse1}
        image3={huthouse2}
        title="2BHK in Mumbai"
        price="30,000"
      />
      <Card
        imge1={flat}
        image2={flat1}
        image3={flat2}
        title="2BHK"
        price="20,000"
      />
      <Card
        imge1={village}
        image2={village1}
        image3={village2}
        title="2BHK house in village"
        price="30,000"
      />
    </div>
  );
};

export default Houses;
