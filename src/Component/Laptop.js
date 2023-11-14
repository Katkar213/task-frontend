import React, { useState, useEffect } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom"
import "./laptop.css"

const Laptops = () => {
  const [data, setData] = useState([]);
  const[slicedata,setSliceData]=useState(8)
  // const slice=data.slice(0,slicedata);
  const handleLoadMore=()=>{
    setSliceData(slicedata+4)
  }



  useEffect(() => {
    axios
      .get("http://localhost:4001/api/finddata")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  return (
    <>
      <div className="laptop-maincontainer">
        <div className="laptop-sidediv">
        <NavLink className="navlink-names" to="/mobile/iphone">Iphone</NavLink>
        <NavLink className="navlink-names" to="/mobile/mimobiles">Mi mobiles</NavLink>
       <NavLink className="navlink-names" to="/laptop/lenovolaptops">Lenovo</NavLink>
      <NavLink className="navlink-names" to="/laptop/hplaptops">Hp</NavLink>
      <NavLink className="navlink-names" to="/fashion/mensfashion">Mens</NavLink>
      <NavLink className="navlink-names" to="/fashion/womensfashion">Womens</NavLink>
        </div>
        <div className="laptop-conatiner">
          {data.filter((item)=>item.category==="laptop").slice(0,slicedata).map((item, index) => {
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
                  <button className="laptop-commonbutton">Buy Now</button>
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