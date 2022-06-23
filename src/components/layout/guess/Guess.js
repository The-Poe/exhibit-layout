import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Guess.module.scss";

const Guess = () => {
  const products = useSelector((state) => state.productsReducer.items);
  const productsTop3 = products.slice(0, 3);
  return (
    <>
      <section className="sectionContainer">
        <div className="sectionContainerTitle">猜您也喜歡</div>
        <div className={`${styles.guesses}`}>
          {productsTop3.map((product) => (
            <div key={product.id}>
              <Link to={`/detail/${product.id}`}>
                <div
                  className={`${styles.guessItem} textBlack textNoUnderline `}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "20vh",
                      background: `center/cover no-repeat url(${product.picUrl})`,
                    }}
                  ></div>
                  <div className={`${styles.guessTitle}`}>{product.title}</div>
                  <div className={`${styles.guessPrice}`}>${product.price}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Guess;
