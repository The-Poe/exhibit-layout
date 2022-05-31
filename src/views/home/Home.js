import React from "react";
import "./Home.scss";
import fbIcon from "../../images/fbIcon.svg";
import picShow1 from "../../images/show1.jpg";
import picShow2 from "../../images/show2.jpg";
import picShow3 from "../../images/show3.jpg";
import { NavBar } from "../navBar/NavBar";
import { SlideShow } from "../slideShow/SlideShow";

// import picHit1 from "https://images.unsplash.com/photo-1545987796-b199d6abb1b4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mzd8NjIyNDgyMjB8fGVufDB8fHx8&auto=format&fit=crop&w=500";

export function Home() {
  return (
    <>
      <SlideShow />
      <NavBar />
      <main>
        <section className="sectionContainer">
          <div className="sectionContainerTitle">熱門特展</div>
          <div className="hit">
            <img className="showPic" src={picShow1} alt="show pic" />
            <div className="showDetails">
              <div className="showTitle">2020 台味設計展</div>
              <div className="showDate">
                01 JUN <span className="sepBar">|</span> 31 OCT
                <span className="showFb">
                  <img src={fbIcon} alt="" />
                </span>
              </div>
              <div className="showPrice">$350</div>
              <div className="showDesc">
                一年一度的台味設計展由經濟部工業局舉辦、台灣創意設計中心執行，每年，針對在地文化、及產業發展特色，運用設計思考全是新時代的意涵，並以展覽呈現在際設計。
              </div>
              <div className="showBtns">
                <div className="showBtn bgPurple textWhite">購買票券</div>
                <div className="showBtn borPurple textPurple">收藏展覽</div>
              </div>
            </div>
          </div>
          <div className="hit">
            <img className="showPic" src={picShow2} alt="show pic" />
            <div className="showDetails">
              <div className="showTitle">No.22線上設計展</div>
              <div className="showDate">
                01 JUN <span className="sepBar">|</span> 31 OCT
                <span className="showFb">
                  <img src={fbIcon} alt="" />
                </span>
              </div>
              <div className="showPrice">$350</div>
              <div className="showDesc">
                這是一個專屬於設計系畢業生的展覽，沒有華麗的名號、沒有浮誇的獎賞。讓我們用作品與理念，去碰撞真實世界裡的各種問題。創造更多美好的人事物。讓這個地球、這個世界變成每一個人心目中的理想鄉。
              </div>
              <div className="showBtns">
                <div className="showBtn bgPurple textWhite">購買票券</div>
                <div className="showBtn borPurple textPurple">收藏展覽</div>
              </div>
            </div>
          </div>
          <div className="hit">
            <img className="showPic" src={picShow3} alt="show pic" />
            <div className="showDetails">
              <div className="showTitle">高雄設計展</div>
              <div className="showDate">
                01 JUN <span className="sepBar">|</span> 31 OCT
                <span className="showFb">
                  <img src={fbIcon} alt="" />
                </span>
              </div>
              <div className="showPrice">$350</div>
              <div className="showDesc">
                這是一個專屬於設計系畢業生的展覽，沒有華麗的名號、沒有浮誇的獎賞。讓我們用作品與理念，去碰撞真實世界裡的各種問題。創造更多美好的人事物。讓這個地球、這個世界變成每一個人心目中的理想鄉。
              </div>
              <div className="showBtns">
                <div className="showBtn bgPurple textWhite">購買票券</div>
                <div className="showBtn borPurple textPurple">收藏展覽</div>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionContainer">
          <div className="sectionContainerTitle">直播回顧</div>
          <div className="rply">
            <div className="rplyDetails">
              <div className="rplyTitle">
                開幕對談<span className="split"> | </span>藝術展演巡禮
              </div>
              <div className="rplyAutherImg" />
              <div className="rplyAutherTitle">
                台北現代聯合總監<span className="split"> | </span>{" "}
                <div className="autherName"> Ken Hsu </div>
              </div>
              <div className="rplyAutherDesc">
                獨家由藝術家、策劃人、畫廊總監帶您欣賞台北藝術特展，感受雕塑、展演及當代日常文化之間微妙的關係。
              </div>
              <div className="watchBtn">點此觀看</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
