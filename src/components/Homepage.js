import React from "react";
import Navbar from "./Navbar";
import "../css/Homepage.css";

const Homepage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div>Hero container</div>
      <footer>Footer container</footer>
    </div>
  );
};

export default Homepage;
