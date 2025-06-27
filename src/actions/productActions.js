import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_BY_CATEGORY_SUCCESS,
} from './types';

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    const { data } = await axios.get('https://fakestoreapi.com/products');
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_PRODUCTS_FAIL, payload: err.message });
  }
};

export const fetchCategories = () => async (dispatch) => {
  const { data } = await axios.get('https://fakestoreapi.com/products/categories');
  dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: data });
};

export const fetchByCategory = (category) => async (dispatch) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  dispatch({ type: FETCH_BY_CATEGORY_SUCCESS, payload: data });
};