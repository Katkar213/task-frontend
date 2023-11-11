import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"
import "./Mobile2.css"

const Iphone = () => {
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
      <div className="mobile-maincontainer">
        <div className="mobile-sidediv">
        <NavLink className="navlink-names" to="/mobile/iphone">Iphone</NavLink>
        <NavLink className="navlink-names" to="/mobile/mimobiles">Mi mobiles</NavLink>
       <NavLink className="navlink-names" to="/laptop/lenovolaptops">Lenovo</NavLink>
      <NavLink className="navlink-names" to="/laptop/hplaptops">Hp</NavLink>
      <NavLink className="navlink-names" to="/fashion/mensfashion">Mens</NavLink>
      <NavLink className="navlink-names" to="/fashion/womensfashion">Womens</NavLink>
        </div>
        <div className="mobile-conatiner">
          {data.filter((item)=>item.category==="iphone").map((item, index) => {
            return (
              <NavLink to={`/detailpage/${item.id}`} className="specialdivnavlink">
              <div key={index} className="mobile-child_conatinercard">
               <p>{item.model}</p>
               <div className="mobile-child_containercard-image">
               <img
                  src={item.image}
                  alt="Not Found"
                />
               </div>
              
                <p>Price:{item.price}</p>
                <h4>
                  {item.specs.RAM} {item.specs.ROM}<br></br>
                  {item.display}</h4>
                  <button className="mobile-commonbutton">Buy Now</button>
              </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Iphone;