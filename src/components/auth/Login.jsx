import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import Register from "./Register";

export default function Login() {
  const { user, login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLoginSubmit = async () => {
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      navigate("/");
    }
  };
  return (
    <div className="admin-page">
      <Box sx={{ width: "50vw", margin: "200px auto" }}>
        {error && <Alert severity="error">{error}</Alert>}
        <Typography
          variant="h3"
          align="center"
          className="admin-page-title"
          fontFamily={"Roboto Slab, serif"}
          sx={{ color: "black" }}
        >
          LOGIN PAGE
        </Typography>
        <TextField
          sx={{ mb: "15px" }}
          fullWidth
          name="title"
          label="Login"
          variant="outlined"
          className="admin-page-inp"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          name="description"
          label="Password"
          variant="outlined"
          className="admin-page-inp"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="auth-page-btn" onClick={handleLoginSubmit}>
          SIGN IN
        </button>
        <Link to="/register">
          <Typography sx={{ color: "black", margin: "20px 16rem" }}>
            Don't have an account Sign Up
          </Typography>
        </Link>
      </Box>
    </div>
  );
}
