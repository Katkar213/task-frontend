
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios"
import "../Web-css/Detailpage.css"

export default function Detailpage(){

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
                    // <div className="maincontainer" key={index}>
                        
                    //     <div className="leftsideimage">
                           
                    //         <img src={item.image} alt="notfound"/>
                    //     </div>
                    //     <div className="rightsidediv"> <h1>Description:  {item.name}</h1>
                            
                    //         <h2>color:{item.color} Brand:{item.brand}</h2>

                    //     </div>
                    //     <div>
                    //         {/* name */}
                            
                    //     </div>
                    // </div>
                    <div className="container" key={index}>
                    <div  className="leftsidediv">
                      <img src={item.image} alt="Not Found" />
                    </div>
                    <div className="rightsidediv">
                        <div className="rightsideinnerdiv">
                      <h2 className="modelName">{item.model}</h2>
                      <hr></hr>
                      <h2 className="Price-of-All">Deals Of The Day:  {item.price}</h2>
      
                      <h2>Specifications:</h2>
                      <ul>
                        <li>
                          <p className="detailpada-p">Brand:  {item.category}</p>
                        </li>
                        <li>
                          <p className="detailpada-p">Model:{item.model}</p>
                        </li>
                        <li>
                          <p className="detailpada-p">Display:{item.specs.display}</p>
                        </li>
                        <li>
                          <p className="detailpada-p">Battery-Life:{item.specs.battery}</p>
                        </li>
                        <li>
                          <p className="detailpada-p">Operating system:{item.specs.operatingSystem}</p>
                        </li>
                      
                        <li>
                          <p className="detailpada-p">Processor:{item.specs.processor}</p>
                        </li>
                      </ul>
                      
                      </div>
                      <button className="buttonforAll">
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