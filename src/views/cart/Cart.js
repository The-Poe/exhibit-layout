import React from "react";
import "./Cart.scss";
import ticketIcon from "../../images/ticketIcon.svg";

function toggleCart(e) {
  const cartList = e.target.parentElement.nextElementSibling;
  cartList.classList.toggle("opacity0");
  cartList.classList.toggle("opacity1");
  cartList.classList.toggle("invisible");
}

export function Cart() {
  return (
    <div className="cart">
      <div className="itemNumberContainer">
        <div className="itemNumber">3</div>
      </div>
      <div className="cartIcon" onClick={toggleCart}>
        <img src={ticketIcon} alt="" />
      </div>
      <div className="cartList opacity0 invisible">
        <div className="cartTitle">Cart List</div>
        <div className="cartItems">
          <div className="cartItem">
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
              <div className="itemInfoPrice">
                <span className="infoCurrency">NT$</span>
                <span className="infoTotal">350</span>
              </div>
            </div>
            <div className="itemAdjust">
              <div className="minus mh"></div>
              <div className="itemQty mh">01</div>
              <div className="plus mh">+</div>
            </div>
          </div>
          {/* repeat vvvvv */}
          <div className="cartItem">
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
              <div className="itemInfoPrice">
                <span className="infoCurrency">NT$</span>
                <span className="infoTotal">350</span>
              </div>
            </div>
            <div className="itemAdjust">
              <div className="minus mh"></div>
              <div className="itemQty mh">01</div>
              <div className="plus mh">+</div>
            </div>
          </div>
          <div className="cartItem">
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
              <div className="itemInfoPrice">
                <span className="infoCurrency">NT$</span>
                <span className="infoTotal">350</span>
              </div>
            </div>
            <div className="itemAdjust">
              <div className="minus mh"></div>
              <div className="itemQty mh">01</div>
              <div className="plus mh">+</div>
            </div>
          </div>
          {/* repeat ^^^^^*/}
        </div>
        <div className="cartPrice">
          <div className="cartPrice2">
            <span className="cartSpan pr2em">小記</span>
            <span className="cartSpan ">NT$</span>
            <span className="cartSpan ">1050</span>
          </div>
          <div className="checkoutBtn bgWhite borPurple textPurple">
            <a href="/checkout1">前往結帳</a>
          </div>
        </div>
      </div>
    </div>
  );
}
