import React from 'react'    
import { useNavigate } from "react-router-dom";
import Logo from "../../asset/image/icon.png";
import "./index.css";
import { useState } from 'react';   

function LoginComponent() {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const  handleChange = (event) => {
    let field = event.target.name
    let value = event.target.value

    setInputValue({
      ...inputValue,
      [field] : value
    })
	};

    function SubmitLogin() {
      console.log(inputValue);
    }

  return (


    <>
    <div className="container">    
      <h1 style={{ fontWeight: "bold" }}>LOGIN</h1>
      <img className="logo" src={Logo} alt="logo" />

      <form className='login'>
	      <label className='label-login'>Email
        <br></br>
	      <input  type="email" name='email' onChange={handleChange} className='login-form'/>
	      </label>
      </form>
      <br></br>
      <form>
	      <label className='label-login'>Password
        <br></br>
	      <input  type="password" name='password' onChange={handleChange} className='login-form' />
	      </label>
      </form>

      <button onClick={() => SubmitLogin()} className="button-primary-login">
        LOGIN
      </button>
    </div>
  </>
  )
}

export default LoginComponent