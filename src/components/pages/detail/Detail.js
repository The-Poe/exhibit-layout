import styles from "./Detail.module.scss";
import fbIcon from "images/fbIcon.svg";
import NavBar from "../../layout/navBar/NavBar";
import Guess from "../../layout/guess/Guess";
import Footer from "../../layout/footer/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "store/cartSlice";
import { useState } from "react";

const Detail = () => {
  const products = useSelector((state) => state.productsReducer.items);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = products[productId - 1];
  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ product, quantity }));
    resetTickethandler();
  };

  const minusTickethandler = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const plusTickethandler = () => {
    if (quantity < 100) setQuantity(quantity + 1);
  };
  const resetTickethandler = () => {
    setQuantity(1);
  };

  return (
    <>
      <NavBar />
      <section className={`${styles.detail}`}>
        <div className={`${styles.ticketInfo} ${styles.cardMargin}`}>
          <div className={`${styles.infoContent}`}>
            <div
              className={`${styles.infoPic}`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${product.picUrl})`,
              }}
            ></div>
            <div className={`${styles.infoDate}`}>
              <span className={`${styles.dateSpan}`}>{product.startDate}</span>
              <span className={`${styles.dateSpan}`}>{product.startMonth}</span>
              <span className={`${styles.sepBar}`}>|</span>
              <span className={`${styles.dateSpan}`}>{product.endDate}</span>
              <span className={`${styles.dateSpan}`}>{product.endMonth}</span>
            </div>
            <div>
              <div className={`${styles.infoTitle}`}>
                {product.title}
                <span className="iconFb">
                  <img src={fbIcon} alt="" />
                </span>
              </div>
              <div className={`${styles.infoDesc}`}>{product.description}</div>
            </div>
          </div>
          <div className={`${styles.ticketDetail}`}>
            <div className={`${styles.ticketOptions}`}>
              <div className={`${styles.ticketNumber}`}>
                <div className={`${styles.ticketNumberTextWrapper}`}>
                  <span
                    className={`${styles.ticketText} ${styles.minus} `}
                    onClick={minusTickethandler}
                  >
                    -
                  </span>
                  <span className={`${styles.ticketText}`}>{quantity}</span>
                  <span
                    className={`${styles.ticketText} ${styles.plus}`}
                    onClick={plusTickethandler}
                  >
                    +
                  </span>
                </div>
                <span className={`${styles.ticketText2}`}>張</span>
              </div>
              <div className={`${styles.sepLine}`}></div>
              <div className={`${styles.ticketPrice}`}>
                <div>
                  <span className={`${styles.ticketText}`}>
                    NT${product.price}
                  </span>
                </div>
                <div className={`${styles.ticketText2}`}>票種</div>
                <div className={`${styles.ticketypes}`}>
                  <div className={`${styles.ticketText3}`}>學生</div>
                  <div className={`${styles.ticketText3}`}>全票</div>
                  <div className={`${styles.ticketText3}`}>愛心</div>
                </div>
              </div>
              {/*  */}
            </div>
            <div className={`${styles.ticketBtns}`}>
              <div
                className={`${styles.ticketBtn} bgWhite borPurple textPurple`}
              >
                <span className="inlBlk">收藏</span>
                <span className="inlBlk">展覽</span>
              </div>
              <div
                className={`${styles.ticketBtn} bgPink textWhite`}
                onClick={addToCartHandler}
              >
                <span className="inlBlk">加入</span>
                <span className="inlBlk">推車</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.wallpaper} ${styles.cardMargin}`}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1546013848-afcad42624d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80)",
          }}
        ></div>
        <div
          className={`${styles.detailPic} ${styles.cardMargin}`}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1494660084187-79afc14b7c0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80)",
          }}
        ></div>
        <div className={`${styles.detailContent} ${styles.cardMargin}`}>
          <div className={`${styles.cntnTitle}`}>藝饗宴</div>
          <div className={`${styles.cntnTitle}`}>
            Celebration of Style and Art
          </div>
          <div className={`${styles.cntnDesc}`}>
            &nbsp;&nbsp;&nbsp;&nbsp;匯集美、日、臺等地的藝術家與時尚設計師的作品。以跨界跨域的潮流文化為軸心&#xff0c;結合街頭塗
            鴉、時尚文化、名牌符號等&#xff0c;藉由各自特殊的表現語最&#xff0c;傳達對社會當下流行文化的自我反嘲。然而這
            些深受大眾喜愛的藝術家&#xff0c;也讓「時尚」的概念不再扁平單一&#xff0c;相反的&#xff0c;他們展現了對社會更具魅力的
            反思&#xff0c;也提出了對於潮文化的自我觀點。
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;從臺灣前輩藝術家林淵、國際知名的超扁平藝術家村上隆、臺灣彩
            繪雕塑家洪易、以及當代新玩具雕塑 代表Kaws
            等&#xff0c;都受到許多收藏家的喜愛&#xff0c;同時也是當代藝術史上重要的一員。在這個展區&#xff0c;向藏家借展
            的作品都是一時之選&#xff0c;也反映出街頭藝術發展的某一種共性。另外&#xff0c;在與時尚跨界的藝術表現上&#xff0c;有永
            遠嘲諷時尚卻很時尚的藝術家Death
            NYC、臺灣新銳服裝設計師吳日云、尋找鎂光燈背後那真實藝術家
            身分的郭彥甫、年輕雕塑家賴冠仲、橫跨藝術與時尚設計師雙重身分的雙人組陳薇與李崇德、創造出療
            疯角色俊費Zunbo
            的韓國設計團隊Sakubo&#xff0c;以及日本藝術家喜久田尚美、南館麻美子等。展區透過空間
            的装置與時尚語最&#xff0c;完美詮釋了藝術、設計與潮流文化的多元樣貌。
          </div>
        </div>
      </section>
      <Guess />
      <Footer />
    </>
  );
};

export default Detail;
