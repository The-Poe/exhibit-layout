import styles from "./Cart.module.scss";
import ticketIcon from "images/ticketIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import { UICartActions } from "store/UISlices";

const Cart = () => {
  const cartIsShow = useSelector((state) => state.UICartSlice.cartIsShow);
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
        <div className={`${styles.itemNumber}`}>3</div>
      </div>
      <div className={`${styles.cartIcon}`} onClick={toggleShowCartHangdler}>
        <img src={ticketIcon} alt="" />
      </div>
      <div className={cartClasses.join(" ")}>
        {/*  */}
        <div className={`${styles.cartTitle}`}>Cart List</div>
        <div className={`${styles.cartItems}`}>
          <div className={`${styles.cartItem}`}>
            <div className={`${styles.deleteItemWrapper}`}>
              <div className={`${styles.deleteItem}`}>✖</div>
            </div>
            <div
              className={`${styles.itemPic}`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1545178803-4056771d60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
              }}
            ></div>
            <div className={`${styles.itemInfo}`}>
              <div className={`${styles.itemInfoTitle}`}>2020台味設計展</div>
              <div className={`${styles.itemInfoDate}`}>
                <span className={`${styles.startDay} ${styles.mh}`}>01</span>
                <span className={`${styles.startMon} ${styles.mh}`}>JUN</span>
                <div className={`${styles.inlineBar}`}></div>
                <span className={`${styles.endDay} ${styles.mh}`}>31</span>
                <span className={`${styles.endMon} ${styles.mh}`}>OCT</span>
              </div>
              <div className={`${styles.itemInfoType}`}>全票</div>
              <div className={`${styles.itemInfoPrice}`}>
                <span className={`${styles.infoCurrency}`}>NT$</span>
                <span className={`${styles.infoTotal}`}>350</span>
              </div>
            </div>
            <div className={`${styles.itemAdjust}`}>
              <div className={`${styles.minus} ${styles.mh}`}></div>
              <div className={`${styles.itemQty} ${styles.mh}`}>01</div>
              <div className={`${styles.plus} ${styles.mh}`}>+</div>
            </div>
          </div>
          {/* repeat vvvvv */}
          <div className={`${styles.cartItem}`}>
            <div className={`${styles.deleteItemWrapper}`}>
              <div className={`${styles.deleteItem}`}>✖</div>
            </div>
            <div
              className={`${styles.itemPic}`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1545987796-b199d6abb1b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
              }}
            ></div>
            <div className={`${styles.itemInfo}`}>
              <div className={`${styles.itemInfoTitle}`}>No.22線上設計展</div>
              <div className={`${styles.itemInfoDate}`}>
                <span className={`${styles.startDay} ${styles.mh}`}>01</span>
                <span className={`${styles.startMon} ${styles.mh}`}>JUN</span>
                <div className={`${styles.inlineBar}`}></div>
                <span className={`${styles.endDay} ${styles.mh}`}>31</span>
                <span className={`${styles.endMon} ${styles.mh}`}>OCT</span>
              </div>
              <div className={`${styles.itemInfoType}`}>全票</div>
              <div className={`${styles.itemInfoPrice}`}>
                <span className={`${styles.infoCurrency}`}>NT$</span>
                <span className={`${styles.infoTotal}`}>350</span>
              </div>
            </div>
            <div className={`${styles.itemAdjust}`}>
              <div className={`${styles.minus} ${styles.mh}`}></div>
              <div className={`${styles.itemQty} ${styles.mh}`}>01</div>
              <div className={`${styles.plus} ${styles.mh}`}>+</div>
            </div>
          </div>
          <div className={`${styles.cartItem}`}>
            <div className={`${styles.deleteItemWrapper}`}>
              <div className={`${styles.deleteItem}`}>✖</div>
            </div>
            <div
              className={`${styles.itemPic}`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1596649300028-340ad0ec6146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
              }}
            ></div>
            <div className={`${styles.itemInfo}`}>
              <div className={`${styles.itemInfoTitle}`}>高雄設計展</div>
              <div className={`${styles.itemInfoDate}`}>
                <span className={`${styles.startDay} ${styles.mh}`}>01</span>
                <span className={`${styles.startMon} ${styles.mh}`}>JUN</span>
                <div className={`${styles.inlineBar}`}></div>
                <span className={`${styles.endDay} ${styles.mh}`}>31</span>
                <span className={`${styles.endMon} ${styles.mh}`}>OCT</span>
              </div>
              <div className={`${styles.itemInfoType}`}>全票</div>
              <div className={`${styles.itemInfoPrice}`}>
                <span className={`${styles.infoCurrency}`}>NT$</span>
                <span className={`${styles.infoTotal}`}>350</span>
              </div>
            </div>
            <div className={`${styles.itemAdjust}`}>
              <div className={`${styles.minus} ${styles.mh}`}></div>
              <div className={`${styles.itemQty} ${styles.mh}`}>01</div>
              <div className={`${styles.plus} ${styles.mh}`}>+</div>
            </div>
          </div>
          {/* repeat ^^^^^*/}
        </div>
        <div className={`${styles.cartPrice}`}>
          <div className={`${styles.cartPrice2}`}>
            <span className={`${styles.cartSpan} pr2em`}>小記</span>
            <span className={`${styles.cartSpan}`}>NT$</span>
            <span className={`${styles.cartSpan}`}>1050</span>
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
