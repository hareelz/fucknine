import React from "react";
import "./Footer.css";
import BtnBuyNow from "./gameInfo/BtnBuyNow";

const Footer = () => {
  return (
    <div>
      <BtnBuyNow />
      <div className="footer">
        <div className="footerfire-block">
          <video
            className="footer__fire-top"
            src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
            autoPlay
            loop
            // muted
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Footer;
