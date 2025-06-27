import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

export const register = (userData) => async (dispatch) => {
  try {
    // In a real app, you would make an API call here
    // For demo, we'll just simulate success
    dispatch({
      type: REGISTER_SUCCESS,
      payload: userData
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.message
    });
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    // Simulate API call
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        email: credentials.email,
        name: 'Demo User'
      }
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export { login, logout };