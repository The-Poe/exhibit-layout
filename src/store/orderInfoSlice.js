import { createSlice } from "@reduxjs/toolkit";
const initialOrderInfoState = { orderId: "", items: [] };

const orderInfoSlice = createSlice({
  name: "orderInfoSlices(NameforBrowserInspect)",
  initialState: initialOrderInfoState,
  reducers: {
    replaceOrderId(state, action) {
      state.orderId = action.payload.orderId;
    },
    replaceOrderItems(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const orderInfoActions = orderInfoSlice.actions;

export default orderInfoSlice;
