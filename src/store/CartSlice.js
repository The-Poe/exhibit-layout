import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { items: [], totalQuantity: 0, sumPrice: 0 };

const cartSlice = createSlice({
  name: "cartSlices(NameforBrowserInspect)",
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
