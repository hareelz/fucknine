import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API, API_CATEGORIES, API_ROSTERS } from "../helpers/consts";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const cardContext = createContext();
export const useCards = () => useContext(cardContext);

const INIT_STATE = {
  cards: [],
  oneCard: null,
  oneChel: {},
  categories: [],
  roster: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CARDS:
      return { ...state, cards: action.payload };
    case ACTIONS.GET_CARD_PRODUCT:
      return { ...state, oneCard: action.payload };
    case ACTIONS.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case ACTIONS.GET_ROSTER:
      return { ...state, roster: action.payload };
    case ACTIONS.GET_ONE_CHEL:
      return { ...state, oneChel: action.payload };
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
    const res = await axios.get(`${API}${window.location.search}`);
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
    navigate("/cardPage");
  };

  const getCategories = async () => {
    const res = await axios.get(API_CATEGORIES);
    dispatch({ type: ACTIONS.GET_CATEGORIES, payload: res.data });
  };

  const createCategories = async (newCategory) => {
    await axios.post(API_CATEGORIES, newCategory);
    getCategories();
  };

  const getRoster = async () => {
    const res = await axios.get(API_ROSTERS);
    dispatch({ type: ACTIONS.GET_ROSTER, payload: res.data });
  };
  const getOneChel = async (id) => {
    const res = await axios.get(`${API_ROSTERS}/${id}`);
    dispatch({ type: ACTIONS.GET_ONE_CHEL, payload: res.data });
  };

  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };

  const values = {
    addCard,
    getCards,
    deleteCard,
    cards: state.cards,

    getOneCard,
    oneCard: state.oneCard,
    saveChanges,
    createCategories,

    getCategories,
    categories: state.categories,

    fetchByParams,
    getRoster,
    getOneChel,
    oneChel: state.oneChel,
    roster: state.roster,
  };
  return <cardContext.Provider value={values}>{children}</cardContext.Provider>;
};
export default CardContextProvider;
