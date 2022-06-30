import styles from "./Cart.module.scss";
import ticketIcon from "images/ticketIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import ShowModal from "../showModal/ShowModal";
import NotificationOverlay from "../showModal/NotificationOverlay";
import { Link } from "react-router-dom";
import { cartActions, pushToFirebaseCart } from "store/cartSlice";
import { firestore } from "firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

let cartFetchedFromFirebase = false;

const Cart = () => {
  const [cartIsShow, setCartIsShow] = useState(false);
  const cart = useSelector((state) => state.cartReducer);
  const authUser = useSelector((state) => state.authUserReducer.authUser);
  const { items, sumPrice, totalQuantity } = cart;
  const dispatch = useDispatch();
  const [isLoginNote, setIsloginNote] = useState(false);
  let isCartEmpty = items.length === 0;

  useEffect(() => {
    /*authUser 有變動時要跑此副作用 */
    let authUserEmail = "";
    if (authUser !== "null") {
      authUserEmail = JSON.parse(authUser).email;
    }
    //Cart有變動就更新到Firestore
    if (authUserEmail && cartFetchedFromFirebase) {
      //throttling will be done by epic in cartSlice.js
      dispatch(pushToFirebaseCart({ authUserEmail, cart }));
    }

    //初次載入抓到登入狀態並同步會員手推車之後，手推車後續才會同步
    if (authUserEmail && !cartFetchedFromFirebase) {
      //指名到文件"集合(collection)/文件(doc)"(偶數配對)才可以使用Doc path
      const firebaseAccessCurrentUserCart = doc(
        firestore,
        `carts/${authUserEmail}`
      );
      /*get Data with Email path to */
      const getDocFromFirebase = async () => {
        const currentUserSnapshot = await getDoc(firebaseAccessCurrentUserCart);
        if (currentUserSnapshot.exists()) {
          const docData = currentUserSnapshot.data();
          console.log("getDoc() returns :", docData);
          dispatch(cartActions.replaceCart(docData));
          console.log("cart was replaced with:", docData);
        } else {
          console.log("currentUserSnapshot not exist");
        }
      };
      getDocFromFirebase();
      cartFetchedFromFirebase = true;
      console.log("synchronized local cart with Firestore cart data");
    }
  }, [authUser, cart, dispatch]);

  const showLoginHangler = () => {
    setIsloginNote((prevState) => !prevState);
  };

  const toggleShowCartHangdler = () => {
    setCartIsShow((prevState) => !prevState);
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
        {isCartEmpty && (
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
          {!isCartEmpty && (
            <>
              {authUser !== "null" && (
                <Link to="/checkout">
                  <div
                    className={`${styles.checkoutBtn} bgWhite borPurple textPurple`}
                    onClick={toggleShowCartHangdler}
                  >
                    前往結帳
                  </div>
                </Link>
              )}

              {authUser === "null" && (
                <div onClick={showLoginHangler}>
                  <div
                    className={`${styles.checkoutBtn} bgWhite borPurple textPurple`}
                    onClick={toggleShowCartHangdler}
                  >
                    前往結帳
                  </div>
                </div>
              )}

              {isLoginNote && (
                <ShowModal
                  modalLayer="top"
                  onClose={showLoginHangler}
                  ModalContent={
                    <NotificationOverlay
                      title="Please" //{error.title}
                      message="Please login first!"
                      onConfirm={showLoginHangler}
                    />
                  }
                />
              )}
            </>
          )}
          {isCartEmpty && (
            <div
              className={`${styles.checkoutBtn} bgWhite borPurple textPurple`}
              onClick={toggleShowCartHangdler}
            >
              繼續瀏覽
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
