import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"
import { useDispatch } from "react-redux";
import {addtoCart} from "./Redux/Slicing"
import "./laptop.css"

const Laptops = () => {
  const [data, setData] = useState([]);
  const[slicedata,setSliceData]=useState(8)
  const dispatch = useDispatch();
  // const slice=data.slice(0,slicedata);
  const handleLoadMore=()=>{
    setSliceData(slicedata+4)
  }



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
      <div className="laptop-maincontainer">
        <div className="laptop-sidediv">
        <NavLink className="navlink-names splnames" to="/mobile/iphone">Iphone</NavLink>
        <NavLink className="navlink-names splnames" to="/mobile/mimobiles">Mi mobiles</NavLink>
       <NavLink className="navlink-names splnames" to="/laptop/lenovolaptops">Lenovo</NavLink>
      <NavLink className="navlink-names splnames" to="/laptop/hplaptops">Hp</NavLink>
      <NavLink className="navlink-names splnames" to="/fashion/mensfashion">Mens</NavLink>
      <NavLink className="navlink-names splnames" to="/fashion/womensfashion">Womens</NavLink>
        </div>
        <div className="laptop-conatiner">
          {data.filter((item)=>item.category==="laptop").slice(0,slicedata).map((item, index) => {
               const {
                id = item.id,
                image = item.image,
                price = (item.price),
                model = item.model,
                quantity = (item.quantity),
              } = item;
              console.log(item.quantity)
            return (
            
              <div key={index} className="laptop-child_conatinercard">
                  <NavLink to={`/detailpage/${item.id}`} className="specialdivnavlink">
                <div>
                <p>{item.model}</p>
               <div className="laptop-child_containercard-image">
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
                  <button className="laptop-commonbutton" onClick={() =>
                      dispatch(addtoCart({ id, image, price, quantity, model }))
                    }>Buy Now</button>
              </div>
              
            );
          })}
        </div>
    
      </div>
      <button onClick={handleLoadMore} className="laptop-loadmore">Load More</button>
    </>
  );
};

export default Laptops;