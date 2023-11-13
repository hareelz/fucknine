import React from "react";
import VideoFireLine from "../assets/fire-line-bot-loop.mp4";
import VideoFireLine2 from "../assets/fire-line-top-loop.mp4";
const Content = () => {
  return (
    <div>
      <div className="content__block">
        <div className="fire-block">
          <video
            className="content_block__fire-bot"
            src={VideoFireLine}
            autoPlay
            loop
            playsInline
          ></video>
        </div>

        <div className="fire-img-block-bot">
          <img
            className="fire-top-img-bot"
            src="https://cdn-mk1.mortalkombat.com/static/fire-line-v2.webp"
            alt=""
          />
        </div>

        <div className="game-info_block__content"></div>

        <div className="fire-img-block-top">
          <img
            className="fire-top-img-top"
            src="https://cdn-mk1.mortalkombat.com/static/fire-line-v1.webp"
            alt=""
          />
        </div>
        <div className="fire-block-2">
          <video
            className="content_block__fire-top"
            src={VideoFireLine2}
            autoPlay
            loop
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Content;
