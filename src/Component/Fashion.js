import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"
import "./Fashion.css"

const Fashion = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/api/global")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  return (
    <>
      <div className="fashion-maincontainer">
        <div className="fashion-sidediv">
        <NavLink className="navlink-names" to="/mobile/iphone">Iphone</NavLink>
        <NavLink className="navlink-names" to="/mobile/mimobiles">Mi mobiles</NavLink>
       <NavLink className="navlink-names" to="/laptop/lenovolaptops">Lenovo</NavLink>
      <NavLink className="navlink-names" to="/laptop/hplaptops">Hp</NavLink>
      <NavLink className="navlink-names" to="/fashion/mensfashion">Mens</NavLink>
      <NavLink className="navlink-names" to="/fashion/womensfashion">Womens</NavLink>
        </div>
        <div className="fashion-conatiner">
          {data.filter((item)=>item.category==="fashion").map((item, index) => {
            return (
              <NavLink to={`/detailpage/${item.id}`} className="specialdivnavlink">
              <div key={index} className="fashion-child_conatinercard">
               <p>{item.product}</p>
               <div className="fashion-child_containercard-image">
               <img
                  src={item.image}
                  alt="Not Found"
                />
               </div>
              
                <p>Price:{item.price}</p>
                <h4>
                  {item.specs.size} {item.specs.color}<br></br>
                  {item.display}</h4>
                  <button className="fashion-commonbutton">Buy Now</button>
              </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Fashion;