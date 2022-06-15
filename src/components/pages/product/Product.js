import styles from "./Product.module.scss";
import NavBar from "../../layout/navBar/NavBar";
import Guess from "../../layout/guess/Guess";
import Footer from "../../layout/footer/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const bgColorArr = ["bgPurple", "bgWhite"];
const textColorArr = ["textWhite", "textPurple"];
const jcArr = ["jcfs", "jcfe"];

const Product = () => {
  const products = useSelector((state) => state.productsReducer.items);

  return (
    <>
      <NavBar />
      <section>
        {products.map((product) => (
          <div
            className={`${styles.product} ${bgColorArr[(product.id - 1) % 2]} `}
            key={product.id}
          >
            <Link to={`/detail/${product.id}`}>
              <div
                className={`${styles.productInfo} ${
                  jcArr[(product.id - 1) % 2]
                } ${textColorArr[(product.id - 1) % 2]} `}
              >
                <div className={`${styles.productContent} `}>
                  <div className={`${styles.productTitle} `}>
                    {product.title}
                  </div>
                  <div className={`${styles.productDesc} `}>
                    {product.description}
                  </div>
                </div>
                <div
                  className={`${styles.productPic}`}
                  style={{
                    background: `center/cover no-repeat url(${product.picUrl})`,
                  }}
                ></div>
                <div className={`${styles.productDate}`}>
                  <span className={`${styles.dateSpan}`}>
                    {product.startDate}
                  </span>
                  <span className={`${styles.dateSpan}`}>
                    {product.startMonth}
                  </span>
                  <span className={`${styles.sepBar}`}>|</span>
                  <span className={`${styles.dateSpan}`}>
                    {product.endDate}
                  </span>
                  <span className={`${styles.dateSpan}`}>
                    {product.endMonth}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
      <Guess />
      <Footer />
    </>
  );
};

export default Product;
