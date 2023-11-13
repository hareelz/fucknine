import React from "react";
import "../components/gameInfo/GameInfo.css";
import MainBlock from "../components/gameInfo/MainBlock";
import Content from "../components/homePage/Content";

const GameInfo = () => {
  return (
    <div>
      <div className="wrapper_game-info__block">
        <MainBlock />
        <Content />
      </div>
    </div>
  );
};

export default GameInfo;
