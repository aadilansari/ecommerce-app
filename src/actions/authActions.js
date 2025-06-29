import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from './types';

export const login = (email) => (dispatch) => {
  localStorage.setItem('user', JSON.stringify({ email }));
  dispatch({ type: LOGIN_SUCCESS, payload: { email } });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('user');
  dispatch({ type: LOGOUT });
};

export const register = (email) => (dispatch) => {
  dispatch({ type: REGISTER_SUCCESS });
};