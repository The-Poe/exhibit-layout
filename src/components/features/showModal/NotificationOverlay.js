import styles from "./NotificationOverlay.module.scss";
import Card from "components/UI/Card";
import Button from "components/UI/Button";

const NotificationOverlay = (props) => {
  return (
    <Card className={`${styles.modal} ${props.className}`}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <div>{props.message}</div>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

export default NotificationOverlay;
