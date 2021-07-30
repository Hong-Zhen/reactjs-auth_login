import React from "react";
import "../css/HeroSection.css";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img
        className="hero-img"
        src="/Images/ntu-north-spine.jpg"
        alt="NTU North Spine"
      />
      <h2>Study Smart</h2>
      <p>The Ultimate University Life Hacks</p>
      <div className="hero-btns">
        <Link to="/signup" style={{ textDecoration: "none" }} title="Sign Up">
          <button
            className="hero-btn"
            style={{ backgroundColor: "transparent", color: "black" }}
          >
            Sign Up{" "}
          </button>
        </Link>
        <Link to="login" style={{ textDecoration: "none" }} title="Login">
          <button className="hero-btn">
            <div style={{ paddingRight: "5px" }}>Login</div>
            <FaArrowCircleRight hero-btn-icon />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
