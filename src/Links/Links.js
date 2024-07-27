import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import Login from "../Component/UserCredentials/Login";
import Register from "../Component/UserCredentials/Register";
import ProtectedRoute from "../Component/ProtectedRoute";
import Home from "../Component/Home";
import FileUpload from "../Component/FileManagement";

export default function Links() {
  const [change, setChange] = useState(false);
  const [val, setVal] = useState({ value: "", btn: "" });

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("name");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setVal({
        value: userName,
        btn: "LogOut",
      });
    } else {
      setVal({
        value: "Profile",
        btn: "SignIn",
      });
    }
  }, [token, userName]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <div>
      <div className="navbar">
        <div className="title">
          <h1>Title</h1>
        </div>
        <ul className={change ? "navlink navlink-web" : "navlink"}>
          <li>
            <NavLink className="navlink-names" to="/login" onClick={() => setChange(!change)}>Login</NavLink>
          </li>
          <li>
            <NavLink className="navlink-names" to="/" onClick={() => setChange(!change)}>Home</NavLink>
          </li>
          <li>
            <NavLink className="navlink-names" to="/upload" onClick={() => setChange(!change)}>Upload</NavLink>
          </li>
          <div className="primary">
            <li>
              <NavLink><i className="fa-solid fa-user cart"></i></NavLink>
              <ul className="submenunew">
                <li onClick={() => setChange(!change)} className="white">
                  <p>{val.value}</p>
                </li>
                <li onClick={() => setChange(!change)}>
                  {val.btn === "LogOut" ? (
                    <span onClick={handleLogout}>{val.btn}</span>
                  ) : (
                    <span className="white"><NavLink to="/register">{val.btn}</NavLink></span>
                  )}
                </li>
              </ul>
            </li>
          </div>
        </ul>
        <div className="logo">
          <ul className="navlink">
            <li>
              <NavLink><i className="fa-solid fa-user"></i></NavLink>
              <ul className="submenunew">
                <li><span>{val.value}</span></li>
                <li>
                  {val.btn === "LogOut" ? (
                    <span onClick={handleLogout}>{val.btn}</span>
                  ) : (
                    <span><NavLink to="/register">{val.btn}</NavLink></span>
                  )}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/upload" element={<ProtectedRoute><FileUpload /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}
