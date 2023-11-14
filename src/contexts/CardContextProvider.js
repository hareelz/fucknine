import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/consts";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const cardContext = createContext();
export const useCards = () => useContext(cardContext);

const INIT_STATE = {
  cards: [],
  oneCard: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CARDS:
      return { ...state, cards: action.payload };
    case ACTIONS.GET_CARD_PRODUCT:
      return { ...state, oneCard: action.payload };
    default:
      return state;
  }
};
const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  const addCard = async (newCard) => {
    await axios.post(API, newCard);
  };

  const getCards = async () => {
    const res = await axios.get(API);
    dispatch({ type: ACTIONS.GET_CARDS, payload: res.data });
  };

  const deleteCard = async (id) => {
    await axios.delete(`${API}/${id}`);
    getCards();
  };

  const getOneCard = async (id) => {
    const res = await axios.get(`${API}/${id}`);
    dispatch({ type: ACTIONS.GET_CARD_PRODUCT, payload: res.data });
  };

  const saveChanges = async (id, editedCard) => {
    await axios.patch(`${API}/${id}`, editedCard);
    navigate("/card");
  };

  const values = {
    addCard,
    getCards,
    deleteCard,
    cards: state.cards,

    getOneCard,
    oneCard: state.oneCard,
    saveChanges,
  };
  return <cardContext.Provider value={values}>{children}</cardContext.Provider>;
};
export default CardContextProvider;
