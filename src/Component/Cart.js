import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Component/Redux/Slicing";
import "./Cart.css"
import {loadStripe} from "@stripe/stripe-js"



const Cart = () => {
  
  const dispatch = useDispatch();
  
  const data = useSelector((state) => state.Cart.cart);

  const total = data.reduce((cur, item) => {
    return (cur) +item.price *(item.quantity);
  }, 0);
const makePayment=async ()=>{
  
    const stripe =await loadStripe("pk_test_51OFIp6SASTZsWUYjTKRxcD4xTAidUAj7os1f9uqt5pfPPcWFOaV5pmYsZVUUbpkehNtOXKX8vwRwVLdmUZfTWMfM00o8bJqo5J")
  
    const body ={
      products:data
    }
    console.log(body)
    const headers={
      "Content-Type":"application/json"
    }
    const response = await fetch("https://ecommerce-backend-new.onrender.com/checkout",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
    })
    const session= await response.json();
  
    const result =stripe.redirectToCheckout({
      sessionId:session.id
    })
    if(result.error){
      console.log(result.error)
    
   }
}


  const handleIncreaseQuantity = (id) => {
    dispatch(IncreaseQuantity({ id }));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(DecreaseQuantity({ id }));
  };

  return (
    <div>
      <h2 className="headcart">Cart</h2>

      <div className="cart-content">
        <div className="headOfcart">
          <h4>Product</h4>
          <h4>Title</h4>
          <h4>Price and Quantity</h4>
        </div>

        <div>
          {data &&
            data.map((item, index) => {

              return (
                <div className="content-cart" key={index}>
                  <img src={item.image} alt="Loading..." />
                  <div className="cart-subcontent">
                    <h2>{item.model} {item.product}</h2>
                    <button
                      className="remove-cart"
                      onClick={() => dispatch(RemoveItem({ id: item.id }))}
                    >
                      Remove item
                    </button>
                  </div>
                  <h2 className="cartprice">
                 
                    {"₹ " + item.price *item.quantity}
                  </h2>
                  <div>
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="total">
          <h2>Total : </h2>
          <h1 style={{ color: "black", fontSize:"28px" }}>{total}</h1>
        </div>

        <div className="buy">
        {/* <NavLink to="/success" state={data}> */}
          <button onClick={makePayment}>Buy Now</button>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;