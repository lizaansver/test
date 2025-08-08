import React from 'react';
import { Link } from 'react-router-dom';
import type { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const defaultNavigation = [
    { id: 'home', title: 'Главная', path: '/' },
    { id: 'about', title: 'О компании', path: '/about' },
    { id: 'services', title: 'Услуги', path: '/services' },
    { id: 'events', title: 'События', path: '/events' },
    { id: 'news', title: 'Новости', path: '/news' },
    { id: 'contacts', title: 'Контакты', path: '/contacts' }
  ];

  const navItems = navigation || defaultNavigation;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="logo">
            <Link to="/" className="logo-text">
              StatusPraesens
            </Link>
          </div>
          <div className="header-actions">
            <div className="language-switcher">
              <span className="current-lang">RU</span>
            </div>
            <div className="search-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19 19L13 13M15 8A7 7 0 1 1 1 8A7 7 0 0 1 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <button className="menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <nav className="main-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;