import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../index.css";
import { useCards } from "../../contexts/CardContextProvider";
import CategorySelect from "./CategorySelect";

const AddCard = () => {
  const { addCard, categories, getCategories } = useCards();
  const [card, setCard] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    price: 0,
  });
  useEffect(() => {
    getCategories();
  }, []);

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
    <div className="qwe">
      <Box
        sx={{
          width: "50vw",
          height: 500,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
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
          sx={{ mb: "15px" }}
        />
        <TextField
          onChange={handleInput}
          fullWidth
          name="description"
          label="Description"
          variant="outlined"
          className="admin-page-inp"
          sx={{ mb: "15px" }}
        />
        <TextField
          onChange={handleInput}
          fullWidth
          name="price"
          type="number"
          label="Price"
          variant="outlined"
          className="admin-page-inp"
          sx={{ mb: "15px" }}
        />
        <TextField
          onChange={handleInput}
          fullWidth
          name="image"
          label="Image URL"
          variant="outlined"
          className="admin-page-inp"
          sx={{ mb: "15px" }}
        />
        <CategorySelect handleInput={handleInput} categories={categories} />
        <button className="admin-page-btn" onClick={() => addCard(card)}>
          ADD GAME
        </button>
      </Box>
    </div>
  );
};

export default AddCard;
