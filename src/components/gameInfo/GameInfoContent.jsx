import React from "react";

const GameInfoContent = () => {
  return (
    <div>
      <div className="content__block">
        <div className="fire-block">
          <video
            className="content_block__fire-bot"
            src="https://cdn-mk1.mortalkombat.com/static/fire-line-bot-loop.mp4"
            autoPlay
            loop
            // muted
            playsInline
          ></video>
        </div>

        <div className="fire-img-block-bot"></div>

        <div className="game-info_block__content"></div>

        <div className="fire-img-block-top"></div>
        <div className="fire-block-2">
          <video
            className="content_block__fire-top"
            src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
            autoPlay
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
