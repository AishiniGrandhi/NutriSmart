import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav glass">
      <NavLink to="/" className={({ isActive }) => `bottom-nav-link ${isActive ? 'active' : ''}`}>
        <span className="icon">🏠</span>
        <span className="label">Home</span>
      </NavLink>
      <NavLink to="/analyze" className={({ isActive }) => `bottom-nav-link ${isActive ? 'active' : ''}`}>
        <span className="icon">🔍</span>
        <span className="label">Analyze</span>
      </NavLink>
      <NavLink to="/history" className={({ isActive }) => `bottom-nav-link ${isActive ? 'active' : ''}`}>
        <span className="icon">📋</span>
        <span className="label">History</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `bottom-nav-link ${isActive ? 'active' : ''}`}>
        <span className="icon">👤</span>
        <span className="label">Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
