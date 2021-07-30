import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const checkClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const desktopMode = () => {
    if (window.innerWidth <= 950) {
      // Mobile Mode
      setButton(false);
    } else {
      // Desktop Mode
      setButton(true);
    }
  };

  useEffect(() => {
    desktopMode();
  }, []);

  window.addEventListener("resize", desktopMode);

  return (
    <nav className="nav-container">
      <Link to="/" exact onClick={closeMobileMenu}>
        <img src="/logo192.png" className="nav-img" alt="Logo" />
      </Link>

      <ul className={click ? "nav-menu nav-menu-mobile" : "nav-menu"}>
        <li className="nav-items">
          <Link
            to="/"
            exact
            className={click ? "nav-link-mobile" : "nav-link"}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            exact
            className={click ? "nav-link-mobile" : "nav-link"}
            onClick={closeMobileMenu}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            exact
            className={click ? "nav-link-mobile" : "nav-link"}
            onClick={closeMobileMenu}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/signup"
            exact
            className="nav-link-mobile nav-btn-mobile"
            onClick={closeMobileMenu}
            style={{ border: "2px solid black" }}
          >
            Login
          </Link>
        </li>
      </ul>
      <Link to="/login">
        {button && (
          <button className="fwd-btn" title="Login">
            Login
          </button>
        )}
      </Link>
      <div className="nav-icon" onClick={checkClick}>
        {click ? (
          <FaTimes className="cross-icon" />
        ) : (
          <FaBars className="bar-icon" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
