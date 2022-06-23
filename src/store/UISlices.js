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
