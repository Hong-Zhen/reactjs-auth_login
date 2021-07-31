import React from "react";
import Footer from "../components/HomeFooter";
import HeroSection from "../components/HomeHeroSection";
import Navbar from "../components/Navbar";
// import "../css/Homepage.css";

const Homepage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Homepage;
