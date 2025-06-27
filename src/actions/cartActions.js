import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './types';

export const addToCart = (product) => (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART, payload: product });
  const {
    cart: { items },
  } = getState();
  localStorage.setItem('cart', JSON.stringify(items));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });
  const {
    cart: { items },
  } = getState();
  localStorage.setItem('cart', JSON.stringify(items));
};

export const clearCart = () => (dispatch) => {
  localStorage.removeItem('cart');
  dispatch({ type: CLEAR_CART });
};