import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="nav-bcg"
      style={{
        width: "100vw",
        height: "80px",
        margin: "auto",
        display: "flex",
        // alignItems: "center",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          margin: "0 2em",
          padding: 0,
          display: "flex",
          alignItems: "center",
          zIndex: "5",
          width: "97%",
        }}
      >
        <a href="/" className="logo-home">
          <img
            src="https://cdn-mk1.mortalkombat.com/static/logo-blue.svg"
            alt=""
            width={"88%"}
          />
        </a>
        <li className="nav-list">
          <Link to={"/gameInfo"} className="link-nav">
            Game-Info
          </Link>
        </li>
        <li className="nav-list">
          <Link to={"/roster"} className="link-nav">
            Roster
          </Link>
        </li>
        <li className="nav-list">
          <Link to={"/card"} className="link-nav">
            Buy Games
          </Link>
        </li>
        <li className="nav-list">
          <Link to={"/admin"} className="link-nav">
            Admin
          </Link>
        </li>
        <li className="nav-list">
          <Link to={"/cartPage"} className="link-nav">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
