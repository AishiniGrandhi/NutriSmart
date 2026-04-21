import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header glass">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">🥗</span>
          <span className="logo-text">NutriSmart</span>
        </Link>
        <nav className="nav" aria-label="Main Navigation">
          <Link to="/" className={`nav-link ${isActive('/')}`} aria-label="Go to Dashboard">Home</Link>
          <Link to="/analyze" className={`nav-link ${isActive('/analyze')}`} aria-label="Go to Food Analyzer">Analyze</Link>
          <Link to="/diets" className={`nav-link ${isActive('/diets')}`} aria-label="Go to Diet Plans">Diets</Link>
          <Link to="/kids" className={`nav-link ${isActive('/kids')}`} aria-label="Go to Kids Health Zone">Kids</Link>
          <Link to="/history" className={`nav-link ${isActive('/history')}`} aria-label="Go to Meal Log">History</Link>
        </nav>
        <div className="header-actions">
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link to="/profile" className="profile-link" aria-label="Go to Profile">
                <span className="profile-icon">👤</span>
              </Link>
              <button onClick={logout} className="logout-btn" style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontWeight: '600' }}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
