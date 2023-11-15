import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../index.css";
import { useCards } from "../../contexts/CardContextProvider";
import { useParams } from "react-router-dom";
import CategorySelect from "./CategorySelect";

const EditCard = () => {
  const { getOneCard, oneCard, saveChanges, categories } = useCards();
  const [card, setCard] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    price: 0,
  });
  const { id } = useParams();

  useEffect(() => {
    getOneCard(id);
  }, []);

  useEffect(() => {
    if (oneCard) {
      setCard(oneCard);
    }
  }, [oneCard]);

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
      <Box sx={{ width: "50vw", margin: "0 auto" }}>
        <Typography
          variant="h3"
          align="center"
          className="admin-page-title"
          fontFamily={"Roboto Slab, serif"}
        >
          EDIT PAGE
        </Typography>
        <TextField
          value={card.title}
          onChange={handleInput}
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          className="admin-page-inp"
          sx={{ mb: "15px" }}
        />
        <TextField
          value={card.description}
          onChange={handleInput}
          fullWidth
          name="description"
          label="Description"
          variant="outlined"
          className="admin-page-inp"
          sx={{ mb: "15px" }}
        />
        <TextField
          value={card.price}
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
          value={card.image}
          onChange={handleInput}
          fullWidth
          name="image"
          label="Image URL"
          variant="outlined"
          className="admin-page-inp"
          sx={{ mb: "15px" }}
        />
        <CategorySelect handleInput={handleInput} categories={categories} />
        <button
          className="admin-page-btn"
          onClick={() => saveChanges(id, card)}
        >
          SAVE EDITED
        </button>
      </Box>
    </div>
  );
};

export default EditCard;
