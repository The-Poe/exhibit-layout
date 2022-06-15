import { configureStore } from "@reduxjs/toolkit";
import { UIAuthSlice, UICartSlice } from "./UISlices";
import AuthUserSlice from "./AuthUserSlice";
import CartSlice from "./CartSlice";
import productsSlice from "./ProductsSlice";
const store = configureStore({
  reducer: {
    UIcartReducer: UICartSlice.reducer,
    UIAuthReducer: UIAuthSlice.reducer,
    authUserReducer: AuthUserSlice.reducer,
    cartReducer: CartSlice.reducer,
    productsReducer: productsSlice.reducer,
  },
});

export default store;
