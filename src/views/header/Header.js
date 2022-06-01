import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { Cart } from "../cart/Cart";

// TODO:sign mobile icon
export function Header() {
  return (
    <>
      <header className="headerContainer">
        <h1 className="title">
          <NavLink to="/">EXHIBINECTION</NavLink>
        </h1>
        <div className="sign">
          <a href="/#">Sign In</a>
        </div>
        <div className="sign">
          <a href="/#">Sign up</a>
        </div>
        <Cart />
      </header>
      <div className="headerPad"></div>
    </>
  );
}
