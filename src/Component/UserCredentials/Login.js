import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function LogIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/api/login", data)
      .then((res) => {
        alert(res.data.message);
        setData(res.data);
        localStorage.setItem("token", res.data.token);
        if (res.data.token) {
          navigate("/");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="center">
      <h1 id="heading">Log in</h1>
      <form className="loginform" onSubmit={handleSubmit}>
        <label className="word" htmlFor="email">
          Email:
        </label>
        <input
          className="text"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={data.email}
        />
        <br />
        <br />
        <label className="word" htmlFor="password">
          Password:
        </label>
        <input
          className="text1"
          type="password"
          maxLength="8"
          name="password"
          id="password"
          onChange={handleChange}
          value={data.password}
        />
        <br />
        <br />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <div className="or">OR</div>

      <NavLink to="/register" className="nextpage">
         Haven't account please login first
      </NavLink>
    </div>
  );
}

export default LogIn;