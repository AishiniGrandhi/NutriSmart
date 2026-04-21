import React from 'react';
import Dashboard from '../components/Dashboard';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero container">
        <div className="hero-content">
          <h1 className="hero-title">Smart Nutrition for a <span className="gradient-text">Healthier You</span></h1>
          <p className="hero-subtitle">
            Powered by Gemini AI, NutriSmart analyzes your meals and provides 
            personalized insights to reach your health goals faster.
          </p>
          <div className="hero-cta">
            <Link to="/analyze" className="btn-primary">Analyze Your First Meal</Link>
            <Link to="/tips" className="btn-secondary">Health Tips</Link>
          </div>
        </div>
      </div>
      
      <Dashboard />
      
      <section className="cta-section container glass" style={{ margin: '4rem auto', padding: '3rem', textAlign: 'center' }}>
        <h2>Start Logging Your Progress</h2>
        <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
          Every meal is a step towards your goal. Use our AI analyzer to get started.
        </p>
        <Link to="/analyze" className="btn-primary">Try Food Analyzer</Link>
      </section>
    </div>
  );
};

export default Home;
