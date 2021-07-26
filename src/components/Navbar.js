import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [currNav, setCurrNav] = useState();
  useEffect(() => {
    console.log(`${currNav} clicked`);
  });
  return (
    <nav className="nav-container">
      <Link to="/" exact>
        <img src="/logo192.png" className="nav-img" alt="Logo" />
      </Link>
      <div className="nav-links">
        <Link
          to="/"
          exact
          className="nav-link"
          style={{ textDecoration: "none" }}
          onClick={() => setCurrNav("Home")}
        >
          Home
        </Link>
        <Link
          to="/"
          exact
          className="nav-link"
          style={{ textDecoration: "none" }}
          onClick={() => setCurrNav("About Me")}
        >
          About
        </Link>
        <Link
          to="/"
          exact
          className="nav-link"
          style={{ textDecoration: "none" }}
          onClick={() => setCurrNav("Reviews")}
        >
          Reviews
        </Link>
      </div>
      <Link to="/login">
        <button className="fwd-btn" title="Login">
          Login
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
