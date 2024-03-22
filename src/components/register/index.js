import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from "../../asset/image/icon.png";
import "./index.css";
import { useState } from 'react';

function RegisterComponent() {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState({
    name: '',
    email: '', 
    number: '',
    password: '',
    confirm: '',
  });

  const handleChange = (event) => {
    let field = event.target.name
    let value = event.target.value
    
    setInputValue({
      ...inputValue,
      [field] : value
    })
	};

  function SubmitRegister() {
    console.log(inputValue);
  }

  return (
    <>
    <div className="container"> 
      <h1 style={{ fontWeight: "bold" }}>REGISTER</h1>
      <img className="logo" src={Logo} alt="logo" />

      <form className='register'>
	      <label className='label-register'>Name
        <br></br>
	      <input  type="name"  name='name' onChange={handleChange} className='register-form' />
	      </label>
      </form>

      <form>
	      <label className='label-register'>Email
        <br></br>
	      <input  type="email"  name='email' onChange={handleChange} className='register-form' />
	      </label>
      </form>

      <form>
	      <label className='label-register'>No Telp
        <br></br>
	      <input  type="number"  name='number' onChange={handleChange} className='register-form'/>
	      </label>
      </form>

      <form>
	      <label className='label-register'>Password
        <br></br>
	      <input  type="password" name='password' onChange={handleChange} className='register-form' />
	      </label>
      </form>

      <form>
	      <label className='label-register'>Confirm Password
        <br></br>
	      <input  type="password"  name='password' onChange={handleChange} className='register-form'/>
	      </label>
      </form>

      <button onClick={() => SubmitRegister()} className="button-primary-register">
        Create an account
      </button>
    </div>
  </>
  )
}

export default RegisterComponent