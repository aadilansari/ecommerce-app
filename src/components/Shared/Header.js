import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/authActions';

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          FakeStore
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    {user?.name}
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;