import React from "react";
import "../components/gameInfo/GameInfo.css";
import MainBlock from "../components/gameInfo/MainBlock";

import GameInfoContent from "../components/gameInfo/GameInfoContent";
import StoryContent from "../components/gameInfo/StoryContent";
import Invasions from "../components/gameInfo/Invasions";
import ParallaxComponent from "../components/gameInfo/ParallaxEffect";
import BtnBuyNow from "../components/gameInfo/BtnBuyNow";
import Footer from "../components/Footer";
import "../adaptive/1440px.css";

const GameInfo = () => {
  return (
    <div>
      <div className="wrapper_game-info__block">
        <MainBlock />
        <GameInfoContent />
        <StoryContent />
        <ParallaxComponent />
      </div>
    </div>
  );
};

export default GameInfo;
