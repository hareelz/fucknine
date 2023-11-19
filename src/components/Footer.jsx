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
        <div className="footer_content">
          <ul className="logo_list">
            <li className="logo_item">
              <a href="">
                <img
                  src="https://cdn-mk1.mortalkombat.com/static/wb-games-logo.svg"
                  alt=""
                />
              </a>
            </li>
            <li className="logo_item">
              <a href="">
                <img
                  src="https://cdn-mk1.mortalkombat.com/static/netherrealm.svg"
                  alt=""
                />
              </a>
            </li>
            <li className="logo_item">
              <a href="">
                <img
                  src="https://cdn-mk1.mortalkombat.com/static/ps5_tm.svg"
                  alt=""
                />
              </a>
            </li>
            <li className="logo_item">
              <a href="">
                <img
                  src="https://cdn-mk1.mortalkombat.com/static/xbox-series-x-s.svg"
                  alt=""
                />
              </a>
            </li>
            <li className="logo_item">
              <a href="">
                <img
                  src="https://cdn-mk1.mortalkombat.com/static/nintendo-switch.svg"
                  alt=""
                />
              </a>
            </li>
            <li className="logo_item">
              <a href="">
                <img
                  src="https://cdn-mk1.mortalkombat.com/static/steam.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
          <p className="footer-desc">
            MORTAL KOMBAT 1 Software © 2023 Warner Bros. Entertainment Inc.
            Developed by NetherRealm Studios. Unreal® Engine, copyright
            1998-2023 Epic Games, Inc. Unreal, Unreal Technology and the Powered
            by Unreal Technology logo are trademarks or registered trademarks of
            Epic Games, Inc. Uses Oodle Data Compression Copyright and Bink
            Video (C) 1997-2023 by RAD Game Tools, Inc. NETHERREALM STUDIOS
            LOGO, MORTAL KOMBAT, THE DRAGON LOGO, and all related characters and
            elements are trademarks of and © 2023 Warner Bros. Entertainment
            Inc.
          </p>
          <span className="footer-wb-games-desc">
            <img
              className="wb-logo"
              src="https://cdn-mk1.mortalkombat.com/static/wb-games-logo.svg"
              alt=""
            />
            <p className="footer-desc2">
              WARNER BROS. GAMES LOGO, WARNER BROS. INTERACTIVE LOGO, WB SHIELD:
              ™ & © Warner Bros. Entertainment Inc. (s23)
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
