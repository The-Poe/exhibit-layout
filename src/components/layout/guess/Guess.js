import { Link } from "react-router-dom";
import styles from "./Guess.module.scss";

const Guess = () => {
  return (
    <>
      <section className="sectionContainer">
        <div className="sectionContainerTitle">猜您也喜歡</div>
        <div className={`${styles.guesses}`}>
          <Link to={`/detail/1`}>
            <div className={`${styles.guessItem} textBlack textNoUnderline `}>
              <div
                style={{
                  width: "100%",
                  height: "20vh",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1566954979172-eaba308acdf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80)",
                }}
              ></div>
              <div className={`${styles.guessTitle}`}>No.22 線上設計展</div>
              <div className={`${styles.guessPrice}`}>$350</div>
            </div>
          </Link>
          <Link to={`/detail/2`}>
            <div className={`${styles.guessItem} textBlack textNoUnderline `}>
              <div
                style={{
                  width: "100%",
                  height: "20vh",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1600141215810-ccd579383116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)",
                }}
              ></div>
              <div className={`${styles.guessTitle}`}>No.22 線上設計展</div>
              <div className={`${styles.guessPrice}`}>$350</div>
            </div>
          </Link>
          <Link to={`/detail/2`}>
            <div className={`${styles.guessItem} textBlack textNoUnderline `}>
              <div
                className="guessPic"
                style={{
                  width: "100%",
                  height: "20vh",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1567419099214-0dd03b43e8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)",
                }}
              ></div>
              <div className={`${styles.guessTitle}`}>No.22 線上設計展</div>
              <div className={`${styles.guessPrice}`}>$350</div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Guess;
