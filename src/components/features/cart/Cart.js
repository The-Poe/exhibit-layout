import styles from "./Cart.module.scss";
import ticketIcon from "images/ticketIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import { UICartActions } from "store/UISlices";
import CartItem from "./CartItem";

const Cart = () => {
  const cartIsShow = useSelector((state) => state.UIcartReducer.cartIsShow);
  const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);
  const sumPrice = useSelector((state) => state.cartReducer.sumPrice);
  const items = useSelector((state) => state.cartReducer.items);
  const dispatch = useDispatch();
  const toggleShowCartHangdler = () => {
    dispatch(UICartActions.toggleShowCart());
  };

  const cartClasses = [
    `${styles.cartList}`,
    cartIsShow ? "opacity1" : "invisible opacity0",
  ];

  return (
    <div className={`${styles.cart}`}>
      <div className={`${styles.itemNumberContainer}`}>
        <div className={`${styles.itemNumber}`}>{totalQuantity}</div>
      </div>
      <div className={`${styles.cartIcon}`} onClick={toggleShowCartHangdler}>
        <img src={ticketIcon} alt="" />
      </div>
      <div className={cartClasses.join(" ")}>
        <div className={`${styles.cartTitle}`}>Cart List</div>
        <div className={`${styles.cartItems}`}>
          {items &&
            items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                picUrl={item.picUrl}
                title={item.title}
                startDate={item.startDate}
                startMon={item.startMonth}
                endDate={item.endDate}
                endMonth={item.endMonth}
                price={item.price}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
              />
            ))}
        </div>
        {items.length === 0 && (
          <div className={`${styles.noItems}`}>
            {" "}
            No item yet &nbsp;&nbsp;; &#41;{" "}
          </div>
        )}
        <div className={`${styles.cartPrice}`}>
          <div className={`${styles.cartPrice2}`}>
            <span className={`${styles.cartSpan} pr2em`}>小記</span>
            <span className={`${styles.cartSpan}`}>NT$</span>
            <span className={`${styles.cartSpan}`}>{sumPrice}</span>
          </div>
          <div className={`${styles.checkoutBtn} bgWhite borPurple textPurple`}>
            <a href="/checkout">前往結帳</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
