import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QUANTITY,
  CLEAR_CART
} from './types';

export const addToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  });
};

export const adjustQuantity = (id, qty) => (dispatch) => {
  dispatch({
    type: ADJUST_QUANTITY,
    payload: { id, qty }
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};