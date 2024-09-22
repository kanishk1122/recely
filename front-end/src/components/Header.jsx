// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Header.css'

const Header = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {userInfo ? (
            <>
              <li><Link to="/submit-apparel">Submit Apparel</Link></li>
              <li onClick={logoutHandler}>Logout</li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
