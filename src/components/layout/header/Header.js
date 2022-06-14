import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Cart from "../../features/cart/Cart";
import LogInSignUp from "components/features/auth/LogInSignUp";

const Header = () => {
  return (
    <>
      <header className={`${styles.headerContainer}`}>
        <h1 className={`${styles.title}`}>
          <NavLink to="/">EXHIBINECTION</NavLink>
        </h1>
        <LogInSignUp />
        <Cart />
      </header>
      <div className={`${styles.headerPad}`}></div>
    </>
  );
};

export default Header;
