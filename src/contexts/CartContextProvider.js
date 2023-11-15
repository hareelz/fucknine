import React, { createContext, useContext, useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCardsCountInCart,
  getLocalStorage,
} from "../helpers/functions";
import { ACTIONS } from "../helpers/consts";

export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCardsCountInCart(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // функция для получения продуктов добавленных в корзину из хранилища
  const getCart = () => {
    //получаем данные из localStorage
    let cart = getLocalStorage();

    // проверка на наличие данных под ключом cart  в localstorage
    if (!cart) {
      //помещаем данные в случае, если в cart лежит null
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cards: [],
          totalPrice: 0,
        })
      );
      // перезаписываем переменную cart c null на объект
      cart = {
        cards: [],
        totalPrice: 0,
      };
    }
    // обновляем состояние
    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

  // функция для добавления товара в корзину
  const addCardToCart = (card) => {
    // получаем содержимое из хранилища под ключом cart
    let cart = getLocalStorage();

    // проверка на существование данных в хранилище под ключом cart
    if (!cart) {
      cart = { cards: [], totalPrice: 0 };
    }

    // создаем объект, который добавим в localstorage в массив cart.products
    let newCard = {
      item: card,
      count: 1,
      subPrice: +card.price,
    };

    // проверяем есть ли уже продукт, который хотим добавить в корзину
    let cardToFind = cart.cards.filter((elem) => elem.item.id === card.id);

    // если товар уже добавлен в корзину, то удаляем его из массива cart.products через фильтр, в противном случае добавляем его в cart.products
    if (cardToFind.length === 0) {
      cart.cards.push(newCard);
    } else {
      cart.cards = cart.cards.filter((elem) => elem.item.id !== card.id);
    }

    // пересчитываем totalPrice
    cart.totalPrice = calcTotalPrice(cart.cards);

    //обновляем данные в localstorage
    localStorage.setItem("cart", JSON.stringify(cart));
    // обновляем состояние
    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

  // функция для проверки на наличие товара в корзине
  const checkCardInCart = (id) => {
    let cart = getLocalStorage();

    if (cart) {
      let newCart = cart.cards.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    }
  };

  // функция для изменения кол-ва товаров в корзине
  const changeCardCount = (id, count) => {
    // получаем данные корзины из local storage
    let cart = getLocalStorage();
    //перебираем массив с продуктами из корзины, и у продукта,  у которого id совпадает с тем id, что передали при вызове, перезаписываем кол-во и subPrice
    cart.cards = cart.cards.map((card) => {
      if (card.item.id === id) {
        card.count = count;
        card.subPrice = calcSubPrice(card);
      }
      return card;
    });
    // пересчитываем totalPrice, так как кол-во и subprice поменялись
    cart.totalPrice = calcTotalPrice(cart.cards);

    // помещаем в localStorage обновленные данные
    localStorage.setItem("cart", JSON.stringify(cart));

    // обновляем состояние корзины
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const deleteCardFromCart = (id) => {
    let cart = getLocalStorage();
    // фильтруем массив products, и оставляем только те продукты, у которых id не совпадает с id переданным при вызове функции
    cart.cards = cart.cards.filter((elem) => elem.item.id !== id);
    // пересчитываем totalPrice
    cart.totalPrice = calcTotalPrice(cart.cards);

    // обновляем данные в хранилище
    localStorage.setItem("cart", JSON.stringify(cart));
    // обновляем состояние
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const values = {
    getCart,
    cart: state.cart,
    addCardToCart,
    checkCardInCart,
    deleteCardFromCart,
    changeCardCount,
    getCardsCountInCart,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
