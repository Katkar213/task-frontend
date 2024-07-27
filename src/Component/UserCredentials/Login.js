import React, { useState } from "react";
import axios from "axios";
import "../Authentication.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogIn() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ecommerce-backend-new.onrender.com/api/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.name);
        if (res.data.token) {
          toast.success(res.data.message);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          toast.warn(res.data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Login failed");
      });

    // Clear only the password field after login attempt
    setData({ ...data, password: "" });
  };

  return (
    <div className="center">
      <h1 id="heading">Log in</h1>
      <form className="loginform" onSubmit={handleSubmit}>
        <label className="word" htmlFor="email">
          Email:
        </label><br />
        <input
          className="text"
          type="email"
          placeholder="Enter your Email"
          name="email"
          id="email"
          onChange={handleChange}
          value={data.email || ""}
        /><br /><br />
        <label className="word" htmlFor="password">
          Password:
        </label><br />
        <input
          className="text"
          type="password"
          maxLength="8"
          name="password"
          placeholder="Enter your Password"
          id="password"
          onChange={handleChange}
          value={data.password || ""}
        /><br /><br />
        <div className="btndiv">
          <button className="login-submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="or">OR</div>
      <NavLink to="/register" className="nextpage">
        Haven't account please Register first
      </NavLink>
      <ToastContainer />
    </div>
  );
}

export default LogIn;
