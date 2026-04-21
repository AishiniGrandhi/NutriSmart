import React from 'react';

const StoreCard = ({ item }) => {
  return (
    <div className="store-card glass" style={{ padding: '1rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0 }}>{item.name}</h4>
        <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>{item.price}</span>
      </div>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.benefit}</div>
      <div style={{ 
        fontSize: '0.75rem', 
        padding: '0.2rem 0.6rem', 
        background: 'rgba(16, 185, 129, 0.1)', 
        color: 'var(--secondary)',
        borderRadius: '100px',
        alignSelf: 'flex-start',
        marginTop: '0.5rem'
      }}>
        Better than: {item.alternativeTo}
      </div>
    </div>
  );
};

export default StoreCard;
