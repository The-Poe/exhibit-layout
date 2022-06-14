import LogInSignUp from "components/features/auth/LogInSignUp";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <>
      <footer className={`${styles.footerContainer}`}>
        <div
          className={`${styles.subscrContainer}`}
          style={{
            background:
              "center/cover no-repeat url(https://images.unsplash.com/photo-1536768767433-cc552f38def9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}
        >
          <div className={`${styles.subscrTexts}`}>
            <div className={`${styles.subscrText}`}>想收到最新消息嗎?</div>
            <div className={`${styles.subscrText}`}>快訂閱我們!</div>
            <div className={`${styles.subscrInputContainer}`}>
              <div className={`${styles["form-group"]}`}>
                <input
                  className={`${styles["form-field"]}`}
                  type="email"
                  placeholder="輸入您的電子信箱"
                ></input>
                <span>訂閱</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.infoBar}`}>
          <div className={`${styles.infoTitContainer}`}>
            <div className={`${styles.iSubTitle} ${styles.iSub1}`}>
              EXHIBINECTION
            </div>
            <div className={`${styles.iSubTitle} ${styles.iSub2}`}>
              &copy;2020.All Rights Reserved.
            </div>
          </div>
          <LogInSignUp />
        </div>
      </footer>
    </>
  );
};

export default Footer;
