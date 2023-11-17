import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"
import {addtoCart} from "../Redux/Slicing"
import { useDispatch } from "react-redux";
import "../Fashion.css"

const WomenFashion = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://ecommerce-backend-new.onrender.com/api/finddata")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  return (
    <>
      <div className="fashion-maincontainer">
        <div className="fashion-sidediv">
        <NavLink className="navlink-names splnames" to="/mobile/iphone">Iphone</NavLink>
        <NavLink className="navlink-names splnames" to="/mobile/mimobiles">Mi mobiles</NavLink>
       <NavLink className="navlink-names splnames" to="/laptop/lenovolaptops">Lenovo</NavLink>
      <NavLink className="navlink-names splnames" to="/laptop/hplaptops">Hp</NavLink>
      <NavLink className="navlink-names splnames" to="/fashion/mensfashion">Mens</NavLink>
      <NavLink className="navlink-names splnames" to="/fashion/womensfashion">Womens</NavLink>
        </div>
        <div className="fashion-conatiner">
          {data.filter((item)=>item.category==="women").map((item, index) => {
            const {
              id = item.id,
              image = item.image,
              price = (item.price),
              model = item.model,
              quantity = (item.quantity),
            } = item;
          return (
             
              <div key={index} className="fashion-child_conatinercard">
                 <NavLink to={`/detailpage/${item.id}`} className="specialdivnavlink">
                <div>
                <p>{item.model}</p>
               <div className="fashion-child_containercard-image">
               <img
                  src={item.image}
                  alt="Not Found"
                />
               </div>
              
                <p>Price:{item.price}</p>
                <h4>
                  {item.size} {item.color}<br></br>
                  {item.display}</h4>
                </div>
                </NavLink>
                  <button className="fashion-commonbutton" onClick={() =>
                      dispatch(addtoCart({ id, image, price, quantity, model }))
                    }>Buy Now</button>
              </div>
            
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WomenFashion;