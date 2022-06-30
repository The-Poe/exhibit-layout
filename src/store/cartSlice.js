import { createAction, createSlice } from "@reduxjs/toolkit";
import { asyncScheduler } from "rxjs";
import { throttleTime, tap } from "rxjs/operators";
import { ofType } from "redux-observable";
import { firestore } from "firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const initialCartState = { items: [], totalQuantity: 0, sumPrice: 0 };
/**
 *  Actions that need to be observed by Epic, otherwise use default action created by createSlice.
 */
export const pushToFirebaseCart = createAction("PUSH_TO_FIREBASE_CART");

/**
 *  Epic (need to be combined in combinedReducerEpic.js)
 */
export const pushToCartEpic = (action$, state$) =>
  action$.pipe(
    ofType(pushToFirebaseCart),
    throttleTime(1000, asyncScheduler, { leading: false, trailing: true }),
    tap((value) => {
      //指名到文件"集合(collection)/文件(doc)"(偶數配對)才可以使用Doc path
      const firebaseAccessCurrentUserCart = doc(
        firestore,
        `carts/${value.payload.authUserEmail}`
      );
      /**add/update data **/
      const setDocToFirebase = async () => {
        setDoc(firebaseAccessCurrentUserCart, value.payload.cart) //覆蓋
          .then(() => console.log("the setDoc() promise has fullfilled! ")) //won't be called when offline
          .catch((err) => console.log("the setDoc() got error:", err));
      };
      setDocToFirebase();
    })
  );

/**
 *  Slice (reducers need to be combined in combinedReducerEpic.js)
 */
const cartSlice = createSlice({
  name: "cartSlice(NameforBrowserInspect)",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.sumPrice = action.payload.sumPrice;
    },
    addItemToCart(state, action) {
      const newItem = action.payload.product;
      const newItemQuantity = action.payload.quantity;
      const newItemSumPrice = newItem.price * newItemQuantity;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          startDate: newItem.startDate,
          startMonth: newItem.startMonth,
          endDate: newItem.endDate,
          endMonth: newItem.endMonth,
          quantity: newItemQuantity,
          totalPrice: newItemSumPrice,
          title: newItem.title,
          picUrl: newItem.picUrl,
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItemQuantity;
        existingItem.totalPrice = existingItem.totalPrice + newItemSumPrice;
      }
      state.totalQuantity = state.totalQuantity + newItemQuantity;
      state.sumPrice = state.sumPrice + newItemSumPrice;
    },
    removeOneItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalQuantity--;
      state.sumPrice = state.sumPrice - existingItem.price;
    },
    deleteItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.sumPrice = state.sumPrice - existingItem.totalPrice;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
