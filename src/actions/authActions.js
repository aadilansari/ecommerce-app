import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from './types';

export const login = (email) => (dispatch) => {
  // In real life we would POST to /login; here we fake it.
  localStorage.setItem('user', JSON.stringify({ email }));
  dispatch({ type: LOGIN_SUCCESS, payload: { email } });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('user');
  dispatch({ type: LOGOUT });
};

export const register = (email) => (dispatch) => {
  // Fake register
  dispatch({ type: REGISTER_SUCCESS });
};