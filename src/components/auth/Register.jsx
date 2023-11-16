import React, { useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

export default function Register() {
  const { authWithGoogle, register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    try {
      await register(email, password);
      // setEmail("");
      // setPassword("");
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

        <button className="auth-page-btn" onClick={handleSubmit}>
          SIGN IN
        </button>

        <button className="auth-page-btn" onClick={authWithGoogle}>
          CONTINUE WITH GOOGLE
        </button>
      </Box>
    </div>
  );
}
