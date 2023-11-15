import React from "react";
import "../components/gameInfo/GameInfo.css";
import MainBlock from "../components/gameInfo/MainBlock";

import GameInfoContent from "../components/gameInfo/GameInfoContent";
import StoryContent from "../components/gameInfo/StoryContent";
import Invasions from "../components/gameInfo/Invasions";

const GameInfo = () => {
  return (
    <div>
      <div className="wrapper_game-info__block">
        <MainBlock />
        <GameInfoContent />
        <StoryContent />
        <Invasions />
      </div>
    </div>
  );
};

export default GameInfo;
