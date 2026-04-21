import React, { useState, useEffect } from 'react';
import './HealthTips.css';

const TipCard = ({ tip }) => (
  <div className="tip-card glass fade-in">
    <div className="tip-tag" data-category={tip.tag.toLowerCase()}>{tip.tag}</div>
    <div className="tip-icon">{tip.icon}</div>
    <h3 className="tip-title">{tip.title}</h3>
    <div className="tip-content">
      <p>{tip.content}</p>
      {tip.stats && (
        <div className="tip-stats">
          {tip.stats.map((stat, i) => <span key={i} className="stat-pill">{stat}</span>)}
        </div>
      )}
      <div className="tip-reference">Reference: {tip.ref}</div>
    </div>
  </div>
);

const HealthTips = () => {
  const tips = [
    {
      title: "Optimal Hydration",
      content: "Stay hydrated by consuming 2–3 liters of water daily, as recommended by ICMR and WHO. Drinking a glass of water 30 minutes before meals aids digestion and helps with portion control.",
      icon: "💧",
      tag: "Hydration",
      stats: ["2-3 Liters/Day", "Pre-meal Glass"],
      ref: "WHO / ICMR Standards"
    },
    {
      title: "Fiber-Rich Nutrition",
      content: "Aim for 25–35g of fiber daily from whole grains, fruits, and vegetables. Fiber is essential for maintaining a healthy gut microbiome, preventing spikes in blood sugar, and ensuring smooth digestion.",
      icon: "🥗",
      tag: "Nutrition",
      stats: ["25-35g Daily", "Whole Grains"],
      ref: "Global Dietary Guidelines"
    },
    {
      title: "Mindful Eating",
      content: "Practice mindfulness by eating slowly and chewing thoroughly. Avoid screens (phones/TV) while eating to better recognize satiety signals, leading to improved digestion and weight management.",
      icon: "🧠",
      tag: "Wellness",
      stats: ["No Screens", "Slow Chewing"],
      ref: "Mindfulness Research"
    },
    {
      title: "Smart Drinks",
      content: "Prioritize natural options like coconut water, buttermilk, and lemon water. Avoid sugary sodas and limit excess caffeine, as they can lead to energy crashes and dehydration.",
      icon: "🥤",
      tag: "Habit",
      stats: ["Coconut Water", "Limit Caffeine"],
      ref: "ICMR Nutrition Guide"
    }
  ];

  const [dailyTip, setDailyTip] = useState(null);

  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setDailyTip(randomTip);
  }, []);

  return (
    <section id="tips" className="tips container">
      {dailyTip && (
        <div className="daily-highlight glass fade-in">
          <div className="highlight-badge">Tip of the Day</div>
          <div className="highlight-content">
            <span className="highlight-icon">{dailyTip.icon}</span>
            <div>
              <h3>{dailyTip.title}</h3>
              <p>{dailyTip.content}</p>
            </div>
          </div>
        </div>
      )}

      <div className="section-header">
        <h2 className="section-title">Knowledge Base</h2>
        <p className="section-subtitle">Actionable insights backed by global health standards</p>
      </div>

      <div className="tips-grid">
        {tips.map((tip, index) => (
          <TipCard key={index} tip={tip} />
        ))}
      </div>
    </section>
  );
};

export default HealthTips;
