import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};