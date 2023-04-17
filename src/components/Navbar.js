import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaMicrophone,
  FaChartBar,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-menu">
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/math"
                className="nav-links"
                onClick={closeMobileMenu}
                role="menuitem"
              >
                Math
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/science"
                className="nav-links"
                onClick={closeMobileMenu}
                role="menuitem"
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/trivia"
                className="nav-links"
                onClick={closeMobileMenu}
                role="menuitem"
              >
                Trivia
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/year"
                className="nav-links"
                onClick={closeMobileMenu}
                role="menuitem"
              >
                Year
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/numbers"
                className="nav-links"
                onClick={closeMobileMenu}
                role="menuitem"
              >
                Numbers
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-icons">
          <FaChartBar className="navbar-icon" />
          <FaMicrophone className="navbar-icon" />
          <FaSearch className="navbar-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
