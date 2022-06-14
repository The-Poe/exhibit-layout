import styles from "./SlideShow.module.scss";

const SlideShow = () => {
  return (
    <section
      className={styles.slideShow}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=100)",
      }}
    >
      <div className={styles.slideTitleContainer}>
        <div className={styles.slideTitle}>台北當代藝術展</div>{" "}
        {/* 之後要資料帶入 */}
        <div className={styles.slideDate}>01 JUN - 31 OCT</div>{" "}
        {/* 之後要資料帶入 */}
        <div className={styles.buttonContainer}>
          <div className={`${styles.slideButton} bgPink`}>購買票券</div>
          <div className={`${styles.slideButton} borWhite`}>詳細資訊</div>
        </div>
      </div>
    </section>
  );
};

export default SlideShow;
