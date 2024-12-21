import React, { useState } from "react";
import "./Nav.css";
import logo from "../../assets/p.jpg";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { MdBedroomParent } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { MdCabin } from "react-icons/md";
import { FaShopLock } from "react-icons/fa6";
import { MdForest } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const [visible, setvisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div id="nav">
      {visible ? (
        <div className="hamburger">
          <div onClick={() => navigate("/login")} className="ham1">
            {" "}
            Login
          </div>
          <div onClick={() => navigate("/signup")} className="ham1">
            Signup
          </div>
          <div onClick={() => navigate("/list")} className="ham1">
            List your home
          </div>
          <div className="ham1">Help center</div>
        </div>
      ) : (
        ""
      )}

      <div className="nav1">
        <div onClick={() => navigate("/")} className="logo">
          <img src={logo} alt="" width={50} />
          <h1>Private Property Rental</h1>
        </div>
        {/* --------------------------------------------------------------------------- */}
        <div className="search">
          <input type="text" name="" id="" placeholder="Search destination" />
          <button id="search-btn">
            <FiSearch />
            <span>Search</span>
          </button>
        </div>
        {/* --------------------------------------------------------------------------- */}
        <div className="ham">
          <button onClick={() => navigate("/list")} id="btn1">
            List Your Home
          </button>
          <button
            id="btn2"
            onClick={() => {
              setvisible((prev) => !prev);
            }}
          >
            <GiHamburgerMenu id="svg1" />{" "}
            <CgProfile id="svg2" title="user profile" />{" "}
          </button>
        </div>
      </div>

      {/* ----------------------------------------------------------------nav2 --------*/}
      <div className="nav2">
        <NavLink to={"/"}>
          <div className="svg11">
            <MdOutlineWhatshot /> <h3>Trending</h3>
          </div>
        </NavLink>
        <NavLink to={"/houses"}>
          <div className="svg11">
            <FaHouse />
            <h3>Houses</h3>
          </div>
        </NavLink>
        <NavLink to={"/rooms"}>
          <div className="svg11">
            <MdBedroomParent />
            <h3>Rooms</h3>
          </div>
        </NavLink>
        <div className="svg11">
          <GiFamilyHouse />
          <h3>Faram House</h3>{" "}
        </div>
        <div className="svg11">
          <MdOutlinePool />
          <h3>Pool House</h3>
        </div>
        <div className="svg11">
          <GiCampingTent />
          <h3>Tent house</h3>{" "}
        </div>
        <div className="svg11">
          <MdCabin />
          <h3>Cabins</h3>
        </div>
        <div className="svg11">
          <FaShopLock />
          <h3>Shops</h3>
        </div>
        <div className="svg11">
          <MdForest />
          <h3>Forest House</h3>
        </div>
      </div>
    </div>
  );
};

export default Nav;
