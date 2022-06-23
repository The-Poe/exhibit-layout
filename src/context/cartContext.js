import React, { useContext, useReducer } from "react";

const initialState = {
  items: [],
  totalQuantity: 0,
  sumPrice: 0,
};

const CartContext = React.createContext(initialState);

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "replaceCart":
      return {
        items: action.payload.items,
        totalQuantity: action.payload.totalQuantity,
        sumPrice: action.payload.sumPrice,
      };
    case "addItemToCart": {
      const newItem = action.payload.product;
      const newItemQuantity = action.payload.quantity;
      const newItemSumPrice = newItem.price * newItemQuantity;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        return {
          sumPrice: state.sumPrice + newItemSumPrice,
          totalQuantity: state.totalQuantity + newItemQuantity,
          items: state.items.concat([
            {
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
            },
          ]),
        };
      } else {
        return {
          sumPrice: state.sumPrice + newItemSumPrice,
          totalQuantity: state.totalQuantity + newItemQuantity,
          items: state.items.map((item) => {
            if (item.id === newItem.id) {
              return {
                id: item.id,
                price: item.price,
                startDate: item.startDate,
                startMonth: item.startMonth,
                endDate: item.endDate,
                endMonth: item.endMonth,
                quantity: item.quantity + newItemQuantity,
                totalPrice: item.totalPrice + newItemSumPrice,
                title: item.title,
                picUrl: item.picUrl,
              };
            } else return item;
          }),
        };
      }
    }
    case "removeOneItemFromCart": {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        return {
          sumPrice: state.sumPrice - existingItem.price,
          totalQuantity: state.totalQuantity - 1,
          items: state.items.filter((item) => item.id !== id),
        };
      } else {
        return {
          sumPrice: state.sumPrice - existingItem.price,
          totalQuantity: state.totalQuantity - 1,
          items: state.items.map((item) => {
            if (item.id === id) {
              return {
                id: item.id,
                price: item.price,
                startDate: item.startDate,
                startMonth: item.startMonth,
                endDate: item.endDate,
                endMonth: item.endMonth,
                quantity: item.quantity - 1,
                totalPrice: item.totalPrice - item.price,
                title: item.title,
                picUrl: item.picUrl,
              };
            } else return item;
          }),
        };
      }
    }
    case "deleteItemFromCart": {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      return {
        sumPrice: state.sumPrice - existingItem.totalPrice,
        totalQuantity: state.totalQuantity - existingItem.quantity,
        items: state.items.filter((item) => item.id !== id),
      };
    }

    default:
      return state;
  }
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);
  const value = { cartState, dispatchCart };
  const childrenDOMs = props.children;

  return (
    <CartContext.Provider value={value}>{childrenDOMs}</CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (ctx === undefined) {
    throw new Error("useCart must be used with a CartProvider");
  }
  return ctx;
};
