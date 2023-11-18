import React, { useEffect, useState } from "react";

const ParallaxContent = () => {
  const [translateY, setTranslateY] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const newTranslateY = scrolled * 0.4;
    setTranslateY(newTranslateY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className="wrapper-block_kombat-pack"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <div className="kombat-pack-block_content">
          <h2 className="kombat-pack-block_title">JUCTICE. THEIR WAY.</h2>
          <h3 className="kombat-pack-block_subtitle">KOMBAT PACK</h3>
          <p className="kombat-pack-block_desc">
            Introducing your roster for the Mortal Kombat 1 Kombat Pack
            fighters.
          </p>
          <p className="kombat-pack-block_desc-name">
            TAKEDA • QUAN CHI • ERMAC • PEACEMAKER • HOMELANDER • OMNI-MAN
          </p>
          <span className="kombat-pack-block_video-content">
            <video
              className="kombat-pack-block__video"
              src="https://cdn-mk1.mortalkombat.com/media/kombat-pack.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ParallaxContent;
<div className="wrapper-block_content">
  <span>
    <p className="main-block__desc">JUCTICE. THEIR WAY.</p>
    <h1 className="main-block__title">KOMBAT PACK</h1>
  </span>
  <span>
    <p className="desc__heroes">
      Introducing your roster for the Mortal Kombat 1 Kombat Pack fighters.
    </p>
    <h2 className="title__name-heroes">
      TAKEDA • QUAN CHI • ERMAC • PEACEMAKER • HOMELANDER • OMNI-MAN
    </h2>
  </span>
  <span className="kombat-pack__block">
    <div className="bg-kombat-pack">
      <video
        className="kombat-pack__video"
        src="https://cdn-mk1.mortalkombat.com/media/kombat-pack.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  </span>
</div>;
