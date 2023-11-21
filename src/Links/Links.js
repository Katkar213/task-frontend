import {NavLink,Routes,Route,useNavigate} from "react-router-dom"
import Home from "../Component/Home"
import { useState,useEffect } from "react"
import Mobiles from "../Component/Mobiles"
import Electronics from "../Component/Electronics"
import Fashion from "../Component/Fashion"
import Grocery from "../Component/Grocery"
import Accessories from "../Component/Accessories"
import Laptops from "../Component/Laptop"
import Iphone from "../Component/subroutes/Iphone"
import Mi from "../Component/subroutes/Mi"
import LenovoLaptop from "../Component/subroutes/LenovoLaptop"
import HpLaptop from "../Component/subroutes/HpLaptop"
import MensFashion from "../Component/subroutes/MensFashion"
import WomenFashion from "../Component/subroutes/WomenFashion"
import Detailpage from "../Component/Detailpage"
import Single from "../Component/single"
import Grocerysingle from "../Component/Grocerysingle"
import Cart from "../Component/Cart"
import Login from "../Component/UserCredentials/Login"
import Register from "../Component/UserCredentials/Register"
import {useSelector} from "react-redux"
import axios from "axios"
import SearchProduct from "../Component/SearchProduct"
import Checkout from "../Component/Checkout"
import Success from "../Component/Success"


export default function Links(){
  const [change,setChange]=useState(false);
  
  const[val,setval]=useState({value:"",btn:""})
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
const token=localStorage.getItem("token")
const userName=localStorage.getItem("name")
const Nav=useNavigate();




useEffect(()=>{
  if(token){
    
    setval({
      value:userName,
      btn:"LogOut"
    });
}
else{
  setval({
    value:"Profile",
    btn:"SignIn"
  })
}
},[token,Nav,userName])


const HandleSearch = async (e) => {
  const inputValue = e.target.value;
  setQuery(inputValue);

  try {
    console.log("trying..")
    const response=await axios.get(`http://localhost:4001/api/search?model=${inputValue}`);
    setResults(response.data);
    console.log(results)
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};



  const handlelogout= ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    Nav("/")
  }
  const countItem = useSelector((state) => state.Cart.cart);

    return(
        <div>
         
            <div className="navbar">

                <div className="title">
                    <h1>Title</h1>
                </div>

  {/* navlinks............... */}
  
                <ul className={(change)? "navlink navlink-web":"navlink"}>

                
                    {/* home.................. */}
           <li> <NavLink className="navlink-names" to="/" onClick={()=>setChange(!change)}>Home</NavLink></li>

           {/* acessories............ */}
           <li><NavLink  className="navlink-names" to="/accessories" onClick={()=>setChange(!change)}>Accessories</NavLink></li>

           {/* electronics........... */}

           <li><NavLink  className="navlink-names" to="/electronics" onClick={()=>setChange(!change)}>Electronics</NavLink>
           <ul class='submenu'>
                <li><NavLink className="navlink-names" to="/laptop">Laptops</NavLink></li>
                <li><NavLink className="navlink-names" to="/mobile">Mobiles</NavLink></li>
                <li><NavLink className="navlink-names" to="/mobile/iphone">Iphone</NavLink></li>
           
              </ul></li>

                {/* fashion........... */}
           <li><NavLink  className="navlink-names" to="/fashion" onClick={()=>setChange(!change)}>Fashion</NavLink>
           <ul className='submenu'>
                <li><NavLink className="navlink-names" to="/fashion/mensfashion">Mens</NavLink>
                </li>
                <li><NavLink className="navlink-names" to="/fashion/womensfashion">Womens</NavLink></li>
               
           
              </ul></li>

                {/* grocery........... */}
           <li><NavLink  className="navlink-names" to="/grocery" onClick={()=>setChange(!change)}>Grocery</NavLink></li>

           {/* mobiles........... */}
           <li> <NavLink  className="navlink-names" to="/mobile" onClick={()=>setChange(!change)}>Mobiles</NavLink>
           <ul class='submenu'>
                <li><NavLink className="navlink-names" to="/mobile/mimobiles">Mi mobiles</NavLink></li>
                <li><NavLink className="navlink-names" to="/mobile/iphone">Iphone</NavLink></li>
           
              </ul></li>

               {/* electronics........... */}
           <li><NavLink className="navlink-names" to="/laptop" onClick={()=>setChange(!change)}>Laptop</NavLink>
            
              <ul class='submenu'>
                <li><NavLink className="navlink-names" to="/laptop/lenovolaptops">Lenovo</NavLink></li>

                <li><NavLink className="navlink-names" to="/laptop/hplaptops">Hp</NavLink></li>
              </ul>


              </li> 
              <div className="primary">
              <li><NavLink to="/cart" onClick={()=>setChange(!change)}><i className="fa-solid fa-cart-shopping"></i>
                </NavLink><span>{countItem.length}</span></li>
              </div>

              <div  className="primary">
              <li><NavLink  ><i className="fa-solid fa-user"></i></NavLink>
           <ul class='submenunew'>
                <li onClick={()=>setChange(!change)}><span>{val.value}</span></li>
                <li onClick={()=>setChange(!change)}> {
                    val.btn === "LogOut" ? <span onClick={handlelogout}>{val.btn}</span> :  <span><NavLink to='/login'>{val.btn}</NavLink></span>
                  }
                  </li>
              </ul></li> 
              </div>

             
            </ul>

            <div className="searchbar-logo">
         
                <div className="whole-searchbar">
                  <input type="text" placeholder="Search here..." className="searchbar" value={query}  onChange={HandleSearch} /> 
                <NavLink to="/searchProduct" state={[results]}>
                <button className="logosearchbar"><i className="fa-solid fa-magnifying-glass"></i></button>  
                </NavLink>
                
                 </div>
               
                <div className="logo">
             
                <ul className="navlink ">
                <NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i>
                </NavLink><span>{countItem.length}</span></ul>

                <ul className="navlink ">
           <li><NavLink  ><i className="fa-solid fa-user"></i></NavLink>
           <ul class='submenunew'>
                <li><span>{val.value}</span></li>
                <li> {
                    val.btn === "LogOut" ? <span onClick={handlelogout}>{val.btn}</span> :  <span><NavLink to='/login'>{val.btn}</NavLink></span>
                  }
                  </li>
              </ul></li>  </ul>
             
               {/* <li><NavLink className="navlink-names" to="/laptop" onClick={()=>setChange(!change)}>Laptop</NavLink>
            
            <ul className='submenu'>
              <li><NavLink className="navlink-names" to="/laptop/lenovolaptops">Lenovo</NavLink></li>

              <li><NavLink className="navlink-names" to="/laptop/hplaptops">Hp</NavLink></li>
            </ul>
            </li>  */}
          


                {/* <div><i className="fa-solid fa-user"></i>
                <div >
                  <span>{val.value}</span>
                  {
                    val.btn === "LogOut" ? <span onClick={handlelogout}>{val.btn}</span> :  <span><NavLink to='/login'>{val.btn}</NavLink></span>
                  }
                </div>
            </div> */}
                
                 </div> 
                
                {/* hamberger */}
                <div className="hamberger" onClick={()=>setChange(!change)}>
                <i class="fa-solid fa-bars"></i>
                </div>
                
            </div>
            </div>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/accessories" element={<Accessories/>}/>

                <Route path="/electronics" element={<Electronics/>}/>
                <Route path="/fashion" element={<Fashion/>}/>
                <Route path="/grocery" element={<Grocery/>}/>
                <Route path="/laptop" element={<Laptops/>}/>
                <Route path="/mobile" element={<Mobiles/>}/>
                <Route path="/mobile/iphone" element={<Iphone/>}/>
                <Route path="/mobile/mimobiles" element={<Mi/>}/>
                <Route path="/laptop/lenovolaptops" element={<LenovoLaptop/>}/>
                <Route path="/laptop/hplaptops" element={<HpLaptop/>}/>
                <Route path="/fashion/mensfashion" element={<MensFashion/>}/>
                <Route path="/fashion/womensfashion" element={<WomenFashion/>}/>
               <Route path="/detailpage/:id" element={<Detailpage/>}/>
               <Route path="/single/:id" element={<Single/>}/>
               <Route path="/grocerysingle/:id" element={<Grocerysingle/>}/>
               <Route path="/cart" element={<Cart/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/register" element={<Register/>}/>
               <Route path="/login" element={<Login/>}/>
           <Route path="/searchProduct" element={<SearchProduct/>}></Route>
           <Route path="/checkout" element={<Checkout/>}></Route>
           <Route path="/success" element={<Success/>}></Route>
                
            </Routes>
            
            <footer>
            <div className="div4">  
  <h2>About Us</h2>
Welcome to [Title]! We are passionate about delivering high-quality products and exceptional service to our valued customers. At [Title], we strive to bring you the latest trends and innovations.

            </div >
            <div className="footerlinks">
              <div className="div1">
            <NavLink className="navlink-names" to="/">Home</NavLink>
            <NavLink  className="navlink-names" to="/accessories">Accessories</NavLink>
            <NavLink  className="navlink-names" to="/electronics">Electronics</NavLink>
            
           
            </div>
            <div className="div2">
            <NavLink  className="navlink-names" to="/fashion">Fashion</NavLink>
            <NavLink  className="navlink-names" to="/mobile">Mobiles</NavLink>
            <NavLink className="navlink-names" to="/laptop">Laptops</NavLink>
            </div>
            </div>
            
            <div className="div3">
           <NavLink>About Us</NavLink>
           <NavLink>FAQ</NavLink>
           <NavLink>Customer Care</NavLink>
            </div>
           
            <div className="div4">
              <h2>Share Us On:</h2>
              <div className="footericons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-whatsapp"></i>
              </div>
              <h2><i class="fa-regular fa-copyright"></i> 2023</h2>
              
             
            </div>
           
            </footer>
          

        </div>
    )
}

