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


export default function Links(){
  const [change,setChange]=useState(false);
  
  const[val,setval]=useState({value:"",btn:""})
const token=localStorage.getItem("token")
const userName=localStorage.getItem("name")
const Nav=useNavigate();


  useEffect(()=>{
    if(token){
      axios.get('https://ecommerce-backend-rzz2.onrender.com/api/',{headers:{"authorization":`Bearer ${token}`}})
      .then((res)=>{
        setval({
          value:userName,
          btn:"LogOut"
        });
        console.log(res.data);
      })
      .catch((err)=>console.log(err))
    }
    else{
      setval({
        value:"Profile",
        btn:"SignIn"
      })
    }
  },[token,Nav,userName])


  const handlelogout= ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
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
        
            </ul>

            <div className="searchbar-logo">
         
                <div className="whole-searchbar"><input type="text" placeholder="Search here..." className="searchbar"/>  <button className="logosearchbar"><i className="fa-solid fa-magnifying-glass"></i></button></div>
               
                <div className="logo">
                <div></div>
                <NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i>
                </NavLink><span>{countItem.length}</span> 
                {/* <NavLink to={"/login"}><i className="fa-solid fa-user"></i></NavLink> */}
                <div><i className="fa-solid fa-user"></i>
                <div >
                  <span>{val.value}</span>
                  {
                    val.btn == "LogOut" ? <span onClick={handlelogout}>{val.btn}</span> :  <span><NavLink to='/login'>{val.btn}</NavLink></span>
                  }
                </div>
            </div>
                
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
                
            </Routes>
            
            <footer>
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
            <div className="div3">
           <NavLink>About Us</NavLink>
           <NavLink>FAQ</NavLink>
           <NavLink>Customer Care</NavLink>
            </div>
            </footer>
          

        </div>
    )
}

