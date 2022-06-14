import styles from "./ContentOverlay.module.scss";
const ContentOverlay = (props) => {
  return (
    <div
      className={`${styles.contentOverlay} ${props.zIndexClass} ${props.className}`}
    >
      {props.content}
    </div>
  );
};

export default ContentOverlay;
