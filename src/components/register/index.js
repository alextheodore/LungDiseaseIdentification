import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from "../../asset/image/icon.png";
import "./index.css";
import { useState } from 'react';

function RegisterComponent() {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('');

  const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

  return (
    <>
    <div className="container">
      <h1 style={{ fontWeight: "bold" }}>Ada Health</h1>
      <img className="logo" src={Logo} alt="logo" />

      <form>
	      <label>Name
        <br></br>
	      <input  type="text"  value={inputValue} onChange={handleChange} />
	      </label>
      </form>

      <form>
	      <label>Email
        <br></br>
	      <input  type="text"  value={inputValue} onChange={handleChange} />
	      </label>
      </form>

      <form>
	      <label>No Telp
        <br></br>
	      <input  type="text"  value={inputValue} onChange={handleChange} />
	      </label>
      </form>

      <form>
	      <label>Password
        <br></br>
	      <input  type="text"  value={inputValue} onChange={handleChange} />
	      </label>
      </form>

      <form>
	      <label>Confirm Password
        <br></br>
	      <input  type="text"  value={inputValue} onChange={handleChange} />
	      </label>
      </form>

      

      <button onClick={() => navigate("/login")} className="button-primary">
        Create an account
      </button>
    </div>
  </>
  )
}

export default RegisterComponent