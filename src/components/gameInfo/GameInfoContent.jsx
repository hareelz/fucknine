import React from "react";
import "../gameInfo/GameInfoSlider.css";

const GameInfoContent = () => {
  return (
    <div>
      <div className="content__block">
        <div className="fire-block">
          <video
            className="content_block__fire-bot"
            src="https://cdn-mk1.mortalkombat.com/static/fire-line-bot-loop.mp4"
            // autoPlay
            loop
            // muted
            playsInline
          ></video>
        </div>

        <div className="game-info_block__content">
          <div className="content_left-block">
            <h4 className="left-block_title">KAMEO FIGHTERS</h4>
            <p className="left-block_desc">
              Kameos are a unique roster of partner fighters who assist the main
              fighter during matches, creating expanded gameplay possibilities
              for players. <br /> <br />
              Kameos dramatically enhance every fight, assisting teammates with
              their own Special Moves, Throws and defensive Breakers.
            </p>
          </div>
          <div className="content_right-block">
            <div className="img_block">
              {/* <img
                className="right-block_img"
                src="https://cdn-mk1.mortalkombat.com/game/kameo-screen-03-t.jpg"
                alt=""
              /> */}
            </div>
          </div>
        </div>

        <div className="fire-block-2">
          <video
            className="content_block__fire-top"
            src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
            // autoPlay
            loop
            // muted
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};

export default GameInfoContent;
