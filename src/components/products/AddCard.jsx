import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../../index.css";
import { useCards } from "../../contexts/CardContextProvider";

const AddCard = () => {
  const { addCard } = useCards();
  const [card, setCard] = useState({
    title: "",
    description: "",
    image: "",
    price: 0,
  });

  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = { ...card, [e.target.name]: Number(e.target.value) };
      setCard(obj);
    } else {
      const obj = { ...card, [e.target.name]: e.target.value };
      setCard(obj);
    }
  };
  return (
    <div>
      <Box sx={{ width: "50vw", margin: "200px auto" }}>
        <Typography
          variant="h3"
          align="center"
          className="admin-page-title"
          fontFamily={"Roboto Slab, serif"}
        >
          ADMIN PAGE
        </Typography>
        <TextField
          onChange={handleInput}
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          className="admin-page-inp"
        />
        <TextField
          onChange={handleInput}
          fullWidth
          name="description"
          label="Description"
          variant="outlined"
          className="admin-page-inp"
        />
        <TextField
          onChange={handleInput}
          fullWidth
          name="price"
          type="number"
          label="Price"
          variant="outlined"
          className="admin-page-inp"
        />
        <TextField
          onChange={handleInput}
          fullWidth
          name="image"
          label="Image URL"
          variant="outlined"
          className="admin-page-inp"
        />
        <button className="admin-page-btn" onClick={() => addCard(card)}>
          ADD GAME
        </button>
      </Box>
    </div>
  );
};

export default AddCard;
