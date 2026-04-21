import React, { useEffect, useState } from 'react';
import { fetchFoodImage } from '../utils/api';

const StoreCard = ({ item }) => {
  const [img, setImg] = useState('');

  useEffect(() => {
    const loadImg = async () => {
      const url = await fetchFoodImage(item.name);
      setImg(url);
    };
    loadImg();
  }, [item.name]);

  return (
    <div className="store-card glass" style={{ 
      padding: '1.25rem', 
      borderRadius: '20px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem',
      border: '1px solid var(--surface-border)',
      background: 'rgba(255, 255, 255, 0.02)'
    }}>
      <div style={{ position: 'relative', width: '100%', height: '100px', borderRadius: '12px', overflow: 'hidden' }}>
        <img src={img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ 
          position: 'absolute', top: '8px', left: '8px', 
          background: 'var(--primary)', color: 'white', 
          fontSize: '0.65rem', padding: '0.2rem 0.5rem', 
          borderRadius: '4px', fontWeight: 'bold' 
        }}>
          {item.locationName}
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h4 style={{ margin: 0, fontSize: '1rem' }}>{item.name}</h4>
        <span style={{ color: '#10b981', fontWeight: '800' }}>{item.price}</span>
      </div>
      
      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.benefit}</div>
      
      <div style={{ 
        fontSize: '0.75rem', 
        padding: '0.3rem 0.75rem', 
        background: 'rgba(16, 185, 129, 0.1)', 
        color: '#10b981',
        borderRadius: '100px',
        alignSelf: 'flex-start',
        fontWeight: '600'
      }}>
        Better than: {item.alternativeTo}
      </div>
      
      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', opacity: 0.5, borderTop: '1px solid var(--surface-border)', paddingTop: '0.5rem' }}>
        Verified by BIS Quality Standards
      </div>
    </div>
  );
};

export default StoreCard;
