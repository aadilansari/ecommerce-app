import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/types';

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const exists = state.items.find((i) => i.id === action.payload.id);
      return {
        ...state,
        items: exists
          ? state.items.map((i) => (i.id === exists.id ? { ...i, qty: i.qty + 1 } : i))
          : [...state.items, { ...action.payload, qty: 1 }],
      };
    case REMOVE_FROM_CART:
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case CLEAR_CART:
      return { ...state, items: [] };
    default:
      return state;
  }
}