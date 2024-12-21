import React from "react";
import Nav from "./components/NavBar/Nav";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Houses from "./components/Houses/Houses";
import Rooms from "./components/Rooms/Rooms";
import List from "./components/List/List";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/houses" element={<Houses/>} />
        <Route path="/rooms" element={<Rooms/>} />
        <Route path="/list" element={<List/>} />
        

      </Routes>
    </>
  );
};

export default App;
