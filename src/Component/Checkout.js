import "./Checkout.css"

import { useLocation, useNavigate} from "react-router-dom";
const Checkout = () => {
      
      const location=useLocation()
  

    const navi= useNavigate()
     

    const total = location.state.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    const handleClick=(e)=>{
        e.preventDefault()  
        navi("/buy")
    }
     
     
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form className="checkout-form ">
        <div className="form-group">
          <label htmlFor="name">Name:<span>*</span></label>
          <input type="text" id="name" name="name" required placeholder="Enter Your Name" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:<span>*</span></label>
          <input type="text" id="address" name="address" required placeholder="Enter Your Address" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:<span>*</span></label>
          <input type="email" id="email" name="email" required  placeholder="Enter Your E-mail" />
        </div>

        <div className="form-group">
          <label htmlFor="card">Credit Card Number:</label>
          <input type="text" id="card" name="card" required placeholder="Card Details" />
        </div>

        <div className="form-group">
          <label htmlFor="expiry">Card Expiry:</label>
          <input type="text" id="expiry" name="expiry" placeholder="MM/YY"/>
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
        </div>

        <button onClick={handleClick} type="submit">Place Order</button>
      </form>
      <div>
         
      {location.state.map((item)=>{

        return (
        <>      
                  
                  <h3>{item.model}</h3>
                  <h2 className="cartprice">
                    {"₹ " + item.price * item.quantity}
                  </h2>
                  
                  </>
                  )
      })}
      <h2>Total :{total}</h2>

     </div>
    </div>
   
  );
};

export default Checkout;