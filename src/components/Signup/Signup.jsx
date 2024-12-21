import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <div
      id="signup"
      onSubmit={(e) => {
        alert("Signup Successfully...👍");
      }}
    >
      <form action="">
        <div className="title">
          <span id="signuptitle">Sign-up Here</span>
        </div>
        <div className="list">
          <label htmlFor="name">Full Name</label>
          <input type="text" required id="name" />
        </div>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" />
        </div>
        <div className="list">
          <label htmlFor="password">Password</label>
          <input type="password" required id="password" />
        </div>
        <div className="list">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input type="password" required id="confirmpassword" />
        </div>
        <button id="signup-btn">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
