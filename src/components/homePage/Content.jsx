import React from "react";
import "../homePage/ContentHomePage.css";

const Content = () => {
  return (
    <div>
      <div className="home-page-content__block">
        <div className="fire-block">
          <video
            className="home-page-content__fire-bot"
            src="https://cdn-mk1.mortalkombat.com/static/fire-line-bot-loop.mp4"
            // autoPlay
            loop
            // muted
            playsInline
          ></video>
        </div>

        <div className="home-page_block__content">
          <div className="home-page-content_left-block">
            <div className="left-block_content">
              <img
                className=" left-block_img"
                src="https://cdn-mk1.mortalkombat.com/home/sigil.webp"
                alt="logo_mk"
              />
              <h1 className="left-block-title">IT’S IN OUR BLOOD</h1>
              <h2 className="left-block-subtitle">
                Discover a reborn Mortal Kombat Universe created by the Fire God
                Liu Kang.
              </h2>
              <p className="left-block-desc">
                Mortal Kombat 1 ushers in a new era of the iconic franchise with
                a new fighting system, game modes, and fatalities!
              </p>
            </div>
          </div>
          <div className="home-page-content_right-block">
            <div className="right-block_img_block">
              <img
                className="right-block_img"
                src="https://cdn-mk1.mortalkombat.com/home/liu-kang-wfire.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="fire-block-2">
          <video
            className="home-page-content__fire-top"
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

export default Content;
// https://cdn-mk1.mortalkombat.com/home/sigil.webp
// https://cdn-mk1.mortalkombat.com/home/liu-kang-wfire.webp
