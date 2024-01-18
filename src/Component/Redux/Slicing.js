import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const AddtoCart = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {  
      const token=localStorage.getItem("token")
      if(token){
       console.log(action.payload)
 axios.post("http://localhost:4001/api/addcart",action.payload).then((res)=>{
console.log(res.data)
})
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        
        existingItem.quantity += 1;
        existingItem.total =parseInt(existingItem.price) * existingItem.quantity;
        alert("Product add successfully..")
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
        console.log(state.cart)
      }
    }
    else{
      alert("login first....")
    }
    },
    RemoveItem: (state, action) => {
      alert("Do You want to remove these item ?")
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    IncreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        console.log(item)
        item.quantity += 1;
        item.total = item.price * item.quantity;
      }
    },
    DecreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.total = item.price * item.quantity;

      }
    },
  },
});

export default AddtoCart.reducer;
export const { addtoCart, RemoveItem, IncreaseQuantity, DecreaseQuantity } =
  AddtoCart.actions;