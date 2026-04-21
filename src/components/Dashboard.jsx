import React, { useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import './Dashboard.css';

const Dashboard = () => {
  const [history] = useLocalStorage('nutrismart-history', []);
  const [goals] = useLocalStorage('nutrismart-goals', {
    calories: 2200,
    protein: 120,
    carbs: 250,
    fats: 75
  });

  const totals = useMemo(() => {
    // For simplicity, just total everything in history for now (ideally filtered by today)
    return history.reduce((acc, curr) => ({
      calories: acc.calories + curr.calories,
      protein: acc.protein + parseInt(curr.macros.protein),
      carbs: acc.carbs + parseInt(curr.macros.carbs),
      fats: acc.fats + parseInt(curr.macros.fats),
    }), { calories: 0, protein: 0, carbs: 0, fats: 0 });
  }, [history]);

  const stats = [
    { label: 'Calories', value: totals.calories.toLocaleString(), target: goals.calories.toString(), unit: 'kcal', color: 'var(--primary)' },
    { label: 'Protein', value: totals.protein.toString(), target: goals.protein.toString(), unit: 'g', color: 'var(--secondary)' },
    { label: 'Carbs', value: totals.carbs.toString(), target: goals.carbs.toString(), unit: 'g', color: '#f59e0b' },
    { label: 'Fats', value: totals.fats.toString(), target: goals.fats.toString(), unit: 'g', color: 'var(--accent)' },
  ];

  return (
    <section id="dashboard" className="dashboard container">
      <div className="section-header">
        <h2 className="section-title">Daily Progress</h2>
        <p className="section-subtitle">Real-time nutritional overview for today</p>
      </div>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card glass">
            <div className="stat-info">
              <span className="stat-label">{stat.label}</span>
              <h3 className="stat-value">{stat.value} <span className="stat-unit">{stat.unit}</span></h3>
            </div>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                role="progressbar"
                aria-valuenow={parseFloat(stat.value.replace(',', ''))}
                aria-valuemin="0"
                aria-valuemax={parseFloat(stat.target)}
                aria-label={`${stat.label} progress`}
                style={{ 
                  width: `${Math.min((parseFloat(stat.value.replace(',', '')) / parseFloat(stat.target)) * 100, 100)}%`,
                  backgroundColor: stat.color 
                }}
              ></div>
            </div>
            <div className="stat-footer">
              <span>Goal: {stat.target} {stat.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
