import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const History = () => {
  const [history] = useLocalStorage('nutrismart-history', []);

  return (
    <div className="history-page container" style={{ padding: '4rem 0' }}>
      <h2 className="section-title">Meal History</h2>
      <p className="section-subtitle">A log of your previous AI food analyses</p>
      
      <div className="history-list glass" style={{ marginTop: '2rem', padding: '2rem' }}>
        {history.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
            No meals logged yet. Start by analyzing a meal!
          </div>
        ) : (
          history.map((item, index) => (
            <div key={item.id || index} className="history-item" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 0',
              borderBottom: index !== history.length - 1 ? '1px solid var(--surface-border)' : 'none'
            }}>
              <div>
                <h4 style={{ fontSize: '1.2rem' }}>{item.name}</h4>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.date}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: '700', color: 'var(--primary)' }}>{item.calories} kcal</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>Score: {item.healthScore}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;
