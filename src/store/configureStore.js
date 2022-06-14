import { configureStore } from "@reduxjs/toolkit";
import { UIAuthSlice, UICartSlice } from "./UISlices";
import { AuthUserSlice } from "./AuthUserSlices";
const store = configureStore({
  reducer: {
    UICartSlice: UICartSlice.reducer,
    UIAuthSlice: UIAuthSlice.reducer,
    AuthUserSlice: AuthUserSlice.reducer,
  },
});

export default store;
