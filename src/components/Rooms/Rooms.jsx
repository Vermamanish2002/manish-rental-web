import React from "react";
import "./Rooms.css";
import flat from "../../assets/roomhouse.avif";
import flat1 from "../../assets/roomhouse1.avif";
import flat2 from "../../assets/roomhouse3.avif";
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
import Card from "../Card/Card";
const Rooms = () => {
  return (
    <div id="rooms">
      <Card
        imge1={flat}
        image2={flat1}
        image3={flat2}
        title="2BHK Room in Noida"
        price="20,000"
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
    </div>
  );
};

export default Rooms;
