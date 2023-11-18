import React from "react";
import Header from "../components/homePage/Header";
import Content from "../components/homePage/Content";
import CombatPackMobile from "../components/homePage/CombatPackMobile";
import ParallaxContent from "../components/homePage/ParallaxContent";
import FooterHome from "../components/FooterHome";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Content />
      <CombatPackMobile />
      <ParallaxContent />
      <FooterHome />
    </div>
  );
};

export default HomePage;
