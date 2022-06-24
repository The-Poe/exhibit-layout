import { createSlice } from "@reduxjs/toolkit";

/*Toggle show Auth UI*/
const initialAuthUserState = { authUser: "null" };
const authUserSlice = createSlice({
  name: "authUserSlices(NameforBrowserInspect)",
  initialState: initialAuthUserState,
  reducers: {
    logInAuthUser(state, action) {
      state.authUser = action.payload;
    },
    logOutAuthUser(state, action) {
      state.authUser = "null";
    },
  },
});
export const authUserActions = authUserSlice.actions;

export default authUserSlice;
