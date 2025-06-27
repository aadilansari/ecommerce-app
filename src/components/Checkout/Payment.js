import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../actions/cartActions';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  const { items } = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', card: '', expiry: '', cvv: '' });

  const total = items.reduce((a, i) => a + i.price * i.qty, 0).toFixed(2);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.card || !form.expiry || !form.cvv) {
      alert('Please fill out all fields.');
      return;
    }
    alert('Payment Successful!');
    dispatch(clearCart());
    navigate('/');
  };

  if (!items.length) return <p className="p-6">Cart is empty.</p>;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Payment - Total: ${total}</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={form.name}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded"
          required
        />
        <input
          type="text"
          name="card"
          placeholder="Card Number"
          value={form.card}
          onChange={handleChange}
          className="border px-4 py-2 w-full rounded"
          required
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={form.expiry}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded"
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={form.cvv}
            onChange={handleChange}
            className="border px-4 py-2 w-full rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 w-full rounded">
          Pay Now
        </button>
      </form>
    </div>
  );
}