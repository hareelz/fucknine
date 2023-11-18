import {
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../index.css";
import { useCards } from "../../contexts/CardContextProvider";
import CategorySelect from "./CategorySelect";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddCard = () => {
  const { addCard, categories, getCategories } = useCards();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const [card, setCard] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    price: 0,
    like: 0,
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
  const handleClick = () => {
    setOpen(true);
  };
  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpen1(false);
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
        <button
          className="admin-page-btn"
          onClick={() => {
            if (
              !card.title ||
              !card.description ||
              !card.category ||
              !card.image ||
              !card.price
            ) {
              setOpen1(true);
              return;
            }
            addCard(card);
            handleClick();
          }}
        >
          ADD GAME
        </button>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Товар добавлен!
            </Alert>
          </Snackbar>
          <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Заполните все поля!
            </Alert>
          </Snackbar>
        </Stack>
      </Box>
    </div>
  );
};

export default AddCard;
