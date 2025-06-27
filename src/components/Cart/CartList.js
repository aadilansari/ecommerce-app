import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { adjustQuantity, removeFromCart, clearCart } from '../../actions/cartActions';

const CartList = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, qty) => {
    dispatch(adjustQuantity(id, qty));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-5">
        <h2>Your cart is empty</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Shopping Cart</h2>
            <button className="btn btn-danger btn-sm" onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <div className="d-flex justify-content-between">
                <span>Total Items:</span>
                <span>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Total Price:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <Link
                to="/payment"
                className="btn btn-primary w-100 mt-3"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;