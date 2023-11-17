
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios"
import {addtoCart} from "./Redux/Slicing"
import { useDispatch } from "react-redux";
import "../Web-css/Detailpage.css"

export default function Detailpage(){

    const {id}=useParams();
   
    const [data,setData]=useState([]);
    const dispatch = useDispatch();
 

    useEffect(() => {
        axios
          .get("https://ecommerce-backend-new.onrender.com/api/finddata")
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => console.log(err, "error"));
      }, []);

    return(
        <div>
            {
                data.filter((item)=>item.id===id).map((item,index)=>{
                  const {
                    id = item.id,
                    image = item.image,
                    price = (item.price),
                    model = item.model,
                    quantity = (item.quantity),
                  } = item;
                  return(
                
                    <div className="detail-container" key={index}>
                    <div  className="detail-leftsidediv">
                      <img src={item.image} alt="Not Found" />
                    </div>
                    <div className="detail-rightsidediv">
                        <div className="detail-rightsideinnerdiv">
                      <h2 className="detail-modelName">{item.model}</h2>
                      <hr></hr>
                      <h2 className="detail-Price-of-All">Deals Of The Day:  {item.price}</h2>
      
                      <h2>Specifications:</h2>
                      <ul>
                        <li>
                          <p className="detail-detailpada-p">Brand:  {item.category}</p>
                        </li>
                        <li>
                          <p className="detail-detailpada-p">Model:{item.model}</p>
                        </li>
                        <li>
                          <p className="detail-detailpada-p">Display:{item.display}</p>
                        </li>
                        <li>
                          <p className="detail-detailpada-p">Battery-Life:{item.battery}</p>
                        </li>
                        <li>
                          <p className="detail-detailpada-p">Operating system:{item.operatingSystem}</p>
                        </li>
                      
                        <li>
                          <p className="detail-detailpada-p">Processor:{item.processor}</p>
                        </li>
                      </ul>
                      
                      </div>
                      <button className="detail-buttonforAll" onClick={() =>
                      dispatch(addtoCart({ id, image, price, quantity, model }))
                    }>
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