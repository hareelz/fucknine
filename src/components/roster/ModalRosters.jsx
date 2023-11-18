import React, { useEffect, useState } from "react";
import "../roster/Roster.css";
import { useNavigate, useParams } from "react-router-dom";
import { useCards } from "../../contexts/CardContextProvider";

const ModalRoster = () => {
  const { getRoster, roster, oneChel, getOneChel } = useCards();
  //   const [card, setCard] = useState({
  //     icon: "",
  //     image: "",
  //     slog: "",
  //     name: "",
  //     fam: "",
  //     desc: "",
  //     desc2: "",
  //   });
  //   const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getOneChel(id);
    //   getRoster(oneChel);
  }, []);

  //   useEffect(() => {
  //     if (oneChel) {
  //       getRoster(oneChel);
  //     }
  //   }, [oneChel]);
  console.log(oneChel);
  return (
    <>
      <div className="ModalHero">
        <div className="left">
          <img className="Hero_img" src={oneChel.image} alt="" />
          <img
            className="smoke_hero_bg"
            src="https://cdn-mk1.mortalkombat.com/static/smoke-center.webp"
            alt="background_smoke"
          />
        </div>
        <div className="right">
          <p className="up_title">{oneChel.slog}</p>
          <h3 className="name">{oneChel.name}</h3>
          <h4 className="title">{oneChel.fam}</h4>
          <p className="first_history">
            {oneChel.desc}
            <br />
            <br />
            {oneChel.desc2}
          </p>
        </div>
      </div>
    </>
  );
};

export default ModalRoster;
