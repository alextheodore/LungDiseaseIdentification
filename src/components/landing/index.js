import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../asset/image/icon.png";
import "./index.css";

function LandingComponent() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <h1 style={{ fontWeight: "bold" }}>Ada Health</h1>
        <img className="logo" src={Logo} alt="logo" />
        <button onClick={() => navigate("/login")} className="button-primary">
          Get Started
        </button>
        <div className="button-container">
            <button
              onClick={() => navigate("/login")}
              className="button-left"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="button-right"
            >
              Register
            </button>
        </div>
      </div>
    </>
  );
}

export default LandingComponent;
