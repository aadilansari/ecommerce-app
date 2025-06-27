import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_DETAILS
} from './types';

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error.message
    });
  }
};

export const fetchProductDetails = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    dispatch({
      type: FETCH_PRODUCT_DETAILS,
      payload: data
    });
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
};