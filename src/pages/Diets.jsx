import React from 'react';
import './Diets.css';

const DietCard = ({ diet }) => (
  <div className="diet-card glass fade-in">
    <div className="diet-header">
      <span className="diet-icon">{diet.icon}</span>
      <h3>{diet.title}</h3>
    </div>
    <div className="diet-suitable"><strong>Best for:</strong> {diet.suitable}</div>
    <div className="diet-focus"><strong>Key Focus:</strong> {diet.focus}</div>
    <div className="meal-plan">
      <div className="meal-item"><span>🍳 Breakfast:</span> {diet.meals.breakfast}</div>
      <div className="meal-item"><span>🥗 Lunch:</span> {diet.meals.lunch}</div>
      <div className="meal-item"><span>🍽️ Dinner:</span> {diet.meals.dinner}</div>
    </div>
  </div>
);

const Diets = () => {
  const diets = [
    {
      title: "High Protein",
      icon: "🥩",
      suitable: "Muscle building & athletes",
      focus: "Amino acids & tissue repair",
      meals: {
        breakfast: "Oatmeal with protein scoop & almonds",
        lunch: "Grilled chicken breast with quinoa",
        dinner: "Salmon fillet with sautéed spinach"
      }
    },
    {
      title: "Weight Loss",
      icon: "🔥",
      suitable: "Calorie deficit & metabolism",
      focus: "High fiber & low glycemic index",
      meals: {
        breakfast: "Scrambled egg whites with veggies",
        lunch: "Large green salad with chickpeas",
        dinner: "Baked white fish with steamed broccoli"
      }
    },
    {
      title: "Balanced Diet",
      icon: "⚖️",
      suitable: "Maintenance & general health",
      focus: "Macro-nutrient harmony",
      meals: {
        breakfast: "Greek yogurt with mixed berries",
        lunch: "Lentil soup with whole grain bread",
        dinner: "Lean beef stir-fry with mixed veggies"
      }
    },
    {
      title: "Vegetarian",
      icon: "🥦",
      suitable: "Plant-based lifestyle",
      focus: "Complex carbs & plant proteins",
      meals: {
        breakfast: "Tofu scramble with spinach & toast",
        lunch: "Paneer/Tofu tikka with brown rice",
        dinner: "Sweet potato & black bean tacos"
      }
    },
    {
      title: "Gut Health",
      icon: "🦠",
      suitable: "Digestion & microbiome balance",
      focus: "Probiotics & Prebiotic fiber",
      meals: {
        breakfast: "Greek yogurt with flaxseeds & honey",
        lunch: "Kombucha bowl with quinoa & fermented slaw",
        dinner: "Miso-glazed tempeh with kimchi"
      }
    },
    {
      title: "Antioxidant-Rich",
      icon: "🫐",
      suitable: "Detox & anti-aging",
      focus: "Polyphenols & Vitamins A, C, E",
      meals: {
        breakfast: "Acai bowl with blueberries & chia",
        lunch: "Spinach & pomegranate salad with nuts",
        dinner: "Turmeric-roasted cauliflower with salmon"
      }
    }
  ];

  return (
    <div className="diets-page container">
      <div className="section-header">
        <h2 className="section-title">Smart Diet Plans</h2>
        <p className="section-subtitle">Curated meal plans designed by nutrition experts</p>
      </div>

      <div className="diets-grid">
        {diets.map((diet, index) => (
          <DietCard key={index} diet={diet} />
        ))}
      </div>
    </div>
  );
};

export default Diets;
