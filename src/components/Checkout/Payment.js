// components/Checkout/Payment.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../actions/cartActions';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  // Get cart items from Redux store - make sure this matches your actual state structure
  const { cartItems } = useSelector((state) => state.cart || { cartItems: [] });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isProcessing, setIsProcessing] = useState(false);

  // Safely calculate total
  const calculateTotal = () => {
    if (!cartItems || !Array.isArray(cartItems)) return '0.00';
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const qty = parseInt(item.qty) || 0;
      return total + (price * qty);
    }, 0).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      alert(`Payment of $${calculateTotal()} successful!`);
      dispatch(clearCart());
      navigate('/');
      setIsProcessing(false);
    }, 1500);
  };

  // Safely check if cart is empty
  if (!cartItems || !cartItems.length) {
    return (
      <div className="container py-5">
        <div className="alert alert-info">Your cart is empty.</div>
        <button 
          onClick={() => navigate('/')} 
          className="btn btn-primary mt-3"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <h2>Payment Method</h2>
          <form onSubmit={handleSubmit}>
            {/* ... rest of your payment form ... */}
          </form>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <ul className="list-group list-group-flush mb-3">
                {cartItems.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between">
                    <span>
                      {item.title || 'Unnamed Product'} x {item.qty || 1}
                    </span>
                    <span>${((item.price || 0) * (item.qty || 1)).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}