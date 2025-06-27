import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';

export default function Header() {
  const cartCount = useSelector((s) => s.cart.items.reduce((a, i) => a + i.qty, 0));
  const user = useSelector((s) => s.auth.user);
  const dispatch = useDispatch();
  return (
    <header className="shadow p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">FakeStore</Link>
      <nav className="flex gap-4 items-center">
        <Link to="/cart">Cart ({cartCount})</Link>
        {user ? (
          <>
            <span className="hidden sm:inline">Hi, {user.email}</span>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
}