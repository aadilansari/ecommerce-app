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
import PrivateRoute from './components/Shared/PrivateRoute';
import Header from './components/Shared/header';
import ErrorBoundary from './components/Shared/ErrorBoundary';
import PaymentPage from './components/Checkout/Payment';

const App = () => {

  return (
    <Provider store={store}>
      <ErrorBoundary>
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
  element={
    <PrivateRoute>
    <PaymentPage/>
    </PrivateRoute>
  }
/>
            </Routes>
          </div>
        </div>
      </Router>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;