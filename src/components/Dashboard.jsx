import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { label: 'Calories', value: '1,840', target: '2,200', unit: 'kcal', color: 'var(--primary)' },
    { label: 'Protein', value: '92', target: '120', unit: 'g', color: 'var(--secondary)' },
    { label: 'Carbs', value: '210', target: '250', unit: 'g', color: '#f59e0b' },
    { label: 'Fats', value: '65', target: '75', unit: 'g', color: 'var(--accent)' },
  ];

  return (
    <section id="dashboard" className="dashboard container">
      <div className="section-header">
        <h2 className="section-title">Your Progress</h2>
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
                  width: `${(parseFloat(stat.value.replace(',', '')) / parseFloat(stat.target)) * 100}%`,
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
