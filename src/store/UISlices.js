import { createSlice } from "@reduxjs/toolkit";

/*Toggle show Auth UI*/
const initialUIAuthState = { authIsShow: false };
export const UIAuthSlice = createSlice({
  name: "UIAuthSlice(NameforBrowserInspect)",
  initialState: initialUIAuthState,
  reducers: {
    toggleShowAuth(state) {
      state.authIsShow = !state.authIsShow;
    },
  },
});
export const UIAuthActions = UIAuthSlice.actions;

/*Toggle show cart UI*/
const initialUICartState = { cartIsShow: false };
export const UICartSlice = createSlice({
  name: "cartSlice(NameforBrowserInspect)",
  initialState: initialUICartState,
  reducers: {
    toggleShowCart(state) {
      state.cartIsShow = !state.cartIsShow;
    },
  },
});

export const UICartActions = UICartSlice.actions;
