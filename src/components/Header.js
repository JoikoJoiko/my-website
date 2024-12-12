import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="The Forest" /> {/* Здесь должен быть логотип игры */}
      </div>
      <nav>
        <ul className='nav'>
          <li><a href="#home">Главная</a></li>
          <li><a href="#tribes">Виды аборигенов</a></li>
          <li><a href="#gallery">Галерея</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
