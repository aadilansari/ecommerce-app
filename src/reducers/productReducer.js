import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_BY_CATEGORY_SUCCESS,
} from '../actions/types';

const initialState = {
  list: [],
  categories: [],
  loading: false,
  error: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case FETCH_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload };
    case FETCH_BY_CATEGORY_SUCCESS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}