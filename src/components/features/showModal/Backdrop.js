import styles from "./Backdrop.module.scss";
const Backdrop = (props) => {
  return (
    <div
      className={`${styles.backdrop} ${props.zIndexClass} ${props.className}`}
      onClick={props.onClose}
    ></div>
  );
};

export default Backdrop;
