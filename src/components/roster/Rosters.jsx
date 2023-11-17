import React, { useEffect } from "react";
import "../roster/Roster.css";
import { useCards } from "../../contexts/CardContextProvider";

const Rosters = () => {
  const { getRoster, roster } = useCards();
  useEffect(() => {
    getRoster();
  }, []);
  console.log(roster);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1px" }}>
      {roster.map((item) => (
        <div className="LUKANG" key={item.id} style={{ borderRadius: "20px" }}>
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
