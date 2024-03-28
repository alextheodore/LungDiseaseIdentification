import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../asset/image/icon.png";
import "./index.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import FontAwesome from "react-fontawesome";

function LoginComponent() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let field = event.target.name;
    let value = event.target.value;

    setInputValue({
      ...inputValue,
      [field]: value,
    });
  };

  function SubmitLogin() {
    axios({
      method: "post",
      url: "https://server-neon-gamma.vercel.app/api/v1/server/login",
      data: {
        email: inputValue.email,
        password: inputValue.password,
      },
    })
      .then(({ data }) => {
        console.log(data);
      })

      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container">
        <div className="header-login">
          <div className="button-back">
            <FontAwesomeIcon
              onClick={() => navigate("/")}
              icon={faArrowLeftLong}
              size="2x"
            />
          </div>
          <div className="text-login">
            <h1 style={{ fontWeight: "bold" }}>LOGIN</h1>
          </div>
          <div className="empty">

          </div>
        </div>
        <img className="logo" src={Logo} alt="logo" />

        <form className="login">
          <label className="label-login">
            Email
            <br></br>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="login-form"
            />
          </label>
        </form>
        <br></br>
        <form>
          <label className="label-login">
            Password
            <br></br>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="login-form"
            />
          </label>
        </form>

        <button onClick={() => SubmitLogin()} className="button-primary-login">
          LOGIN
        </button>
      </div>
    </>
  );
}

export default LoginComponent;
