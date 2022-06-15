import { createSlice } from "@reduxjs/toolkit";

/*Toggle show Auth UI*/
const initialAuthUserState = { authUser: null };
const AuthUserSlice = createSlice({
  name: "AuthUserSlices(NameforBrowserInspect)",
  initialState: initialAuthUserState,
  reducers: {
    logInAuthUser(state, action) {
      state.authUser = action.payload;
    },
    logOutAuthUser(state, action) {
      state.authUser = null;
    },
  },
});
export const AuthUserActions = AuthUserSlice.actions;

export default AuthUserSlice;
