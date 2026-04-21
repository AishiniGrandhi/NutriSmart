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
      <NavLink to="/diets" className={({ isActive }) => `bottom-nav-link ${isActive ? 'active' : ''}`}>
        <span className="icon">🥗</span>
        <span className="label">Diets</span>
      </NavLink>
      <NavLink to="/kids" className={({ isActive }) => `bottom-nav-link ${isActive ? 'active' : ''}`}>
        <span className="icon">👶</span>
        <span className="label">Kids</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
