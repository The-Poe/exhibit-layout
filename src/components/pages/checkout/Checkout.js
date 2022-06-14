import { useState } from "react";
import styles from "./Checkout.module.scss";

const Checkout = () => {
  const [checkoutStatus, setCheckoutStatus] = useState(1);

  const nextStepHandler = () => {
    if (checkoutStatus < 3) setCheckoutStatus(checkoutStatus + 1);
    console.log("checkoutStatus:", checkoutStatus);
  };

  const lastStepHandler = () => {
    if (checkoutStatus > 1) setCheckoutStatus(checkoutStatus - 1);
    console.log("checkoutStatus:", checkoutStatus);
  };

  return (
    <>
      <div className={`${styles.chkoutContainer}`}>
        <div className={`${styles.sectionProgress}`}>
          <div className={`${styles.progress}`}></div>
          <div className={`${styles.progessStatuses}`}>
            <div className={`${styles.progessStatus}`}>
              <div className={`${styles.progressDot} bgPink`}></div>
              確認訂單
            </div>
            <div className={`${styles.progessStatus}`}>
              <div
                className={`${styles.progressDot} ${
                  checkoutStatus >= 2 ? "bgPink" : "bgWhite"
                } `}
              ></div>
              填寫訂單資訊
            </div>
            <div className={`${styles.progessStatus}`}>
              <div
                className={`${styles.progressDot} ${
                  checkoutStatus >= 3 ? "bgPink" : "bgWhite"
                }`}
              ></div>
              填寫付款資訊
            </div>
            <div className={`${styles.progessStatus}`}>
              <div
                className={`${styles.progressDot} ${
                  checkoutStatus >= 4 ? "bgPink" : "bgWhite"
                }`}
              ></div>
              完成訂購
            </div>
          </div>
        </div>
        <div className={`${styles.chkoutContent}`}>
          <div className={`${styles.chkoutItems}`}>
            <div className={`${styles.chkoutItem}`}>
              <div className={`${styles.deleteItemWrapper}`}>
                <div className={`${styles.deleteItem}`}>✖</div>
              </div>
              <div
                className={`${styles.itemPic}`}
                style={{
                  width: "12vmax",
                  height: "auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1545178803-4056771d60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
                }}
              ></div>
              <div className={`${styles.itemInfo}`}>
                <div className={`${styles.itemInfoTitle}`}>2020台味設計展</div>
                <div className={`${styles.itemInfoDate}`}>
                  <span className={`${styles.startDay}`}>01</span>
                  <span className={`${styles.startMon}`}>JUN</span>
                  <div className={`${styles.inlineBar}`}></div>
                  <span className={`${styles.endDay}`}>31</span>
                  <span className={`${styles.endMon}`}>OCT</span>
                </div>
                <div className={`${styles.itemInfoType}`}>全票</div>
              </div>
              <div className={`${styles.itemInfoPrice}`}>
                <span className={`${styles.infoCurrency}`}>NT$</span>
                <span className={`${styles.infoTotal}`}>350</span>
              </div>
              <div className={`${styles.itemAdjust}`}>
                <div className={`${styles.minusWrapper} mh`}>
                  <div className={`${styles.minus}`}></div>
                </div>
                <div className={`${styles.itemQty} mh`}>01</div>
                <div className={`${styles.plus} mh`}>+</div>
              </div>
            </div>
            {/* repeate vvv */}
            <div className={`${styles.chkoutItem}`}>
              <div className={`${styles.deleteItemWrapper}`}>
                <div className={`${styles.deleteItem}`}>✖</div>
              </div>
              <div
                className={`${styles.itemPic}`}
                style={{
                  width: "12vmax",
                  height: "auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1545987796-b199d6abb1b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
                }}
              ></div>
              <div className={`${styles.itemInfo}`}>
                <div className={`${styles.itemInfoTitle}`}>No.22線上設計展</div>
                <div className={`${styles.itemInfoDate}`}>
                  <span className={`${styles.startDay}`}>01</span>
                  <span className={`${styles.startMon}`}>JUN</span>
                  <div className={`${styles.inlineBar}`}></div>
                  <span className={`${styles.endDay}`}>31</span>
                  <span className={`${styles.endMon}`}>OCT</span>
                </div>
                <div className={`${styles.itemInfoType}`}>全票</div>
              </div>
              <div className={`${styles.itemInfoPrice}`}>
                <span className={`${styles.infoCurrency}`}>NT$</span>
                <span className={`${styles.infoTotal}`}>350</span>
              </div>
              <div className={`${styles.itemAdjust}`}>
                <div className={`${styles.minusWrapper} mh`}>
                  <div className={`${styles.minus}`}></div>
                </div>
                <div className={`${styles.itemQty} mh`}>01</div>
                <div className={`${styles.plus} mh`}>+</div>
              </div>
            </div>
            <div className={`${styles.chkoutItem}`}>
              <div className={`${styles.deleteItemWrapper}`}>
                <div className={`${styles.deleteItem}`}>✖</div>
              </div>
              <div
                className={`${styles.itemPic}`}
                style={{
                  width: "12vmax",
                  height: "auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1596649300028-340ad0ec6146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
                }}
              ></div>
              <div className={`${styles.itemInfo}`}>
                <div className={`${styles.itemInfoTitle}`}>高雄設計展</div>
                <div className={`${styles.itemInfoDate}`}>
                  <span className={`${styles.startDay}`}>01</span>
                  <span className={`${styles.startMon}`}>JUN</span>
                  <div className={`${styles.inlineBar}`}></div>
                  <span className={`${styles.endDay}`}>31</span>
                  <span className={`${styles.endMon}`}>OCT</span>
                </div>
                <div className={`${styles.itemInfoType}`}>全票</div>
              </div>
              <div className={`${styles.itemInfoPrice}`}>
                <span className={`${styles.infoCurrency}`}>NT$</span>
                <span className={`${styles.infoTotal}`}>350</span>
              </div>
              <div className={`${styles.itemAdjust}`}>
                <div className={`${styles.minusWrapper} mh`}>
                  <div className={`${styles.minus}`}></div>
                </div>
                <div className={`${styles.itemQty} mh`}>01</div>
                <div className={`${styles.plus} mh`}>+</div>
              </div>
            </div>
            {/* repeate ^^^ */}
          </div>
        </div>
        <div className={`${styles.chkoutCustomInfo}`}>
          <div className={`${styles.customerFormWrapper}`}>
            {checkoutStatus === 2 && (
              <>
                <div className={`${styles.formTitle}`}>訂購人資訊</div>
                <form action="">
                  <div className={`${styles.formField}`}>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                    ></input>
                  </div>
                  <div className={`${styles.formField}`}>
                    <label htmlFor="name">姓名</label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      placeholder="請輸入姓名"
                    ></input>
                  </div>
                  <div className={`${styles.formField}`}>
                    <label htmlFor="contact">連絡電話</label>
                    <br />
                    <input
                      type="tel"
                      name="contact"
                      placeholder="請輸入電話"
                    ></input>
                  </div>
                  <div className={`${styles.formField}`}>
                    <label htmlFor="coupon">優惠碼</label>
                    <br />
                    <input
                      type="text"
                      name="coupon"
                      placeholder="TG87526"
                    ></input>
                    <div className={`${styles.isCoupleEffect}`}>
                      優惠碼已生效
                    </div>
                  </div>
                </form>
              </>
            )}
            {checkoutStatus === 3 && (
              <>
                <div className={`${styles.formTitle}`}>付款資訊</div>
                <form action="">
                  <div className={`${styles.formField}`}>
                    <label htmlFor="credit">信用卡帳號</label>
                    <br />
                    <input
                      type="text"
                      name="credit"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                    ></input>
                  </div>
                  <div className={`${styles.formField}`}>
                    <label htmlFor="validDate">有效日期</label>
                    <br />
                    <input
                      type="date"
                      name="validDate"
                      placeholder="(MM/YY)"
                    ></input>
                  </div>
                  <div className={`${styles.formField}`}>
                    <label htmlFor="security">安全碼</label>
                    <br />
                    <input
                      type="password"
                      name="security"
                      max="3"
                      placeholder="請輸入安全碼"
                    ></input>
                  </div>
                </form>
              </>
            )}
          </div>
          <div className={`${styles.subTotalSection}`}>
            <div className={`${styles.summing}`}>
              <span className={`${styles.subtotalText} mh`}>小計</span>
              <span className={`${styles.subtotalInfo} mh`}>
                <span className={`${styles.infoCurrency}`}>NT$</span>
                <span className={`${styles.infoTotal}`}>1050</span>
              </span>
            </div>
            {checkoutStatus !== 1 && (
              <>
                <div className={`${styles.summing}`}>
                  <span className={`${styles.subtotalText} mh`}>折扣</span>
                  <span className={`${styles.subtotalInfo} mh`}>
                    <span className={`${styles.infoCurrency}`}>-NT$</span>
                    <span className={`${styles.infoCurrency}`}>50</span>
                  </span>
                </div>
                <div className={`${styles.summing} total`}>
                  <span className={`${styles.subtotalText} mh`}>總金額</span>
                  <span className={`${styles.subtotalInfo} mh`}>
                    <span className={`${styles.infoCurrency}`}>NT$</span>
                    <span className={`${styles.infoTotal}`}>1000</span>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.chkoutConfirm}`}>
        <div
          onClick={lastStepHandler}
          className={`${checkoutStatus === 1 && "invisible"} ${
            styles.btnRewind
          }   borPurple textPurple`}
        >
          返回
        </div>
        {checkoutStatus < 3 && (
          <div
            onClick={nextStepHandler}
            className={`${styles.btnNext} textWhite bgPurple`}
          >
            下一步
          </div>
        )}
        {checkoutStatus === 3 && (
          <a
            href="/checkoutDone"
            className={`${styles.btnNext} textWhite bgPurple`}
          >
            下一步
          </a>
        )}
      </div>
    </>
  );
};
export default Checkout;
