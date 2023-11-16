import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

export default function Register() {
  const {
    user,
    email,
    password,

    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    handleRegister,
    handleLogin,
    handleLogout,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="admin-page">
      <Box sx={{ width: "50vw", margin: "200px auto" }}>
        <Typography
          variant="h3"
          align="center"
          className="admin-page-title"
          fontFamily={"Roboto Slab, serif"}
          sx={{ color: "black" }}
        >
          REGISTER PAGE
        </Typography>
        <TextField
          sx={{ mb: "15px" }}
          fullWidth
          name="title"
          label="Login"
          variant="outlined"
          className="admin-page-inp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          name="description"
          label="Password"
          variant="outlined"
          className="admin-page-inp"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-page-btn" onClick={handleSubmit}>
          SIGN IN
        </button>

        <button className="auth-page-btn">CONTINUE WITH GOOGLE</button>
      </Box>
    </div>
  );
}
