import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export function Navbar() {
  return (
    <div>
      <nav className="navigation">
        <ul>
          <NavLink exact to="/" activeClassName="activeTab" className="navTabs">
            <li>
              Home
              {/* <a href="/">Home</a> */}
            </li>
          </NavLink>
          <NavLink to="/about" activeClassName="activeTab" className="navTabs">
            <li>
              About
              {/* <a href="/about">About</a> */}
            </li>
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="activeTab"
            className="navTabs"
          >
            <li>
              Contact
              {/* <a href="/contact">Contact</a> */}
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
