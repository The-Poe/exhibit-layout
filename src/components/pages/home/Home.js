import styles from "./Home.module.scss";
import fbIcon from "images/fbIcon.svg";
import NavBar from "../../layout/navBar/NavBar";
import SlideShow from "../../layout/slideShow/SlideShow";
import Guess from "../../layout/guess/Guess";
import Footer from "../../layout/footer/Footer";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "context/productContext";

export const Home = () => {
  // const products = useSelector((state) => state.productsReducer.items);
  const productsCtx = useContext(ProductsContext);
  const products = productsCtx.products.items;
  return (
    <>
      <SlideShow />
      <NavBar />
      <main>
        <section className="sectionContainer">
          <div className="sectionContainerTitle">熱門特展</div>
          {products.map((product) => (
            <div className={`${styles.hit}`} key={product.id}>
              <div
                className={`${styles.showPic}`}
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage: `url(${product.picUrl})`,
                }}
              />
              <div className={`${styles.showDetails}`}>
                <div className={`${styles.showTitle}`}>{product.title}</div>
                <div className={`${styles.showDate}`}>
                  {product.startDate} {product.startMonth}{" "}
                  <span className={`${styles.sepBar}`}>|</span>
                  {product.endDate} {product.endMonth}
                  <span className="iconFb">
                    <img src={fbIcon} alt="" />
                  </span>
                </div>
                <div className={`${styles.showPrice} showPrice`}>
                  ${product.price}
                </div>
                <div className={`${styles.showDesc} showDesc`}>
                  {product.title}
                </div>
                <div className={`${styles.showBtns} showBtns`}>
                  <Link to={`/detail/${product.id}`}>
                    <div
                      className={`${styles.showBtn} borPurple bgPurple textWhite`}
                    >
                      購買票券
                    </div>
                  </Link>
                  <Link to="/product">
                    <div className={`${styles.showBtn} borPurple textPurple`}>
                      相似商品
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="sectionContainer">
          <div className="sectionContainerTitle">直播回顧</div>
          <div
            className={`${styles.rply}`}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1578402025217-920675beb3c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2087&q=80)",
            }}
          >
            <div className={`${styles.rplyDetails}`}>
              <div className={`${styles.rplyTitle}`}>
                開幕對談<span> | </span>藝術展演巡禮
              </div>
              <div
                className={`${styles.rplyAutherImg}`}
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    "url(https://mysterytribune.com/wp-content/uploads/2018/03/A-Conversation-with-Natasha-Bell-Author-of-Exhibit-Alexandra-682x1024.jpg)",
                }}
              />
              <div className={`${styles.rplyAutherTitle}`}>
                台北現代聯合總監<span> | </span>
                <div className={`${styles.autherName}`}> Ken Hsu </div>
              </div>
              <div className={`${styles.rplyAutherDesc}`}>
                獨家由藝術家、策劃人、畫廊總監帶您欣賞台北藝術特展，感受雕塑、展演及當代日常文化之間微妙的關係。
              </div>
              <div className={`${styles.watchBtn}`}>點此觀看</div>
            </div>
          </div>
        </section>
      </main>
      <Guess />
      <Footer />
    </>
  );
};

export default Home;
