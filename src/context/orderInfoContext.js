import React, { useState } from "react";

const OrderInfoContext = React.createContext({
  orderId: "",
  items: [],
  replaceOrderIdHandler: () => {},
  replaceOrderItems: () => {},
});

export const OrderInfoContextProvider = (props) => {
  const childrenDOMs = props.children;
  const [orderId, setOrderId] = useState("");
  const [items, setItems] = useState([]);

  const replaceOrderIdHandler = (orderId) => {
    console.log("replaceOrderIdHandler orderId:", orderId);
    setOrderId(orderId);
  };

  const replaceOrderItems = (items) => {
    console.log("replaceOrderItems orderId:", items);
    setItems(items);
  };

  return (
    <OrderInfoContext.Provider
      value={{
        orderId: orderId,
        items: items,
        replaceOrderIdHandler: replaceOrderIdHandler,
        replaceOrderItems: replaceOrderItems,
      }}
    >
      {childrenDOMs}
    </OrderInfoContext.Provider>
  );
};

export default OrderInfoContext;
