// src/components/Navigation.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Navigation.css';
import { AuthContext } from './AuthContext'; // Update the import path to be correct
import { UserContext } from './UserContext'; // Import UserContext

function Navigation() {
  
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const profile =(e) => {
    e.preventDefault();
    navigate(`/profile/${userId}`);
  }

  return (
    <nav className="navigation">
      <div className="logo">
        {/* Add your logo here */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/membership">Membership</Link></li>
        {!isLoggedIn ? (
          <li>
            <button onClick={handleClick} className="nav-login-button">Login</button>
          </li>
        ) : (
          <li className="dropdown">
            <button className="nav-profile-button">Profile</button>
            <div className="dropdown-content">
              {/* <Link to="/profile"><p className='nav-logout-button'>Profile</p></Link> */}
              <Link to='/profile' >
              <button onClick={profile} className="nav-logout-button">Profile</button>
              </Link>
              <Link to='/' >
              <button onClick={logout} className="nav-logout-button">Logout</button>
              </Link>
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
