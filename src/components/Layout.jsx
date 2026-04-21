import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main style={{ paddingTop: '100px' }}>
        {children}
      </main>
      <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
        <div className="container">
          <p>© 2026 NutriSmart - Your AI Nutrition Companion</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
