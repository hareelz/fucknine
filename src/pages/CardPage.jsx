import React from "react";
import CardList from "../components/products/CardList";
import Filter from "../components/filter/Filter";

const Card = () => {
  return (
    <div className="cardList-page">
      <Filter />
      <CardList />
    </div>
  );
};

export default Card;
