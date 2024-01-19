
import Crousal from "./Crousal"
import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"
import {addtoCart} from "./Redux/Slicing"
import { useDispatch } from "react-redux";
import "../Web-css/home.css"

const Electronics = () => {
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
    <div>
        <Crousal></Crousal>
      <div className="home-maincontainer">
       
        <div className="home-conatiner">
          {data.filter((item)=>item.category==="home").map((item, index) => {
             const {
              id = item.id,
              image = item.image,
              price = (item.price),
              model = item.model,
              quantity = (item.quantity),
            } = item;
           return (
              <div>
              
              <div key={index} className="home-child_conatinercard">
              <NavLink to={`/detailpage/${item.id}`} className="specialdivnavlink">
                <div>
               <p>{item.model}</p>
               {/* <p>{item.product}</p> */}
               <div className="home-child_containercard-image">
               <img
                  src={item.image}
                  alt="Not Found"
                />
               </div>
              
                <p>Price:{item.price}</p>
                <h4>
                  {item.RAM} {item.ROM}<br></br></h4>
                  </div>
                  </NavLink> 
                  <button className="home-commonbutton" onClick={() =>
                      dispatch(addtoCart({ id, image, price, quantity, model }))
                    }>Buy Now</button>
              </div>
            
              
              </div>
            
            );
          })}
        </div>
      </div>

               {/* 3 horizontal divs.... */}

       <div className="parentcontainer">
        {/* child 1 */}

        <div className="child1 child">
          <h3>Free Delivery</h3>
        <i className="fa-solid fa-truck "></i>
        <div ><p className="child1description childdescription">Welcome to our online store, where shopping just got even more rewarding! We're excited to introduce our exclusive Free Shipping offer, designed to make your shopping experience truly delightful.
        </p>
        </div>
        </div>

       {/* child 2 */}
        <div className="child2 child">
        <h3>Easy Replacement</h3>
        <i className="fa-solid fa-recycle"></i>
        <div ><p className="child2description childdescription">At [Title], your satisfaction is our top priority. We understand that sometimes things may not go as planned, and that's why we're proud to offer a 100% Refund Guarantee. With this assurance.
        </p>
        </div>
        </div>


        <div className="child3 child">
        <h3>Easy Replacement</h3>
        <i className="fa-solid fa-headphones-simple"></i>
        <div ><p className="child3description childdescription">At [Title], your satisfaction is our priority, and that's why we're thrilled to offer 24/7 support. We understand that your needs don't follow a schedule, and neither do we. With our always-on support, you can shop, inquire, and resolve issues whenever it's convenient for you.
        </p>
        </div>
        </div>
        
       </div>






    </div>
  );
};

export default Electronics;