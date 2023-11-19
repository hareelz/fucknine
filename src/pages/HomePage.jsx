import React from "react";
import Header from "../components/homePage/Header";
import Content from "../components/homePage/Content";
import ParallaxContent from "../components/homePage/ParallaxContent";
import FooterHome from "../components/FooterHome";
import "../adaptive/adaptive.css";

const HomePage = () => {
  return (
    <div className="wrapper_home-page">
      <Header />
      <Content />
      <ParallaxContent />
      <FooterHome />
    </div>
  );
};

export default HomePage;
