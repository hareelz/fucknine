import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="nav-bcg"
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
          zIndex: "5",
          width: "95%",
        }}
      >
        <a href="/" className="logo-home">
          <img
            src="https://cdn-mk1.mortalkombat.com/static/logo-blue.svg"
            alt=""
            width={"100%"}
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
