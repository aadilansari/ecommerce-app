import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/UserDashboard';
import CartList from './components/Cart/CartList';
import Payment from './components/Checkout/Payment';
import PrivateRoute from './components/Shared/PrivateRoute';
import Header from './components/Shared/header';

const App = () => {
  // Removed the loadUser dispatch since we don't have that action in authActions.js
  // You can add it later if needed

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <div className="container">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route path="/cart" element={<CartList />} />
              <Route
                path="/payment"
                element={<PrivateRoute component={Payment} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;