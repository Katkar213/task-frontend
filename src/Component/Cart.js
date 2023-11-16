import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Component/Redux/Slicing";
import "./Cart.css"

const Cart = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.Cart.cart);

  const total = data.reduce((cur, item) => {
    return (cur) +item.price *(item.quantity);
  }, 0);

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
          <h4>Price</h4>
          <h4>Quantity</h4>
        </div>

        <div>
          {data &&
            data.map((item, index) => {

              return (
                <div className="content-cart" key={index}>
                  <img src={item.image} alt="Loading..." />
                  <div className="cart-subcontent">
                    <h2>{item.model}</h2>
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
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;