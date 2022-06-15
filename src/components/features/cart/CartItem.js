import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "store/CartSlice";

const CartItem = (props) => {
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
    <div className={`${styles.cartItem}`} key={props.id}>
      <div className={`${styles.deleteItemWrapper}`}>
        <div className={`${styles.deleteItem}`} onClick={deleteItemHandler}>
          ✖
        </div>
      </div>
      <div
        className={`${styles.itemPic}`}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${props.picUrl})`,
        }}
      ></div>
      <div className={`${styles.itemInfo}`}>
        <div className={`${styles.itemInfoTitle}`}>{props.title}</div>
        <div className={`${styles.itemInfoDate}`}>
          <span className={`${styles.startDay} ${styles.mh}`}>
            {props.startDate}
          </span>
          <span className={`${styles.startMon} ${styles.mh}`}>
            {props.startMonth}
          </span>
          <div className={`${styles.inlineBar}`}></div>
          <span className={`${styles.endDay} ${styles.mh}`}>
            {props.endDate}
          </span>
          <span className={`${styles.endMon} ${styles.mh}`}>
            {props.endMonth}
          </span>
        </div>
        <div className={`${styles.itemInfoType}`}>全票</div>
        <div className={`${styles.itemInfoPrice}`}>
          <span className={`${styles.infoCurrency}`}>NT$</span>
          <span className={`${styles.infoTotal}`}>{props.totalPrice}</span>
        </div>
      </div>
      <div className={`${styles.itemAdjust}`}>
        <div
          className={`${styles.minus} ${styles.mh}`}
          onClick={minusOneItemHandler}
        ></div>
        <div className={`${styles.itemQty} ${styles.mh}`}>{props.quantity}</div>
        <div
          className={`${styles.plus} ${styles.mh}`}
          onClick={plusOneItemHandler}
        >
          +
        </div>
      </div>
    </div>
  );
};
export default CartItem;
