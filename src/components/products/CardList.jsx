import React, { useEffect } from "react";
import { useCards } from "../../contexts/CardContextProvider";
import { Box, Pagination } from "@mui/material";
import Cards from "./Cards";
import PaginationControlled from "./Pagination";
import "../../index.css";
import { useSearchParams } from "react-router-dom";

const CardList = () => {
  const { getCards, cards } = useCards();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getCards();
    setPage(1);
  }, [searchParams]);
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
    <div className="card-list-block">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "15rem 20rem",
          height: "100vh",
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
    </div>
  );
};

export default CardList;
