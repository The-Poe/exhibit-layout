import React from "react";
import "./Guess.scss";

export function Guess() {
  return (
    <>
      <section className="sectionContainer">
        <div className="sectionContainerTitle">猜您也喜歡</div>
        <div className="guesses">
          <div className="guessItem">
            <a className="textBlack textNoUnderline " href="/detail">
              <div
                style={{
                  width: "100%",
                  height: "20vh",
                  background:
                    "no-repeat center center url(https://images.unsplash.com/photo-1566954979172-eaba308acdf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="guessTitle">No.22 線上設計展</div>
              <div className="guessPrice">$350</div>
            </a>
          </div>
          <div className="guessItem">
            <a className="textBlack textNoUnderline " href="/detail">
              <div
                style={{
                  width: "100%",
                  height: "20vh",
                  background:
                    "no-repeat center center url(https://images.unsplash.com/photo-1600141215810-ccd579383116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="guessTitle">No.22 線上設計展</div>
              <div className="guessPrice">$350</div>
            </a>
          </div>
          <div className="guessItem">
            <a className="textBlack textNoUnderline " href="/detail">
              <div
                className="guessPic"
                style={{
                  width: "100%",
                  height: "20vh",
                  background:
                    "no-repeat center center url(https://images.unsplash.com/photo-1567419099214-0dd03b43e8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="guessTitle">No.22 線上設計展</div>
              <div className="guessPrice">$350</div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
