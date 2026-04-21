import React, { useState, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const History = () => {
  const [history] = useLocalStorage('nutrismart-history', []);
  const [filter, setFilter] = useState('All');

  const filteredHistory = useMemo(() => {
    if (filter === 'All') return history;
    return history.filter(item => item.status === filter);
  }, [history, filter]);

  const stats = useMemo(() => {
    const total = history.length;
    const safe = history.filter(i => i.status === 'Safe').length;
    const risky = history.filter(i => i.status === 'Risky').length;
    return { total, safe, risky };
  }, [history]);

  return (
    <div className="history-page container" style={{ padding: '4rem 0' }}>
      <div className="section-header">
        <h2 className="section-title">Meal Analytics Log</h2>
        <p className="section-subtitle">Comprehensive tracking of your nutritional journey</p>
      </div>

      <div className="history-stats-bar glass" style={{ display: 'flex', gap: '2rem', padding: '1.5rem', marginBottom: '2rem', borderRadius: '16px' }}>
        <div className="h-stat"><span>Total Meals</span><strong>{stats.total}</strong></div>
        <div className="h-stat"><span style={{ color: '#10b981' }}>Safe Choices</span><strong>{stats.safe}</strong></div>
        <div className="h-stat"><span style={{ color: '#f43f5e' }}>Risky Items</span><strong>{stats.risky}</strong></div>
      </div>

      <div className="filter-bar" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {['All', 'Safe', 'Moderate', 'Risky'].map(f => (
          <button 
            key={f} 
            onClick={() => setFilter(f)}
            className={`glass ${filter === f ? 'active-filter' : ''}`}
            style={{ 
              padding: '0.5rem 1.5rem', 
              borderRadius: '100px', 
              border: filter === f ? '1px solid var(--primary)' : '1px solid var(--surface-border)',
              background: filter === f ? 'rgba(99, 102, 241, 0.1)' : 'none',
              color: filter === f ? 'var(--primary)' : 'var(--text-muted)'
            }}
          >
            {f}
          </button>
        ))}
      </div>
      
      <div className="history-list">
        {filteredHistory.length === 0 ? (
          <div className="glass" style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
            No meals found for this category.
          </div>
        ) : (
          filteredHistory.map((item) => (
            <div key={item.id} className="history-item glass fade-in" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '1.5rem 2rem',
              marginBottom: '1rem',
              borderRadius: '24px',
              borderLeft: `6px solid ${item.statusColor}`,
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flex: 1, minWidth: 0 }}>
                <div className="health-score-mini" style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', border: `3px solid ${item.statusColor}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800'
                }}>
                  {item.healthScore}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ 
                    fontSize: '1.1rem', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' 
                  }} title={item.name}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {item.date} • {item.calories} kcal
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right', marginLeft: '2rem' }}>
                <span style={{ 
                  backgroundColor: `${item.statusColor}22`, 
                  color: item.statusColor,
                  padding: '0.3rem 0.8rem',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}>
                  {item.status}
                </span>
                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', maxWidth: '180px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.recommendation}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;
