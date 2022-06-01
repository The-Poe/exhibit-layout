import React from "react";
import "./Checkout3.scss";
export function Checkout3() {
  return (
    <>
      <div className="chkout3Container">
        <div className="sectionProgress">
          <div className="progress"></div>
          <div className="progessStatuses">
            <div className="progessStatus">
              <div className="progressDot bgPink"></div>確認訂單
            </div>
            <div className="progessStatus">
              <div className="progressDot bgPink"></div>填寫訂單資訊
            </div>
            <div className="progessStatus">
              <div className="progressDot bgPink"></div>填寫付款資訊
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
        <div className="rewind">
          <div className="rewindBtn borPurple textPurple">返回</div>
        </div>
        <div className="chkoutCustomInfo">
          <div className="customerFormWrapper">
            <div className="formTitle">付款資訊</div>
            <form action="">
              <div class="formField">
                <label for="credit">信用卡帳號</label>
                <br />
                <input
                  type="text"
                  name="credit"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                ></input>
              </div>
              <div class="formField">
                <label for="validDate">有效日期</label>
                <br />
                <input
                  type="date"
                  name="validDate"
                  placeholder="(MM/YY)"
                ></input>
              </div>
              <div class="formField">
                <label for="security">安全碼</label>
                <br />
                <input
                  type="password"
                  name="security"
                  max="3"
                  placeholder="請輸入安全碼"
                ></input>
              </div>
            </form>
          </div>
          <div className="subTotalSection">
            <div className="summing">
              <span className="subtotalText mh">小計</span>
              <span className="subtotalInfo mh">
                <span className="infoCurrency">NT$</span>
                <span className="infoTotal">1050</span>
              </span>
            </div>
            <div className="summing">
              <span className="subtotalText mh">折扣</span>
              <span className="subtotalInfo mh">
                <span className="infoCurrency">-NT$</span>
                <span className="infoTotal">50</span>
              </span>
            </div>
            <div className="summing total">
              <span className="subtotalText mh">總金額</span>
              <span className="subtotalInfo mh">
                <span className="infoCurrency">NT$</span>
                <span className="infoTotal">1000</span>
              </span>
            </div>
          </div>
        </div>

        <div className="chkoutConfirm">
          <a href="/checkout4">
            <div className="BtnNext textWhite bgPurple">下一步</div>
          </a>
        </div>
      </div>
    </>
  );
}
