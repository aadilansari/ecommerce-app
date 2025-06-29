import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';

export default function Footer() {
  const cartCount = useSelector((s) => s.cart.items.reduce((a, i) => a + i.qty, 0));
  const user = useSelector((s) => s.auth.user);
  return (
    <footer className="shadow p-4 flex items-center justify-between">
      <Link to="/" className="font-medium text-md "> Star store is a upcoming e-commerce store</Link>
      <div className="flex gap-4 items-center">
       < div className="font-bold p-4 gap-4 text-md hidden sm:inline"> © 2025 Star Store</div>
      </div>
    </footer>
  );
}