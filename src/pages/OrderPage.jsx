import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContextProvider";

export default function OrderPage() {
  const navigate = useNavigate();
  const { getCart } = useCart();

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
    navigate("/");
  };
  return (
    <div className="cart-page">
      {" "}
      <Box
        sx={{
          width: "50vw",
          height: 500,
          margin: "100px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          className="admin-page-title"
          fontFamily={"Roboto Slab, serif"}
        >
          ORDER PAGE
        </Typography>
        <TextField
          fullWidth
          name="title"
          label="Full Name"
          variant="outlined"
          className="admin-page-inp"
          sx={{ mb: "15px" }}
        />
        <TextField
          fullWidth
          name="description"
          label="Enter email address"
          variant="outlined"
          className="admin-page-inp"
          sx={{ mb: "15px" }}
        />
        <TextField
          fullWidth
          name="price"
          type="number"
          label="Mobile number"
          variant="outlined"
          className="admin-page-inp"
          sx={{ mb: "15px" }}
        />
        <TextField
          fullWidth
          name="image"
          label="Area, sity"
          variant="outlined"
          className="admin-page-inp"
          sx={{ mb: "15px" }}
        />
        <button className="auth-page-btn" onClick={() => cartCleaner()}>
          SIGN UP
        </button>
      </Box>
    </div>
  );
}
