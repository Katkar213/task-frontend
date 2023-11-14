
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios"
import "./single.css"

export default function Grocerysingle(){

    const {id}=useParams();
   
    const [data,setData]=useState([]);
 

    useEffect(() => {
        axios
          .get("http://localhost:4001/api/global")
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => console.log(err, "error"));
      }, []);

    return(
        <div>
            {
                data.filter((item)=>item.id===id).map((item,index)=>{
                    return(
                
                    <div className="single-container" key={index}>
                    <div  className="single-leftsidediv">
                      <img src={item.image} alt="Not Found" />
                    </div>
                    <div className="single-rightsidediv">
                        <div className="single-rightsideinnerdiv">
                      <h2 className="single-modelName">{item.name}</h2>
                      <hr></hr>
                      <h2 className="single-Price-of-All">Deals Of The Day:  {item.price}</h2>
      
                      <h2>Specifications:</h2>
                      <ul>
                        <li>
                          <p className="single-detailpada-p">Product Name:{item.product}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Type:{item.type}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Features:{item.features}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">Category:{item.category}</p>
                        </li>
                        <li>
                          <p className="single-detailpada-p">OtherDetails:{item.quantity} {item.weight}{item.brand}</p>
                        </li>

                       
                      </ul>
                      
                      </div>
                      <button className="single-buttonforAll">
                       Buy Now
                      </button>
                     </div>
                      
                     
                    </div>
                 
                    )
                })
            }
        </div>
    )
}