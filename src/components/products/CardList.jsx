import React, { useEffect } from "react";
import { useCards } from "../../contexts/CardContextProvider";
import { Box, Pagination } from "@mui/material";
import Cards from "./Cards";
import { useSearchParams } from "react-router-dom";
import PaginationControlled from "./Pagination";

const CardList = () => {
  const { getCards, cards } = useCards();
  useEffect(() => {
    getCards();
    setPage(1);
  }, []);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const itemPerPage = 3;
  const count = Math.ceil(cards.length / itemPerPage);

  function currentData() {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;

    return cards.slice(begin, end);
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "15rem 20rem",
        }}
      >
        {currentData().map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </Box>
      <PaginationControlled
        count={count}
        page={page}
        handleChange={handleChange}
      />
    </>
  );
};

export default CardList;
