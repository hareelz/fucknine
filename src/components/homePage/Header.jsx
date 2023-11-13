import React from "react";
import "../Navbar.css";

const Header = () => {
  return (
    <div className="video--container">
      <video
        src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="fire"
      ></video>
      <video
        src="https://cdn-mk1.mortalkombat.com/home/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="videoMk"
      ></video>
    </div>
  );
};

export default Header;
