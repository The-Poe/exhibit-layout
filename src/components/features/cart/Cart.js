import styles from "./Cart.module.scss";
import ticketIcon from "images/ticketIcon.svg";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { cartActions } from "store/cartSlice";
import { firestore } from "firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import ShowModal from "../showModal/ShowModal";
import NotificationOverlay from "../showModal/NotificationOverlay";
import { useCart } from "context/cartContext";
import AuthUserContext from "context/authUserContext";

let cartFetchedFromFirebase = false;

const Cart = () => {
  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cartReducer);
  // const authUser = useSelector((state) => state.authUserReducer.authUser);
  const authUserCtx = useContext(AuthUserContext);
  const authUser = authUserCtx.authUser;

  const [cartIsShow, setCartIsShow] = useState(false);
  const [isLoginNote, setIsloginNote] = useState(false);
  const { cartState, dispatchCart } = useCart();
  const cart = cartState;
  const { items, sumPrice, totalQuantity } = cartState;
  let isCartEmpty = items.length === 0;

  useEffect(() => {
    /*authUser 有變動時要跑此副作用 */
    let authUserEmail = "";
    if (authUser !== "null") {
      const authUserJSON = JSON.parse(authUser);
      authUserEmail = authUserJSON.email;
    }
    //Cart有變動就更新到Firestore
    if (authUserEmail && cartFetchedFromFirebase) {
      //指名到文件"集合(collection)/文件(doc)"(偶數配對)才可以使用Doc path
      const firebaseAccessCurrentUserCart = doc(
        firestore,
        `carts/${authUserEmail}`
      );
      /**add/update data **/
      const setDocToFirebase = async () => {
        setDoc(firebaseAccessCurrentUserCart, cart) //覆蓋
          .then(() => console.log("the setDoc() promise has fullfilled! ")) //won't be called when offline
          .catch((err) => console.log("the setDoc() got error:", err));
      };
      setDocToFirebase();
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
          // dispatch(cartActions.replaceCart(docData));
          dispatchCart({ type: "replaceCart", payload: docData });
          console.log("cart was replaced with:", docData);
        } else {
          console.log("currentUserSnapshot not exist");
        }
      };
      getDocFromFirebase();
      cartFetchedFromFirebase = true;
      console.log("synchronized local cart with Firestore cart data");
    }
  }, [authUser, cart, dispatchCart]);
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
