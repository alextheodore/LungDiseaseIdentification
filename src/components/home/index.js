import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../asset/image/icon.png";
import "./index.css";
import { useState } from "react";

function HomeComponent() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>Home Page</h1>
      </div>
    </>
  );
}

export default HomeComponent;
