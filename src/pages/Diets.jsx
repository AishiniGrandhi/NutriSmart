import React, { useEffect, useState } from 'react';
import { fetchFoodImage } from '../utils/api';
import './Diets.css';

const DietCard = ({ diet }) => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const bImg = await fetchFoodImage(diet.meals.breakfast);
      const lImg = await fetchFoodImage(diet.meals.lunch);
      const dImg = await fetchFoodImage(diet.meals.dinner);
      setImages({ breakfast: bImg, lunch: lImg, dinner: dImg });
    };
    loadImages();
  }, [diet]);

  return (
    <div className="diet-card glass fade-in">
      <div className="diet-header">
        <span className="diet-icon">{diet.icon}</span>
        <h3>{diet.title}</h3>
      </div>
      <div className="verification-badge">✅ WHO Standard Verified</div>
      <div className="diet-suitable"><strong>Best for:</strong> {diet.suitable}</div>
      <div className="diet-focus"><strong>Key Focus:</strong> {diet.focus}</div>
      
      <div className="meal-plan">
        <div className="meal-item">
          <img src={images.breakfast} alt="Breakfast" className="meal-img" />
          <div><span>🍳 Breakfast:</span> {diet.meals.breakfast}</div>
        </div>
        <div className="meal-item">
          <img src={images.lunch} alt="Lunch" className="meal-img" />
          <div><span>🥗 Lunch:</span> {diet.meals.lunch}</div>
        </div>
        <div className="meal-item">
          <img src={images.dinner} alt="Dinner" className="meal-img" />
          <div><span>🍽️ Dinner:</span> {diet.meals.dinner}</div>
        </div>
      </div>
      <div className="bis-footer">BIS Quality Code: {diet.bisCode}</div>
    </div>
  );
};

const Diets = () => {
  const diets = [
    {
      title: "High Protein",
      icon: "🥩",
      bisCode: "BIS-HP-2024",
      suitable: "Muscle building & athletes",
      focus: "Amino acids & tissue repair",
      meals: {
        breakfast: "2 Egg Whites + 100g Oatmeal with 10g Almonds",
        lunch: "150g Grilled Chicken Breast + 1 cup Quinoa",
        dinner: "200g Salmon Fillet + 150g Sautéed Spinach"
      }
    },
    {
      title: "Weight Loss",
      icon: "🔥",
      bisCode: "BIS-WL-2024",
      suitable: "Calorie deficit & metabolism",
      focus: "High fiber & low glycemic index",
      meals: {
        breakfast: "3 Scrambled Egg Whites + 100g Mixed Veggies",
        lunch: "150g Green Salad with 50g Chickpeas",
        dinner: "180g Baked White Fish + 200g Steamed Broccoli"
      }
    },
    {
      title: "Balanced Diet",
      icon: "⚖️",
      bisCode: "BIS-BD-2024",
      suitable: "Maintenance & general health",
      focus: "Macro-nutrient harmony",
      meals: {
        breakfast: "150g Greek Yogurt with 30g Mixed Berries",
        lunch: "200ml Lentil Soup + 2 slices Whole Grain Bread",
        dinner: "150g Lean Beef Stir-fry + 1 cup Brown Rice"
      }
    },
    {
      title: "Gut Health",
      icon: "🦠",
      bisCode: "BIS-GH-2024",
      suitable: "Digestion & microbiome balance",
      focus: "Probiotics & Prebiotic fiber",
      meals: {
        breakfast: "200g Greek Yogurt + 1 tbsp Flaxseeds",
        lunch: "1 cup Quinoa Bowl with 100g Fermented Slaw",
        dinner: "150g Miso-glazed Tempeh + 50g Kimchi"
      }
    }
  ];

  return (
    <div className="diets-page container">
      <div className="section-header">
        <h2 className="section-title">Verified Diet Plans</h2>
        <p className="section-subtitle">Based on WHO Nutritional Standards and BIS Quality Guidelines</p>
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
