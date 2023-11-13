import React, { useEffect } from "react";
import { useCards } from "../../contexts/CardContextProvider";
import { Box } from "@mui/material";
import Cards from "./Cards";

const CardList = () => {
  const { getCards, cards } = useCards();
  useEffect(() => {
    getCards();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        margin: "15rem 20rem",
      }}
    >
      {cards.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default CardList;
