import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div id="login" onSubmit={(e)=>{ alert("Login Successfully...👍")}}>
      <form action="">
        <div className="title">
          <span id="logintitle">Login Here</span>
        </div>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" />
        </div>
        <div className="list">
          <label htmlFor="password">Password</label>
          <input type="password" required id="password" />
        </div>
        <button id="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
