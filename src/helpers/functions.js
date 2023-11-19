// -------------
export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return cart;
};
// -------------
export const calcTotalPrice = (cards) => {
  const totalPrice = cards.reduce((acc, curr) => (acc += curr.subPrice), 0);

  return totalPrice;
};

//----------
export const calcSubPrice = (card) => {
  return +card.item.price * card.count;
};

export const getCardsCountInCart = () => {
  let cart = getLocalStorage();
  return cart ? cart.cards.length : 0;
};
