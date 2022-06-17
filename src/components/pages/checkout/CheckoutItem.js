import styles from "./CheckoutItem.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "store/cartSlice";

const CheckoutItem = (props) => {
  const {
    id,
    picUrl,
    title,
    startDate,
    startMon,
    endDate,
    endMonth,
    price,
    quantity,
    totalPrice,
  } = props;
  const dispatch = useDispatch();
  const plusOneItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        product: {
          id,
          picUrl,
          title,
          startDate,
          startMon,
          endDate,
          endMonth,
          price,
          quantity,
          totalPrice,
        },
        quantity: 1,
      })
    );
  };
  const minusOneItemHandler = () => {
    dispatch(cartActions.removeOneItemFromCart(id));
  };

  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  return (
    <div className={`${styles.chkoutItem}`}>
      <div className={`${styles.deleteItemWrapper}`}>
        <div className={`${styles.deleteItem}`} onClick={deleteItemHandler}>
          ✖
        </div>
      </div>
      <div
        className={`${styles.itemPic}`}
        style={{
          width: "12vmax",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${props.picUrl}`,
        }}
      ></div>
      <div className={`${styles.itemInfo}`}>
        <div className={`${styles.itemInfoTitle}`}>{props.title}</div>
        <div className={`${styles.itemInfoDate}`}>
          <span className={`${styles.startDay}`}>{props.startDate}</span>
          <span className={`${styles.startMon}`}> {props.startMonth}</span>
          <div className={`${styles.inlineBar}`}></div>
          <span className={`${styles.endDay}`}>{props.endDate}</span>
          <span className={`${styles.endMon}`}> {props.endMonth}</span>
        </div>
        <div className={`${styles.itemInfoType}`}>全票</div>
      </div>
      <div className={`${styles.itemInfoPrice}`}>
        <span className={`${styles.infoCurrency}`}>NT$</span>
        <span className={`${styles.infoTotal}`}>{props.totalPrice}</span>
      </div>
      <div className={`${styles.itemAdjust}`}>
        <div
          className={`${styles.minusWrapper} mh`}
          onClick={minusOneItemHandler}
        >
          <div className={`${styles.minus}`}></div>
        </div>
        <div className={`${styles.itemQty} mh`}>{props.quantity}</div>
        <div className={`${styles.plus} mh`} onClick={plusOneItemHandler}>
          +
        </div>
      </div>
    </div>
  );
};
export default CheckoutItem;
