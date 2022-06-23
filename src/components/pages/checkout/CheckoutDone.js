import styles from "./CheckoutDone.module.scss";
import checkIcon from "images/checkIcon.svg";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useContext } from "react";
import OrderInfoContext from "context/orderInfoContext";
const CheckoutDone = () => {
  // const orderId = useSelector((state) => state.orderInfoReducer.orderId);
  // const orderItems = useSelector((state) => state.orderInfoReducer.items);
  const orderInfoCtx = useContext(OrderInfoContext);
  console.log("orderInfoCtx:", orderInfoCtx);
  const orderId = orderInfoCtx.orderId;
  const orderItems = orderInfoCtx.items;

  return (
    <>
      <div className={`${styles.chkoutContainer}`}>
        <div className={`${styles.iconContainer}`}>
          <div className={`${styles.checkIcon}`}>
            <img src={checkIcon} alt="" />
          </div>
          <div className={`${styles.checkText}`}>完成訂購</div>
        </div>
        <div className={`${styles.confirmText1}`}>您的展覽憑證代碼為:</div>
        <div className={`${styles.ticketCode}`}>{orderId}</div>
        <div className={`${styles.confirmText2}`}>
          恭喜您已完成下列票券的購票手續:
          <div className={`${styles.checkOutItems}`}>
            {orderItems.length !== 0 &&
              orderItems.map((item) => (
                <div className={`${styles.checkOutItem}`}>
                  {item.title}&nbsp;&nbsp;
                  {item.startDate}&nbsp;{item.startMonth}
                  &nbsp;~&nbsp;
                  {item.endDate}&nbsp;{item.endMonth}
                  &nbsp;&nbsp;{item.quantity}張
                </div>
              ))}
          </div>
          請於展覽入口頁面輸入「展覽憑證代碼」，經驗證無誤即可瀏覽。
        </div>
        <div className={`${styles.btnsContainer}`}>
          <Link to="/">
            <div
              href="/"
              className={`${styles.btn} borPurple bgWhite textPurple`}
            >
              回首頁
            </div>
          </Link>
          <Link to="/">
            <div href="/product" className={`${styles.btn} bgPink textWhite`}>
              繼續逛展
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckoutDone;
