import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { authWithGoogle, register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSumbit = async () => {
    try {
      await register(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
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
          REGISTER PAGE
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

        <button className="auth-page-btn" onClick={() => handleSumbit()}>
          SIGN UP
        </button>

        <button className="auth-page-btn" onClick={(e) => authWithGoogle()}>
          CONTINUE WITH GOOGLE
        </button>

        <button className="auth-page-btn" onClick={() => navigate("/login")}>
          ALREADY HAVE AN ACCOUNT
        </button>
      </Box>
    </div>
  );
}
