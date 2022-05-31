import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import ticketIcon from "./ticketIcon.svg";

// TODO:sign mobile icon
export function Header() {
  return (
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
      <div className="cart">
        <img src={ticketIcon} alt="" />
      </div>
    </header>
  );
}
