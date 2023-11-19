import React, { useDebugValue, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ADMIN } from "../helpers/consts";
import BurgerMenu from "../burger-menu/BurgerMenu";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
    logout();
  };
  return (
    <div className="nav-bcg">
      <a href="/" className="logo-home">
        <img
          src="https://cdn-mk1.mortalkombat.com/static/logo-blue.svg"
          alt=""
          className="navbar-logo"
        />
      </a>
      <ul className="navbar_list">
        <li className="nav-list-item">
          <Link to={"/gameInfo"} className="link-nav">
            Game-Info
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to={"/roster"} className="link-nav">
            Roster
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to={"/cardPage"} className="link-nav">
            Buy Games
          </Link>
        </li>
        {user.email === ADMIN ? (
          <li className="nav-list-item">
            <Link to={"/admin"} className="link-nav">
              Admin
            </Link>
          </li>
        ) : null}

        <li className="nav-list-item">
          <Link to={"/cartPage"} className="link-nav">
            Cart
          </Link>
        </li>

        {user ? (
          <>
            <li className="log-out">
              <Link to={"/"}>
                <button className="auth-btn" onClick={handleLogOut}>
                  LOG OUT
                </button>
              </Link>
            </li>

            <Tooltip title={user.email}>
              <li className="avatar">
                <IconButton className="ava">
                  <Avatar alt={user.displayName} src={user.photoUrl} />
                </IconButton>
              </li>
            </Tooltip>
          </>
        ) : (
          <>
            <li style={{ listStyleType: "none" }} className="sign-up">
              <Link to={"/register"}>
                <button className="auth-btn">SIGN UP</button>
              </Link>
            </li>

            <li className="logo-ava">
              <IconButton color="primary">
                <AccountCircleIcon fontSize="large"></AccountCircleIcon>
              </IconButton>
            </li>
          </>
        )}
      </ul>
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
