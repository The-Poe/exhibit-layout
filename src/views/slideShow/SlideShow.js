import React from "react";
import "./SlideShow.scss";

export function SlideShow() {
  return (
    <section className="slideShow">
      <div className="slideTitleContainer">
        <div className="slideTitle">台北當代藝術展</div> {/* 之後要資料帶入 */}
        <div className="slideDate">01 JUN - 31 OCT</div> {/* 之後要資料帶入 */}
        <div className="buttonContainer">
          <div className="slideButton bgPink">購買票券</div>
          <div className="slideButton borWhite">詳細資訊</div>
        </div>
      </div>
    </section>
  );
}
