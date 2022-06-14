import styles from "./Home.module.scss";
import fbIcon from "images/fbIcon.svg";
import NavBar from "../navBar/NavBar";
import SlideShow from "../slideShow/SlideShow";
import Guess from "../guess/Guess";
import Footer from "../footer/Footer";

export const Home = () => {
  return (
    <>
      <SlideShow />
      <NavBar />
      <main>
        <section className="sectionContainer">
          <div className="sectionContainerTitle">熱門特展</div>
          <div className={`${styles.hit}`}>
            <div
              className={`${styles.showPic}`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1545178803-4056771d60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
              }}
            />
            <div className={`${styles.showDetails}`}>
              <div className={`${styles.showTitle}`}>2020 台味設計展</div>
              <div className={`${styles.showDate}`}>
                01 JUN <span className={`${styles.sepBar}`}>|</span> 31 OCT
                <span className="iconFb">
                  <img src={fbIcon} alt="" />
                </span>
              </div>
              <div className={`${styles.showPrice} showPrice`}>$350</div>
              <div className={`${styles.showDesc} showDesc`}>
                一年一度的台味設計展由經濟部工業局舉辦、台灣創意設計中心執行，每年，針對在地文化、及產業發展特色，運用設計思考全是新時代的意涵，並以展覽呈現在際設計。
              </div>
              <div className={`${styles.showBtns} showBtns`}>
                <div className={`${styles.showBtn} bgPurple textWhite`}>
                  購買票券
                </div>
                <div className={`${styles.showBtn} borPurple textPurple`}>
                  收藏展覽
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.hit}`}>
            <div
              className={`${styles.showPic}`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1545987796-b199d6abb1b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
              }}
            />
            <div className={`${styles.showDetails}`}>
              <div className={`${styles.showTitle}`}>No.22線上設計展</div>
              <div className={`${styles.showDate}`}>
                01 JUN <span className={`${styles.sepBar}`}>|</span> 31 OCT
                <span className="iconFb">
                  <img src={fbIcon} alt="" />
                </span>
              </div>
              <div className={`${styles.showPrice} showPrice`}>$350</div>
              <div className={`${styles.showDesc} showDesc`}>
                這是一個專屬於設計系畢業生的展覽，沒有華麗的名號、沒有浮誇的獎賞。讓我們用作品與理念，去碰撞真實世界裡的各種問題。創造更多美好的人事物。讓這個地球、這個世界變成每一個人心目中的理想鄉。
              </div>
              <div className={`${styles.showBtns} showBtns`}>
                <div className={`${styles.showBtn} bgPurple textWhite`}>
                  購買票券
                </div>
                <div className={`${styles.showBtn} borPurple textPurple`}>
                  收藏展覽
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.hit}`}>
            <div
              className={`${styles.showPic}`}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1596649300028-340ad0ec6146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
              }}
            />
            <div className={`${styles.showDetails}`}>
              <div className={`${styles.showTitle}`}>高雄設計展</div>
              <div className={`${styles.showDate}`}>
                01 JUN <span className={`${styles.sepBar}`}>|</span> 31 OCT
                <span className="iconFb">
                  <img src={fbIcon} alt="" />
                </span>
              </div>
              <div className={`${styles.showPrice} showPrice`}>$350</div>
              <div className={`${styles.showDesc} showDesc`}>
                設計大高雄究竟是怎麼一回事？在這「設計」詞
                彙有點氾濫的年代，或許我們也搞不清楚究竟誰
                被誰設計了，設計生活？還是被生活設計？而當
                高雄這座城市建設硬體己相當程度完備時，文化 軟實力又該如何輸出？
              </div>
              <div className={`${styles.showBtns} showBtns`}>
                <div className={`${styles.showBtn} bgPurple textWhite`}>
                  購買票券
                </div>
                <div className={`${styles.showBtn} borPurple textPurple`}>
                  收藏展覽
                </div>
              </div>
            </div>
          </div>
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
