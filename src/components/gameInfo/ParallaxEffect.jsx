import React, { useEffect, useState } from "react";

const ParallaxComponent = () => {
  const [translateY, setTranslateY] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const newTranslateY = scrolled * 0.5;
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
        className="wrapper-block_invasions"
        style={{ transform: `translateY(${translateY}px)` }}
      >
        <div className="invasions-block_content">
          <div className="invasions-block_title">INVASIONS</div>
          <div className="invasions-block_subtitle">
            Fight against the invading forces that threaten your timeline.
          </div>
          <div className="invasions-block_desc">
            Invasions is a dynamic single player campaign with a variety of
            distinct challenges. With built in progression and RPG mechanics,
            mixed with MK1’s incredible fighting action, Invasions provides
            deep, and engaging challenges, and a ton of rewards along the way.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxComponent;
