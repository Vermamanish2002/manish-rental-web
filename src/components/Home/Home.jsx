import React from "react";
import "./Home.css";
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
import villa from "../../assets/villa.jpg";
import villa1 from "../../assets/villa1.jpg";
import villa2 from "../../assets/villa3.jpg";
import mountain from "../../assets/mountain.avif";
import mountain1 from "../../assets/mountain1.avif";
import mountain2 from "../../assets/mountain3.avif";
import village from "../../assets/village1.avif";
import village1 from "../../assets/village2.avif";
import village2 from "../../assets/village3.avif";
import room from "../../assets/room.jpg";
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import roomnew from "../../assets/roomnew.avif";
import roomnew1 from "../../assets/roomnew1.avif";
import roomnew2 from "../../assets/roomnew2.avif";
import hut1 from "../../assets/hut1.avif";
import hut2 from "../../assets/hut2.avif";
import hut3 from "../../assets/hut3.avif";
import ski from "../../assets/ski.avif";
import ski1 from "../../assets/ski1.avif";
import ski2 from "../../assets/ski2.avif";
import { useContext } from "react";
import { dataContext } from "../../context/UserContext";
const Home = () => {

  const {
    title,
    setTitle,
    addListing,
    setAddListing,
    addImage1,
    setAddImage1,
    addImage2,
    setAddImage2,
    addImage3,
    setAddImage3,
    addLocation,
    setAddLocation,
    price,
    setPrice,
  }=useContext(dataContext)


  return (
    <div id="home">
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
        imge1={villa}
        image2={villa1}
        image3={villa2}
        title="5BHK villa in Noida"
        price="60,000"
      />
      <Card
        imge1={mountain}
        image2={mountain1}
        image3={mountain2}
        title="3BHK in Shimla"
        price="30,000"
      />

      <Card
        imge1={huthouse}
        image2={huthouse1}
        image3={huthouse2}
        title="2BHK house in Mumbai"
        price="30,000"
      />
      <Card
        imge1={village}
        image2={village1}
        image3={village2}
        title="2BHK house in village"
        price="30,000"
      />
      <Card
        imge1={room}
        image2={room1}
        image3={room2}
        title="1BHK Room in Mumbai"
        price="20,000"
      />
      <Card
        imge1={roomnew}
        image2={roomnew1}
        image3={roomnew2}
        title="1BHK Room in Delhi"
        price="25,000"
      />
      <Card
        imge1={hut1}
        image2={hut2}
        image3={hut3}
        title="1BHK Hut in Shimla"
        price="20,000"
      />
      <Card
        imge1={ski}
        image2={ski1}
        image3={ski2}
        title="2BHK Room in Manali"
        price="20,000"
      />
      {addListing?<Card
        imge1={URL.createObjectURL(addImage1)}
        image2={URL.createObjectURL(addImage2)}
        image3={URL.createObjectURL(addImage3)}
        title={title}
        price={price}
      />:""}
      
    </div>
  );
};

export default Home;
