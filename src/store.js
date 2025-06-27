import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Changed to named import
import { composeWithDevTools } from '@redux-devtools/extension';
import { authReducer } from './reducers/authReducer';
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;