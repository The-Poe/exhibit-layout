import React from "react";
import "./Checkout4.scss";
import checkIcon from "../../images/checkIcon.svg";
export function Checkout4() {
  return (
    <>
      <div className="chkout4Container">
        <div className="iconContainer">
          <div className="checkIcon">
            <img src={checkIcon} alt="" />
          </div>
          <div className="checkText">完成訂購</div>
        </div>
        <div className="confirmText1">您的展覽憑證代碼為:</div>
        <div className="ticketCode">qr147352</div>
        <div className="confirmText2">
          恭喜您已完成「2020台味設計展」的購票手續，請於
          <span className="startDate">2020/06/01</span>　~　
          <span className="endDate">2020/10/31</span>
          於展覽入口頁面輸入「展覽憑證代碼」，經驗證無誤即可瀏覽。
        </div>
        <div className="btnsContainer">
          <a href="/" className="btn borPurple bgWhite textPurple">
            繼續瀏覽
          </a>
          <a href="/product" className="btn bgPink textWhite">
            看展去
          </a>
        </div>
      </div>
    </>
  );
}
