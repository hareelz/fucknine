import React, { useEffect } from "react";
import "../roster/Roster.css";
import { useCards } from "../../contexts/CardContextProvider";
import ModalRoster from "./ModalRosters";
import { useNavigate } from "react-router-dom";

const Rosters = () => {
  const { getRoster, roster } = useCards();
  const navigate = useNavigate();
  useEffect(() => {
    getRoster();
  }, []);
  console.log(roster);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1px",
        marginTop: "8.5%",
      }}
    >
      {roster.map((item) => (
        <div
          className="LUKANG"
          key={item.id}
          style={{ borderRadius: "20px" }}
          onClick={() => navigate(`/modal/${item.id}`)}
        >
          <img src={item.icon} alt="not found" className="Lu-Kang" />
          <img
            src="https://cdn-mk1.mortalkombat.com/roster/roster-smoke.webp"
            alt="smoke"
            className="smoke"
          />
          <span className="Liu-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Rosters;
