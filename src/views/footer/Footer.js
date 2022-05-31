import React from "react";
import "./Footer.scss";
export function Footer() {
  return (
    <>
      <footer className="footerContainer">
        <div className="subscContainer">
          <div className="subscTexts">
            <div className="subscText">想收到最新消息嗎?</div>
            <div className="subscText">快訂閱我們!</div>
            <div className="subscInputContainer">
              <div className="form-group">
                <input
                  className="form-field"
                  type="email"
                  placeholder="輸入您的電子信箱"
                ></input>
                <span>訂閱</span>
              </div>
              {/* <div className="subscInputs">
                <input
                  className="inputEmail"
                  type="text"
                  placeholder="輸入您的電子信箱"
                />
                <div className="inputEmailsent">訂閱</div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="infoBar">
          <div className="infoTitContainer">
            <div className="iSubTitle iSub1">EXHIBINECTION</div>
            <div className="iSubTitle iSub2">
              &copy;2020.All Rights Reserved.
            </div>
          </div>
          {/* mobile版隱藏 VVV */}
          <div className="sign">
            <a href="/#">Sign In</a>
          </div>
          <div className="sign">
            <a href="/#">Sign up</a>
          </div>
          {/* mobile版隱藏 ^^^*/}
        </div>
      </footer>
    </>
  );
}
