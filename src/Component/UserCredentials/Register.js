import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "../Register.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const navi = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios.post("https://ecommerce-backend-new.onrender.com/api/register", data)
      .then((res) => {
        toast.success(res.data.message);
        console.log("data added")
        setTimeout(()=>
          {
            navi("/");
          },4000
        )
  
      })
      .catch((err) => console.log(err));

    setData({
      name: "",
      email: "",
      password: "",
      phoneNo: "",
    });
  };

  return (
    <>
      <div className="center1">
        <h1 id="heading">Register</h1>
      
        <br />
        <br />
        <label id="font" htmlFor="email">
          UserName:
        </label>
        <input
          className="text2"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={data.email}
          required
        />
        <br />
        <br />
        <label id="font" htmlFor="Password">
          Set Password:
        </label>
        <input
          className="text3"
          type="password"
          maxLength="8"
          name="password"
          id="Password"
          onChange={handleChange}
          value={data.password}
          required
        ></input>
        <br />
        <br />
      
        
        <button className="button1" onClick={handleSubmit}>
          Submit
        </button>
        <div className="or1">OR</div>
        <NavLink to="/" className="nextpage1">
          Go To Login Page
        </NavLink>
        <ToastContainer/>
      </div>
    </>
  );
}

export default Register;