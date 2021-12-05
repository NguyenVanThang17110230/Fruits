import { setCookie } from "../cookie/cookie";
const CARD = "CARD";
const addShoppingCart = (state, data) => {
  const { cart } = state;
  console.log("cart-check", cart);
  console.log("data-cv", data);

  const isExisted = cart.some((item) => item.product === data.product);
  if (isExisted) {
    cart.forEach((item) => {
      if (item.product === data.product) {
        item.quantity += data.quantity;
      }
      return item;
    });
  } else {
    cart.push(data);
  }
  setCookie(CARD, cart);
  return cart;
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      state = { cart: addShoppingCart(state, action.payload) };
      return state;
    case "REMOVE_TO_CART":
      return {
        cart: state.cart.filter((c) => c.product !== action.payload.product),
      };
    default:
      return state;
  }
};