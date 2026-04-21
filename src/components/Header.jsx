import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header glass">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-icon">🥗</span>
          <span className="logo-text">NutriSmart</span>
        </div>
        <nav className="nav" aria-label="Main Navigation">
          <a href="#dashboard" className="nav-link" aria-label="Go to Dashboard">Dashboard</a>
          <a href="#analyze" className="nav-link" aria-label="Go to Food Analyzer">Analyze Food</a>
          <a href="#tips" className="nav-link" aria-label="Go to Health Tips">Health Tips</a>
        </nav>
        <div className="header-actions">
          <button className="btn-primary" aria-label="Connect to Gemini API">Connect API</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
