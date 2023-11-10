import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        width: "90vw",
        height: "80px",
        margin: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          alignItems: "center",
          gap: "5%",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mortalkombat-logo.svg/2560px-Mortalkombat-logo.svg.png"
          alt=""
          width={"20%"}
          href="/"
        />
        <li className="nav-list">
          <Link to={"/gameInfo"} className="link-nav">
            Game-Info
          </Link>
        </li>
        <li className="nav-list">
          <a className="link-nav" href="roster">
            Roster
          </a>
        </li>
        <li className="nav-list">
          <a className="link-nav" href="">
            Buy Games
          </a>
        </li>
        <li className="nav-list">
          <a className="link-nav" href="">
            Admin
          </a>
        </li>
        <li className="nav-list">
          <a className="link-nav" href="">
            Cart
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
