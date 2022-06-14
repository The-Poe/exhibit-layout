import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className={`${styles.navBar}`}>
        <div className={`${styles.navBtn}`}>
          <NavLink to="/product">音樂</NavLink>
        </div>
        <div className={`${styles.navBtn}`}>
          <NavLink to="/product">戲劇</NavLink>
        </div>
        <div className={`${styles.navBtn}`}>
          <NavLink to="/product">設計</NavLink>
        </div>
        <div className={`${styles.navBtn}`}>
          <NavLink to="/product">藝術</NavLink>
        </div>
        <div className={`${styles.navBtn}`}>
          <NavLink to="/product">美食</NavLink>
        </div>
        <div className={`${styles.navBtn}`}>
          <NavLink to="/product">旅遊</NavLink>
        </div>
        <div className={`${styles.navBtn}`}>
          <NavLink to="/product">電影</NavLink>
        </div>
        <div className={`${styles.navBtn}`}>
          <NavLink to="/product">親子</NavLink>
        </div>
        <div className={`${styles.navBtn}`}>
          <NavLink to="/product">期間限定</NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
