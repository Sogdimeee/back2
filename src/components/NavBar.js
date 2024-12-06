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
        <img src="https://logos-world.net/wp-content/uploads/2023/12/F1-Emblem.png" alt="Logo" style={logoImageStyle} />
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
            <Link to="/special" style={buttonStyle}>
              Special Page
            </Link>
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
  backgroundColor: 'red',
  padding: '5px 20px', // Уменьшаем высоту навбара
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  boxSizing: 'border-box',
  borderBottom: 'none', // Убираем белую линию снизу
};

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoImageStyle = {
  width: '100%', // Логотип будет растягиваться на всю ширину
  height: 'auto', // Сохраняет пропорции логотипа
  maxWidth: '120px', // Ограничение максимальной ширины логотипа
};

const buttonStyle = {
  backgroundColor: 'white',
  color: 'red', // Текст красный
  padding: '8px 15px', // Уменьшаем размер кнопок
  margin: '0 8px',
  textDecoration: 'none',
  border: '2px solid red', // Красная рамка вокруг кнопки
  cursor: 'pointer',
  borderRadius: '5px',
  transition: 'all 0.3s ease', // Плавное увеличение кнопки
};


export default NavBar;
