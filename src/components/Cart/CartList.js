import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../actions/cartActions';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

export default function CartList() {
  const { items } = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = items.reduce((a, i) => a + i.price * i.qty, 0).toFixed(2);

  if (items.length === 0)
    return (
      <div className="p-6 text-center">
        <p>Your cart is empty</p>
        <Link className="text-blue-600 underline" to="/">Go shopping</Link>
      </div>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <ul className="divide-y">
        {items.map((item) => (
          <CartItem key={item.id} item={item} onRemove={(id) => dispatch(removeFromCart(id))} />
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-bold">Total: ${total}</p>
        <div className="flex gap-2">
          <button onClick={() => dispatch(clearCart())} className="border px-4 py-2 rounded">
            Clear Cart
          </button>
          <button onClick={() => navigate('/payment')} className="bg-green-600 text-white px-4 py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}