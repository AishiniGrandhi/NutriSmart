import React from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import FoodAnalyzer from './components/FoodAnalyzer';
import HealthTips from './components/HealthTips';
import './App.css';

function App() {
  return (
    <Layout>
      <div className="hero container">
        <div className="hero-content">
          <h1 className="hero-title">Smart Nutrition for a <span className="gradient-text">Healthier You</span></h1>
          <p className="hero-subtitle">
            Powered by Gemini AI, NutriSmart analyzes your meals and provides 
            personalized insights to reach your health goals faster.
          </p>
          <div className="hero-cta">
            <a href="#analyze" className="btn-primary">Analyze Your First Meal</a>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
      
      <Dashboard />
      <FoodAnalyzer />
      <HealthTips />
    </Layout>
  );
}

export default App;
