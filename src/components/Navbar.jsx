import React, { useDebugValue, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ADMIN } from "../helpers/consts";
const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
    logout();
  };
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
          <Link to={"/cardPage"} className="link-nav">
            Buy Games
          </Link>
        </li>
        {user.email === ADMIN ? (
          <li className="nav-list">
            <Link to={"/admin"} className="link-nav">
              Admin
            </Link>
          </li>
        ) : null}

        <li className="nav-list">
          <Link to={"/cartPage"} className="link-nav">
            Cart
          </Link>
        </li>

        {user ? (
          <>
            <li>
              <Link to={"/"}>
                <button className="auth-btn" onClick={handleLogOut}>
                  LOG OUT
                </button>
              </Link>
            </li>

            <Tooltip title={user.email}>
              <li style={{ marginLeft: "20%" }}>
                <IconButton>
                  {" "}
                  <Avatar alt={user.displayName} src={user.photoUrl} />
                </IconButton>
              </li>
            </Tooltip>
          </>
        ) : (
          <>
            <li>
              <Link to={"/register"}>
                <button className="auth-btn">SIGN UP</button>
              </Link>
            </li>

            <li style={{ marginLeft: "20%" }}>
              <IconButton>
                {" "}
                <AccountCircleIcon fontSize="large"></AccountCircleIcon>
              </IconButton>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
