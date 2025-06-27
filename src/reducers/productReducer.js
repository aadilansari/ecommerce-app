import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_DETAILS
} from '../actions/types';

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_PRODUCT_DETAILS:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
};