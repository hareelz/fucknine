import React from "react";
import { useNavigate } from "react-router-dom";

const BtnBuyNow = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="btn-buy-now__block">
        <div className="game-info_block__content"></div>

        <div className="fire-block-2">
          <video
            className="btn-buy-now__fire-top"
            src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        <div className="logo_block">
          <img
            className="logo_text"
            src="https://cdn-mk1.mortalkombat.com/static/mk1-logo-tm.webp"
            alt=""
          />
          <img
            className="logo_img"
            src="https://cdn-mk1.mortalkombat.com/home/sigil.webp"
            alt=""
          />
        </div>
        <button onClick={() => navigate("/card")} className="btn_buy-now">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default BtnBuyNow;
