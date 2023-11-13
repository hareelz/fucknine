import React from "react";
import "../components/gameInfo/GameInfo.css";
import MainBlock from "../components/gameInfo/MainBlock";

import GameInfoContent from "../components/gameInfo/GameInfoContent";

const GameInfo = () => {
  return (
    <div>
      <div className="wrapper_game-info__block">
        <MainBlock />
        <GameInfoContent />
      </div>
    </div>
  );
};

export default GameInfo;
