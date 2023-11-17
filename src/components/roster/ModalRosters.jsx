import React from "react";
import "../roster/Roster.css";

const ModalRoster = () => {
  return (
    <div className="ModalHero">
      <div className="left">
        <img
          className="Hero_img"
          src="https://cdn-mk1.mortalkombat.com/roster/liu-kang/hero.webp"
          alt="HERO"
        />
        <img
          className="smoke_hero_bg"
          src="https://cdn-mk1.mortalkombat.com/static/smoke-center.webp"
          alt="background_smoke"
        />
      </div>
      <div className="right">
        <p className="up_title">SECURITY</p>
        <h3 className="name">LIU KANG</h3>
        <h4 className="title">God of Fire</h4>
        <p className="first_history">
          Having won control of the Hourglass, Liu Kang restarted history. He
          neutralized the threats and dangers that had come before, crafting a
          New Era in which all beings would have the opportunity to find peace.
          <br />
          <br />
          But that peace is now threatened by an enemy that Liu Kang could never
          have anticipated. It will take all of his wisdom and experience to
          save not only Earthrealm, but all of reality.
        </p>
      </div>
    </div>
  );
};

export default ModalRoster;
