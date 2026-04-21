import React from 'react';
import './KidsHealth.css';

const KidsHealth = () => {
  const kidTips = [
    {
      title: "The Chocolate Rule",
      content: "Chocolates are yummy, but they have lots of hidden sugar! Too much sugar can make you feel tired later and is not good for your teeth.",
      warning: "Dental Warning: Sugar causes cavities!",
      icon: "🍫",
      advice: "Try to eat only one small piece and rinse your mouth with water after!"
    },
    {
      title: "Ice Cream Fun",
      content: "Ice cream is a great treat for special days, but our bodies need healthy food like fruits and veggies to grow strong every day.",
      warning: "Guidance: Occasional treat only.",
      icon: "🍦",
      advice: "Enjoy it on weekends or special celebrations!"
    },
    {
      title: "Strong Teeth Secret",
      content: "Did you know rinsing your mouth with water after eating sweets helps wash away the sugar bugs? It keeps your smile bright and healthy!",
      warning: "Tip: Rinse after every sweet treat.",
      icon: "🪥",
      advice: "Brush twice a day for 2 minutes to be a dental superhero!"
    }
  ];

  return (
    <div className="kids-health-page container">
      <div className="kids-hero">
        <h1 className="kids-title">🦁 Kids Health Zone 🦒</h1>
        <p className="kids-subtitle">Fun tips for our little health superheroes!</p>
      </div>

      <div className="kids-grid">
        {kidTips.map((tip, index) => (
          <div key={index} className="kids-card glass">
            <div className="kids-icon">{tip.icon}</div>
            <h3 className="kids-card-title">{tip.title}</h3>
            <p className="kids-card-content">{tip.content}</p>
            <div className="kids-warning">{tip.warning}</div>
            <div className="kids-advice">
              <strong>Super Tip:</strong> {tip.advice}
            </div>
          </div>
        ))}
      </div>

      <div className="kids-footer glass">
        <h3>Remember: Healthy kids are happy kids! 🍎🥦🥛</h3>
      </div>
    </div>
  );
};

export default KidsHealth;
