import React from "react";
import "../components/gameInfo/GameInfo.css";
import MainBlock from "../components/gameInfo/MainBlock";
import GameInfoContent from "../components/gameInfo/GameInfoContent";
import StoryContent from "../components/gameInfo/StoryContent";
import ParallaxComponent from "../components/gameInfo/ParallaxEffect";
import Footer from "../components/Footer";
import "../App.css";

const GameInfo = () => {
  return (
    <div>
      <div className="wrapper_game-info__block">
        <MainBlock />
        <GameInfoContent />
        <StoryContent />
        <ParallaxComponent />
        <Footer />
      </div>
    </div>
  );
};

export default GameInfo;
