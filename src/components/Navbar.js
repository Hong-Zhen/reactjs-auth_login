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
        Logo Image
      </Link>
      <div className="nav-menu">
        <li>
          <Link to="/" exact onClick={() => setCurrNav("Home")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" exact onClick={() => setCurrNav("About Me")}>
            About me
          </Link>
        </li>
        <li>
          <Link to="/" exact onClick={() => setCurrNav("Reviews")}>
            Reviews
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
