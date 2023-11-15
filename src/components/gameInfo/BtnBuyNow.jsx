import React from "react";

const BtnBuyNow = () => {
  return (
    <div className="btn-buy-now__block">
      <div className="btn-buy-now__fire-block">
        <video
          className="btn-buy-now__fire-bot"
          src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
          autoPlay
          loop
          // muted
          playsInline
        ></video>
      </div>

      <div className="game-info_block__content"></div>

      <div className="btn-buy-now__fire-block-2">
        <video
          className="btn-buy-now__fire-top"
          src="https://cdn-mk1.mortalkombat.com/static/fire-line-bot-loop.mp4"
          autoPlay
          loop
          // muted
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default BtnBuyNow;
