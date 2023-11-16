import React from "react";
import CardList from "../components/products/CardList";
import CategoryFilter from "../components/products/CategoryFilter";
import "../index.css";

const Card = () => {
  return (
    <div className="cardList-page">
      <div className="category-filter">
        <CategoryFilter />
      </div>
      <CardList />
    </div>
  );
};

export default Card;
