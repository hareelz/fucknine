import React from "react";

const MainBlock = () => {
  return (
    <div>
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
            src="https://cdn-mk1.mortalkombat.com/media/kombat-pack.mp4"
            autoPlay
            loop
            playsInline
          ></video>
        </span>
      </div>
      <div className="game-info__main-block"></div>
    </div>
  );
};

export default MainBlock;
