import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { catchError } from "rxjs/operators";

import { UIAuthSlice } from "./UISlices";
import authUserSlice from "./authUserSlice";
import cartSlice, { pushToCartEpic } from "./cartSlice";
import productsSlice from "./productsSlice";
import orderInfoSlice from "./orderInfoSlice";

export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(pushToCartEpic)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export const rootReducer = combineReducers({
  UIAuthReducer: UIAuthSlice.reducer,
  authUserReducer: authUserSlice.reducer,
  cartReducer: cartSlice.reducer,
  productsReducer: productsSlice.reducer,
  orderInfoReducer: orderInfoSlice.reducer,
});
