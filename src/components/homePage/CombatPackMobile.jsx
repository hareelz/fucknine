import React from "react";
import "../Navbar.css";

const CombatPackMobile = () => {
  return (
    <div>
      <video
        src="https://cdn-mk1.mortalkombat.com/static/fire-line-bot-loop.mp4"
        className="fire-combat-pack"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
};

export default CombatPackMobile;
