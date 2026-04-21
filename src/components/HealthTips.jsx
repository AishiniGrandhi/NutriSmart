import React from 'react';
import './HealthTips.css';

const HealthTips = () => {
  const tips = [
    {
      title: "Hydration First",
      content: "Drinking a glass of water before meals can help with digestion and portion control.",
      icon: "💧",
      tag: "Habit"
    },
    {
      title: "Fiber Focus",
      content: "Add colorful vegetables to every meal to ensure you're getting enough micronutrients and fiber.",
      icon: "🥗",
      tag: "Nutrition"
    },
    {
      title: "Mindful Eating",
      content: "Try to eat without distractions like your phone or TV to better listen to your satiety cues.",
      icon: "🧠",
      tag: "Wellness"
    }
  ];

  return (
    <section id="tips" className="tips container">
      <div className="section-header">
        <h2 className="section-title">Daily Health Tips</h2>
        <p className="section-subtitle">Small changes that lead to big results</p>
      </div>

      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div key={index} className="tip-card glass">
            <div className="tip-tag">{tip.tag}</div>
            <div className="tip-icon">{tip.icon}</div>
            <h3 className="tip-title">{tip.title}</h3>
            <p className="tip-content">{tip.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthTips;
