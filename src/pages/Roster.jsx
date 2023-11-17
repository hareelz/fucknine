import React from "react";
import Rosters from "../components/roster/Rosters";
import ModalRoster from "../components/roster/ModalRosters";

const Roster = () => {
  return (
    <div className="roster-page">
      {/* <ModalRoster /> */}
      <Rosters />
    </div>
  );
};

export default Roster;
