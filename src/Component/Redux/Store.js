import { configureStore } from "@reduxjs/toolkit";
import Addtocart from "../Redux/Slicing";

export default configureStore({
  reducer: {
    Cart: Addtocart,
  },
});