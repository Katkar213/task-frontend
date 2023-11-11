
import Crousal from "./Crousal"
import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"
import "../Web-css/home.css"

const Electronics = () => {
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
    <div>
        <Crousal></Crousal>
      <div className="home-maincontainer">
       
        <div className="home-conatiner">
          {data.filter((item)=>item.category==="home").map((item, index) => {
            return (
              <NavLink to={`/detailpage/${item.id}`} className="specialdivnavlink">
              <div key={index} className="home-child_conatinercard">
               <p>{item.model}</p>
               <p>{item.product}</p>
               <div className="home-child_containercard-image">
               <img
                  src={item.image}
                  alt="Not Found"
                />
               </div>
              
                <p>Price:{item.price}</p>
                <h4>
                  {item.specs.RAM} {item.specs.ROM}<br></br>
                  {item.display}</h4>

                  <button className="home-commonbutton">Buy Now</button>
              </div>
              </NavLink>
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
        <div ><p className="child1description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
        </p>
        </div>
        </div>

       {/* child 2 */}
        <div className="child2 child">
        <h3>Easy Replacement</h3>
        <i className="fa-solid fa-recycle"></i>
        <div ><p className="child2description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
        </p>
        </div>
        </div>


        <div className="child3 child">
        <h3>Easy Replacement</h3>
        <i className="fa-solid fa-headphones-simple"></i>
        <div ><p className="child3description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
        </p>
        </div>
        </div>
        
       </div>






    </div>
  );
};

export default Electronics;