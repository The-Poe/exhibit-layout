import {
  addDoc,
  collection,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "firebaseConfig";
import { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { cartActions } from "store/cartSlice";
// import { orderInfoActions } from "store/orderInfoSlice";
import AuthUserContext from "context/authUserContext";
import OrderInfoContext from "context/orderInfoContext";
import { useCart } from "context/cartContext";
import styles from "./Checkout.module.scss";
import CheckoutItem from "./CheckoutItem";

let initialLoad = true;
const Checkout = () => {
  const [checkoutStatus, setCheckoutStatus] = useState(1);
  // const authUser = useSelector((state) => state.authUserReducer.authUser);

  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cartReducer);
  const authUserCtx = useContext(AuthUserContext);
  const authUser = authUserCtx.authUser;
  const orderInfoCtx = useContext(OrderInfoContext);
  const { cartState, dispatchCart } = useCart();
  const { items, sumPrice } = cartState;

  const [email, setEmail] = useState("");
  const [cusomerName, setCusomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [isCouponEffect, setIsCouponEffect] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [creditCard, setCreditCard] = useState("");
  const [creditCardDate, setCreditCardDate] = useState(null);
  const [secureCode, setSecureCode] = useState("");
  const [finalPrice, setfinalPrice] = useState(0);
  //TODO: validation

  const emailInputRef = useRef();
  const customerNameInputRef = useRef();
  const phoneInputRef = useRef();
  const couponCodeInputRef = useRef();
  const creditCardInputRef = useRef();
  const creditCardDateInputRef = useRef();
  const secureCodeInputRef = useRef();

  const emailOnChange = (e) => {
    setEmail(emailInputRef.current.value);
    console.log(email);
  };
  const customerNameOnChange = () => {
    setCusomerName(customerNameInputRef.current.value);
  };
  const phoneOnChange = () => {
    setPhone(phoneInputRef.current.value);
  };
  const couponCodeOnChange = () => {
    setCouponCode(couponCodeInputRef.current.value);
    console.log("couponCodeOnChange called");
  };

  useEffect(() => {
    /*To look up Coupon discount*/
    /****************************/
    /**Query with multiple docs**/
    /****************************/
    if (initialLoad === false) {
      async function queryForDocs() {
        console.log("queryForDocs() called");
        const customerOrderQuery = query(
          collection(firestore, "campaigns"),
          where("couponCode", "==", couponCode),
          limit(1)
        );
        const querySnapshot = await getDocs(customerOrderQuery);
        console.log("couponCode:", couponCode);
        console.log("querySnapshot.docs:", querySnapshot.docs);
        if (querySnapshot.docs.length === 0) {
          setCouponDiscount(0);
          setIsCouponEffect(false);
          setfinalPrice(sumPrice);
        } else if (querySnapshot.docs.length > 0) {
          querySnapshot.forEach((snap) => {
            console.log(
              `Query Doc ${snap.id} contains ${JSON.stringify(snap.data())}`
            );
            setCouponDiscount(snap.data().couponDiscount);
            if (snap.data().couponType.toLowerCase() === "minus") {
              setfinalPrice(sumPrice - couponDiscount);
            }
            setIsCouponEffect(true);
          });
        }
      }
      const debouncer = setTimeout(() => {
        queryForDocs();
      }, 800);

      return () => {
        clearTimeout(debouncer);
        console.log("cleanup");
      };
    }
    initialLoad = false;
  }, [couponCode, couponDiscount, sumPrice]);

  const creditCardOnChange = () => {
    setCreditCard(creditCardInputRef.current.value);
  };
  const creditCardDateOnChange = () => {
    setCreditCardDate(creditCardDateInputRef.current.value);
  };
  const secureCodeOnChange = () => {
    setSecureCode(secureCodeInputRef.current.value);
  };

  const nextStepHandler = () => {
    if (checkoutStatus < 3) setCheckoutStatus(checkoutStatus + 1);
    console.log("checkoutStatus:", checkoutStatus);
  };

  const lastStepHandler = () => {
    if (checkoutStatus > 1) setCheckoutStatus(checkoutStatus - 1);
    console.log("checkoutStatus:", checkoutStatus);
  };

  const onConfirmOrder = () => {
    const orderDetail = {
      email,
      cusomerName,
      phone,
      couponCode,
      couponDiscount,
      creditCard,
      creditCardDate,
      secureCode,
      finalPrice,
      items,
    };

    /*send to Firestore*/
    let authUserEmail = "";
    if (authUser !== "null") {
      const authUserJSON = JSON.parse(authUser);
      authUserEmail = authUserJSON.email;
    }
    console.log("authUserEmail:", authUserEmail);
    //collection(自動配給子集合使用,ID可以用addDoc回傳的id)
    const usersCollection = collection(
      firestore,
      `orders/${authUserEmail}/orderDetails`
    );
    const addDocToFirebase = async () => {
      addDoc(usersCollection, orderDetail) //用隨機ID新增
        .then((response) => {
          console.log("the addDoc() promise has fullfilled! ");
          console.log("the response is:", response);
          console.log("the response.id is:", response.id);
          orderInfoCtx.replaceOrderIdHandler(response.id);
          // dispatch(
          //   orderInfoActions.replaceOrderId({
          //     orderId: response.id,
          //   })
          // );
        }) //won't run when offline
        .catch((err) => console.log("the addDoc() got error:", err));
    };
    addDocToFirebase();

    orderInfoCtx.replaceOrderItems(items);
    // dispatch(orderInfoActions.replaceOrderItems({ items }));

    dispatchCart({
      type: "replaceCart",
      payload: {
        items: [],
        totalQuantity: 0,
        sumPrice: 0,
      },
    });
    // dispatch(
    //   cartActions.replaceCart({
    //     items: [],
    //     totalQuantity: 0,
    //     sumPrice: 0,
    //   })
    // );
  };

  return (
    <>
      <div className={`${styles.chkoutContainer}`}>
        <div className={`${styles.sectionProgress}`}>
          <div className={`${styles.progress}`}></div>
          <div className={`${styles.progessStatuses}`}>
            <div className={`${styles.progessStatus}`}>
              <div className={`${styles.progressDot} bgPink`}></div>
              確認訂單
            </div>
            <div className={`${styles.progessStatus}`}>
              <div
                className={`${styles.progressDot} ${
                  checkoutStatus >= 2 ? "bgPink" : "bgWhite"
                } `}
              ></div>
              填寫訂單資訊
            </div>
            <div className={`${styles.progessStatus}`}>
              <div
                className={`${styles.progressDot} ${
                  checkoutStatus >= 3 ? "bgPink" : "bgWhite"
                }`}
              ></div>
              填寫付款資訊
            </div>
            <div className={`${styles.progessStatus}`}>
              <div
                className={`${styles.progressDot} ${
                  checkoutStatus >= 4 ? "bgPink" : "bgWhite"
                }`}
              ></div>
              完成訂購
            </div>
          </div>
        </div>
        <div className={`${styles.chkoutContent}`}>
          <div className={`${styles.chkoutItems}`}>
            {items &&
              items.map((item) => (
                <CheckoutItem
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
        </div>
        <div className={`${styles.chkoutCustomInfo}`}>
          <div className={`${styles.customerFormWrapper}`}>
            {checkoutStatus === 2 && (
              <>
                <div className={`${styles.formTitle}`}>訂購人資訊</div>
                <form action="">
                  <div className={`${styles.formField}`}>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      ref={emailInputRef}
                      onChange={emailOnChange}
                    ></input>
                  </div>
                  <div className={`${styles.formField}`}>
                    <label htmlFor="name">姓名</label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      placeholder="請輸入姓名"
                      ref={customerNameInputRef}
                      onChange={customerNameOnChange}
                    ></input>
                  </div>
                  <div className={`${styles.formField}`}>
                    <label htmlFor="contact">連絡電話</label>
                    <br />
                    <input
                      type="tel"
                      name="contact"
                      placeholder="請輸入電話"
                      ref={phoneInputRef}
                      onChange={phoneOnChange}
                    ></input>
                  </div>
                  <div className={`${styles.formField}`}>
                    <label htmlFor="coupon">優惠碼</label>
                    <br />
                    <input
                      type="text"
                      name="coupon"
                      placeholder="TG87526"
                      ref={couponCodeInputRef}
                      onChange={couponCodeOnChange}
                    ></input>
                    <div className={`${styles.coupleEffect}`}>
                      {isCouponEffect && "優惠碼已生效"}
                      {!isCouponEffect && "無效優惠碼"}
                    </div>
                  </div>
                </form>
              </>
            )}
            {checkoutStatus === 3 && (
              <>
                <div className={`${styles.formTitle}`}>付款資訊</div>
                <form action="">
                  <div className={`${styles.formField}`}>
                    <label htmlFor="credit">信用卡帳號</label>
                    <br />
                    <input
                      type="text"
                      name="credit"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                      ref={creditCardInputRef}
                      onChange={creditCardOnChange}
                    ></input>
                  </div>
                  <div className={`${styles.formField}`}>
                    <label htmlFor="validDate">有效日期</label>
                    <br />
                    <input
                      type="month"
                      name="validDate"
                      placeholder="(MM/YY)"
                      ref={creditCardDateInputRef}
                      onChange={creditCardDateOnChange}
                    ></input>
                  </div>
                  <div className={`${styles.formField}`}>
                    <label htmlFor="security">安全碼</label>
                    <br />
                    <input
                      type="password"
                      name="security"
                      max="3"
                      placeholder="請輸入安全碼"
                      ref={secureCodeInputRef}
                      onChange={secureCodeOnChange}
                    ></input>
                  </div>
                </form>
              </>
            )}
          </div>
          <div className={`${styles.subTotalSection}`}>
            <div className={`${styles.summing}`}>
              <span className={`${styles.subtotalText} mh`}>小計</span>
              <span className={`${styles.subtotalInfo} mh`}>
                <span className={`${styles.infoCurrency}`}>NT$</span>
                <span className={`${styles.infoTotal}`}>{sumPrice}</span>
              </span>
            </div>
            {checkoutStatus !== 1 && (
              <>
                <div className={`${styles.summing}`}>
                  <span className={`${styles.subtotalText} mh`}>折扣</span>
                  <span className={`${styles.subtotalInfo} mh`}>
                    <span className={`${styles.infoCurrency}`}>-NT$</span>
                    <span className={`${styles.infoCurrency}`}>
                      {couponDiscount}
                    </span>
                  </span>
                </div>
                <div className={`${styles.summing} total`}>
                  <span className={`${styles.subtotalText} mh`}>總金額</span>
                  <span className={`${styles.subtotalInfo} mh`}>
                    <span className={`${styles.infoCurrency}`}>NT$</span>
                    <span className={`${styles.infoTotal}`}>{finalPrice}</span>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.chkoutConfirm}`}>
        <div
          onClick={lastStepHandler}
          className={`${checkoutStatus === 1 && "invisible"} ${
            styles.btnRewind
          }   borPurple textPurple`}
        >
          返回
        </div>
        {checkoutStatus < 3 && (
          <div
            onClick={nextStepHandler}
            className={`${styles.btnNext} textWhite bgPurple`}
          >
            下一步
          </div>
        )}
        {checkoutStatus === 3 && (
          <Link to="/checkoutDone">
            <div
              onClick={onConfirmOrder}
              className={`${styles.btnConfirm} textWhite bgPurple`}
            >
              確認結帳
            </div>
          </Link>
        )}
      </div>
    </>
  );
};
export default Checkout;
