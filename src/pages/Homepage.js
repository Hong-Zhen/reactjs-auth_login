import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import "../css/Homepage.css";

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
