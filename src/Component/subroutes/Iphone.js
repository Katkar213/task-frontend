import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"
import "./Mobile2.css"
import {addtoCart} from "../Redux/Slicing"
import { useDispatch } from "react-redux";

const Iphone = () => {
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
      <div className="mobile-maincontainer">
        <div className="mobile-sidediv">
        <NavLink className="navlink-names splnames" to="/mobile/iphone">Iphone</NavLink>
        <NavLink className="navlink-names splnames" to="/mobile/mimobiles">Mi mobiles</NavLink>
       <NavLink className="navlink-names splnames" to="/laptop/lenovolaptops">Lenovo</NavLink>
      <NavLink className="navlink-names splnames" to="/laptop/hplaptops">Hp</NavLink>
      <NavLink className="navlink-names splnames" to="/fashion/mensfashion">Mens</NavLink>
      <NavLink className="navlink-names splnames" to="/fashion/womensfashion">Womens</NavLink>
        </div>
        <div className="mobile-conatiner">
          {data.filter((item)=>item.category==="iphone").map((item, index) => {
           const {
            id = item.id,
            image = item.image,
            price = (item.price),
            model = item.model,
            quantity = (item.quantity),
          } = item;
           return (
             
              <div key={index} className="mobile-child_conatinercard">
                      <NavLink to={`/detailpage/${item.id}`} className="specialdivnavlink">
                <div>
               <p>{item.model}</p>
               <div className="mobile-child_containercard-image">
               <img
                  src={item.image}
                  alt="Not Found"
                />
               </div>
              
                <p>Price:{item.price}</p>
                <h4>
                  {item.RAM} {item.ROM}<br></br>
                 </h4>
                  </div>
                  </NavLink>
                  <button className="mobile-commonbutton"  onClick={() =>
                      dispatch(addtoCart({ id, image, price, quantity, model }))
                    } >Buy Now</button>
              </div>
           
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Iphone;