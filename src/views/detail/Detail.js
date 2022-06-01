import React from "react";
import "./Detail.scss";
import fbIcon from "../../images/fbIcon.svg";
import { NavBar } from "../navBar/NavBar";
import { Guess } from "../guess/Guess";
import { Footer } from "../footer/Footer";

export function Detail() {
  return (
    <>
      <NavBar />
      <section className="detail">
        <div className="ticketInfo cardMargin">
          <div className="infoContent">
            <div
              className="infoPic"
              style={{
                backgroundSize: "cover",
                background:
                  "url(https://images.unsplash.com/photo-1545987796-b199d6abb1b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
              }}
            ></div>
            <div className="infoDate">
              <span className="dateSpan">01</span>
              <span className="dateSpan">JUN</span>
              <span className="sepBar">|</span>
              <span className="dateSpan">31</span>
              <span className="dateSpan">OCT</span>
            </div>
            <div>
              <div className="infoTitle">
                2020 台味設計展
                <span className="showFb">
                  <img src={fbIcon} alt="" />
                </span>
              </div>
              <div className="infoDesc">
                一年一度的台味設計展由經濟部工業局舉辦、台灣創意設計中心執行，每年，針對在地文化、及產業發展特色，運用設計思考全是新時代的意涵，並以展覽呈現在地設計。
              </div>
            </div>
          </div>
          <div className="ticketDetail">
            <div className="ticketOptions">
              <div className="ticketNumber">
                <div>
                  <span className="ticketText">-</span>
                  <span className="ticketText"> 01</span>
                  <span className="ticketText">+</span>
                </div>
                <span className="ticketText2">張</span>
              </div>
              <div className="sepLine"></div>
              {/*  */}
              <div className="ticketPrice">
                <div>
                  <span className="ticketText">NT$350</span>
                </div>
                <div className="ticketText2">票種</div>
                <div className="ticketypes">
                  <div className="ticketText3">學生</div>
                  <div className="ticketText3">全票</div>
                  <div className="ticketText3">愛心</div>
                </div>
              </div>
              {/*  */}
            </div>
            <div className="ticketBtns">
              <div className="ticketBtn bgWhite borPurple textPurple">
                <span className="inlBlk">收藏</span>
                <span className="inlBlk">展覽</span>
              </div>
              <div className="ticketBtn bgPink  textWhite">
                <span className="inlBlk">購買</span>
                <span className="inlBlk">票券</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="wallpaper cardMargin"
          style={{
            backgroundSize: "cover",
            background:
              "url(https://images.unsplash.com/photo-1546013848-afcad42624d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80)",
          }}
        ></div>
        <div
          className="detailPic cardMargin"
          style={{
            backgroundSize: "cover",
            background:
              "url(https://images.unsplash.com/photo-1494660084187-79afc14b7c0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80)",
          }}
        ></div>
        <div className="detailContent cardMargin">
          <div className="cntnTitle">藝饗宴</div>
          <div className="cntnTitle">Celebration of Style and Art</div>
          <div className="cntnDesc">
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
}
