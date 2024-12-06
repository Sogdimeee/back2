import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('access_token');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/');
  };

  return (
    <nav style={navBarStyle}>
      <Link to="/" style={logoStyle}>
        <img
          src="https://www.freeiconspng.com/thumbs/doctor-logo/doctor-logo-png-photo-5.png"
          alt="Logo"
          style={logoImageStyle}
        />
      </Link>
      <div>
        {!isAuthenticated ? (
          <>
            <Link to="/register" style={buttonStyle}>
              Register
            </Link>
            <Link to="/login" style={buttonStyle}>
              Login
            </Link>
          </>
        ) : (
          <>
            <button onClick={handleLogout} style={buttonStyle}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

const navBarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#30D5C8', // Updated to teal color
  padding: '5px 20px',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  boxSizing: 'border-box',
  borderBottom: 'none',
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
  maxWidth: '80px'
};

const logoImageStyle = {
  width: '100%',
  height: 'auto',
  maxWidth: '120px', // Limit the maximum width of the logo
};

const buttonStyle = {
  backgroundColor: 'white',
  color: '#30D5C8', // Text color changed to teal
  padding: '8px 15px',
  margin: '0 8px',
  textDecoration: 'none',
  border: '2px solid #30D5C8', // Border color changed to teal
  cursor: 'pointer',
  borderRadius: '5px',
  transition: 'all 0.3s ease',
};

export default NavBar;
