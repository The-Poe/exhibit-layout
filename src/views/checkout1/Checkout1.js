import React from "react";
import "./Checkout1.scss";
export function Checkout1() {
  return (
    <>
      <div className="chkout1Container">
        <div className="sectionProgress">
          <div className="progress"></div>
          <div className="progessStatuses">
            <div className="progessStatus">
              <div className="progressDot bgPink"></div>確認訂單
            </div>
            <div className="progessStatus">
              <div className="progressDot bgWhite"></div>填寫訂單資訊
            </div>
            <div className="progessStatus">
              <div className="progressDot bgWhite"></div>填寫付款資訊
            </div>
            <div className="progessStatus">
              <div className="progressDot bgWhite"></div>完成訂購
            </div>
          </div>
        </div>
        <div className="chkoutContent">
          <div className="chkoutItems">
            <div className="chkoutItem">
              <div className="deleteItemWrapper">
                <div className="deleteItem">✖</div>
              </div>
              <div
                className="itemPic"
                style={{
                  width: "12vmax",
                  height: "12vmax",
                  background:
                    "no-repeat center center url(https://images.unsplash.com/photo-1545178803-4056771d60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="itemInfo">
                <div className="itemInfoTitle">2020台味設計展</div>
                <div className="itemInfoDate">
                  <span className="startDay mh">01</span>
                  <span className="startMon mh">JUN</span>
                  <div className="inlineBar"></div>
                  <span className="endDay mh">31</span>
                  <span className="endMon mh">OCT</span>
                </div>
                <div className="itemInfoType">全票</div>
              </div>
              <div className="itemInfoPrice">
                <span className="infoCurrency">NT$</span>
                <span className="infoTotal">350</span>
              </div>
              <div className="itemAdjust">
                <div className="minusWrapper">
                  <div className="minus mh"></div>
                </div>
                <div className="itemQty mh">01</div>
                <div className="plus mh">+</div>
              </div>
            </div>
            {/* repeat VVV */}
            <div className="chkoutItem">
              <div className="deleteItemWrapper">
                <div className="deleteItem">✖</div>
              </div>
              <div
                className="itemPic"
                style={{
                  width: "12vmax",
                  height: "12vmax",
                  background:
                    "no-repeat center center url(https://images.unsplash.com/photo-1545987796-b199d6abb1b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="itemInfo">
                <div className="itemInfoTitle">No.22線上設計展</div>
                <div className="itemInfoDate">
                  <span className="startDay mh">01</span>
                  <span className="startMon mh">JUN</span>
                  <div className="inlineBar"></div>
                  <span className="endDay mh">31</span>
                  <span className="endMon mh">OCT</span>
                </div>
                <div className="itemInfoType">全票</div>
              </div>
              <div className="itemInfoPrice">
                <span className="infoCurrency">NT$</span>
                <span className="infoTotal">350</span>
              </div>
              <div className="itemAdjust">
                <div className="minusWrapper">
                  <div className="minus mh"></div>
                </div>
                <div className="itemQty mh">01</div>
                <div className="plus mh">+</div>
              </div>
            </div>
            <div className="chkoutItem">
              <div className="deleteItemWrapper">
                <div className="deleteItem">✖</div>
              </div>
              <div
                className="itemPic"
                style={{
                  width: "12vmax",
                  height: "12vmax",
                  background:
                    "no-repeat center center url(https://images.unsplash.com/photo-1596649300028-340ad0ec6146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="itemInfo">
                <div className="itemInfoTitle">高雄設計展</div>
                <div className="itemInfoDate">
                  <span className="startDay mh">01</span>
                  <span className="startMon mh">JUN</span>
                  <div className="inlineBar"></div>
                  <span className="endDay mh">31</span>
                  <span className="endMon mh">OCT</span>
                </div>
                <div className="itemInfoType">全票</div>
              </div>
              <div className="itemInfoPrice">
                <span className="infoCurrency">NT$</span>
                <span className="infoTotal">350</span>
              </div>
              <div className="itemAdjust">
                <div className="minusWrapper">
                  <div className="minus mh"></div>
                </div>
                <div className="itemQty mh">01</div>
                <div className="plus mh">+</div>
              </div>
            </div>
            {/* repeate ^^^ */}
          </div>
        </div>
        <div className="chkoutConfirm">
          <a href="/" className="invisible btnRewind borPurple textPurple">
            返回
          </a>
          <a href="/checkout2" className="btnNext textWhite bgPurple">
            下一步
          </a>
        </div>
        <div className="chkoutCustomInfo">
          <div className="summing">
            <span className="subtotalText mh">小計</span>
            <span className="subtotalInfo mh">
              <span className="infoCurrency">NT$</span>
              <span className="infoTotal">1050</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
