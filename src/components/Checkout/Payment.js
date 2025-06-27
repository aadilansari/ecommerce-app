import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [address, setAddress] = useState('');

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process payment here
    alert('Payment successful!');
    navigate('/');
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <h2>Payment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select
                className="form-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Shipping Address</label>
              <textarea
                className="form-control"
                rows="3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Complete Order
            </button>
          </form>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <ul className="list-group list-group-flush">
                {cartItems.map((item) => (
                  <li key={item.id} className="list-group-item">
                    {item.title} x {item.qty} - ${(item.price * item.qty).toFixed(2)}
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between mt-3">
                <strong>Total:</strong>
                <strong>${calculateTotal().toFixed(2)}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;