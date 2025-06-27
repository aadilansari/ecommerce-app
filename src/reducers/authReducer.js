import { LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const stored = JSON.parse(localStorage.getItem('user'));
const initialState = {
  user: stored || null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
}