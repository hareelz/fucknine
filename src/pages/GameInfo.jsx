import React from "react";
import "../components/GameInfo.css";
import VideoFireLine from "../assets/fire-line-bot-loop.mp4";
import VideoFireLine2 from "../assets/fire-line-top-loop.mp4";
import KombatPack from "../assets/kombat-pack.mp4";

const GameInfo = () => {
  return (
    <div>
      <div className="wrapper_game-info__block">
        <div className="wrapper-block_content">
          <span>
            <p className="main-block__desc">JUCTICE. THEIR WAY.</p>
            <h1 className="main-block__title">KOMBAT PACK</h1>
          </span>
          <span>
            <p className="desc__heroes">
              Introducing your roster for the Mortal Kombat 1 Kombat Pack
              fighters.
            </p>
            <h2 className="title__name-heroes">
              TAKEDA • QUAN CHI • ERMAC • PEACEMAKER • HOMELANDER • OMNI-MAN
            </h2>
          </span>
          <span className="kombat-pack__block">
            <video
              className="kombat-pack__video"
              src={KombatPack}
              autoPlay
              loop
              playsInline
            ></video>
          </span>
        </div>

        <div className="game-info__main-block"></div>
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
    </div>
  );
};

export default GameInfo;
