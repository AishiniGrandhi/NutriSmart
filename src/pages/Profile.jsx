import React from 'react';

const Profile = () => {
  return (
    <div className="profile-page container" style={{ padding: '4rem 0' }}>
      <h2 className="section-title">User Profile</h2>
      <p className="section-subtitle">Manage your health goals and personal settings</p>
      
      <div className="profile-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
        <div className="glass" style={{ padding: '2rem' }}>
          <h3>Health Goals</h3>
          <div style={{ marginTop: '1.5rem' }}>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Daily Calorie Goal</label>
              <input type="number" defaultValue="2200" className="glass" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--surface-border)', color: 'white' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Protein Goal (g)</label>
              <input type="number" defaultValue="120" className="glass" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--surface-border)', color: 'white' }} />
            </div>
            <button className="btn-primary" style={{ marginTop: '1rem' }}>Save Goals</button>
          </div>
        </div>
        
        <div className="glass" style={{ padding: '2rem' }}>
          <h3>Personal Info</h3>
          <div style={{ marginTop: '1.5rem' }}>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Name</label>
              <input type="text" defaultValue="John Doe" className="glass" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--surface-border)', color: 'white' }} />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Weight (kg)</label>
              <input type="number" defaultValue="75" className="glass" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--surface-border)', color: 'white' }} />
            </div>
            <button className="btn-secondary" style={{ marginTop: '1rem' }}>Update Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
