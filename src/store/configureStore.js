import { configureStore } from "@reduxjs/toolkit";
import { UIAuthSlice } from "./UISlices";
import authUserSlice from "./authUserSlice";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";
import orderInfoSlice from "./orderInfoSlice";
const store = configureStore({
  reducer: {
    UIAuthReducer: UIAuthSlice.reducer,
    authUserReducer: authUserSlice.reducer,
    cartReducer: cartSlice.reducer,
    productsReducer: productsSlice.reducer,
    orderInfoReducer: orderInfoSlice.reducer,
  },
});

export default store;