import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Cart from "../../features/cart/Cart";
import LogInSignUp from "components/features/auth/LogInSignUp";
import UserProfile from "components/features/userProfile/UserProfile";

const Header = () => {
  return (
    <>
      <header className={`${styles.headerContainer}`}>
        <h1 className={`${styles.title}`}>
          <NavLink to="/">EXHIBINECTION</NavLink>
        </h1>
        <UserProfile />
        <LogInSignUp />
        <Cart />
      </header>
      <div className={`${styles.headerPad}`}></div>
    </>
  );
};

export default Header;
