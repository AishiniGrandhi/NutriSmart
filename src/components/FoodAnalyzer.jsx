import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import StoreCard from './StoreCard';
import { fetchFoodImage, fetchNutritionData } from '../utils/api';
import './FoodAnalyzer.css';

const TagBadge = ({ tag }) => (
  <span className="tag-badge glass">{tag}</span>
);

const InsightCard = ({ title, level, explanation, icon }) => (
  <div className="insight-card glass">
    <div className="insight-header">
      <span className="insight-icon">{icon}</span>
      <div className="insight-title-group">
        <h4>{title}</h4>
        <span className={`level-indicator ${level.toLowerCase()}`}>{level}</span>
      </div>
    </div>
    <p>{explanation}</p>
  </div>
);

const FoodAnalyzer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);
  const [history, setHistory] = useLocalStorage('nutrismart-history', []);
  const [isLogged, setIsLogged] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
      await analyzeFood(file.name);
    }
  };

  const analyzeFood = async (fileName) => {
    setIsAnalyzing(true);
    setResult(null);

    const foodName = fileName.split('.')[0] || "Sample Meal";
    
    // Fetch real image and nutrition data
    const [realImage, realNutrition] = await Promise.all([
      fetchFoodImage(foodName),
      fetchNutritionData(foodName)
    ]);

    // Simulate intelligent analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsLogged(false);
      
      const isRisky = foodName.toLowerCase().includes('burger') || foodName.toLowerCase().includes('pizza');
      const isModerate = foodName.toLowerCase().includes('rice') || foodName.toLowerCase().includes('curry');
      
      let foodData = {
        id: Date.now(),
        name: foodName,
        calories: realNutrition.calories,
        macros: { protein: realNutrition.protein, carbs: realNutrition.carbs, fats: realNutrition.fats },
        healthScore: 85,
        status: "Safe",
        statusColor: "#10b981",
        explanation: "Rich in vitamins and fiber. Minimal processing detected.",
        recommendation: "Good for regular consumption",
        tags: ["High Antioxidant", "Gut Friendly"],
        antioxidant: { level: "High", icon: "🫐", explanation: "Rich in Vitamin C and polyphenols that fight free radicals." },
        gutHealth: { level: "Good", icon: "🦠", explanation: "High fiber content supports a healthy gut microbiome." },
        boost: "Add some berries or curd to further enhance gut health!",
        nearbyStores: [
          { name: "Organic Brown Bread", price: "₹55", benefit: "High Fiber", alternativeTo: "White Bread" },
          { name: "Farm Fresh Eggs", price: "₹6/pc", benefit: "Lean Protein", alternativeTo: "Processed Sausages" }
        ],
        realImage,
        date: new Date().toLocaleString()
      };

      if (isRisky) {
        foodData = {
          ...foodData,
          healthScore: 45,
          status: "Risky",
          statusColor: "#f43f5e",
          explanation: "High in processed carbohydrates and saturated fats.",
          recommendation: "Avoid frequent intake",
          tags: ["Processed", "High Sodium"],
          antioxidant: { level: "Low", icon: "🫐", explanation: "Lacks essential vitamins due to heavy processing." },
          gutHealth: { level: "Poor", icon: "🦠", explanation: "Low fiber may negatively affect digestion and gut health." },
          boost: "Add a side salad or replace soda with water to improve this meal.",
          nearbyStores: [
            { name: "Fresh Garden Salad", price: "₹120", benefit: "Rich in Fiber", alternativeTo: "Regular Fries" },
            { name: "Grilled Chicken Strip", price: "₹180", benefit: "Low Fat Protein", alternativeTo: "Fried Patty" }
          ],
          calories: 850
        };
      }

      setResult(foodData);
    }, 1500);
  };

  const handleLogMeal = () => {
    if (result) {
      setHistory([result, ...history]);
      setIsLogged(true);
    }
  };

  return (
    <section id="analyze" className="analyze container">
      <div className="analyzer-card glass">
        <div className="analyzer-header">
          <h2>Nutritional Intelligence <span className="v3-badge">v3.5</span></h2>
          <p>AI-powered insights for Antioxidants and Gut Health</p>
        </div>

        <div className="upload-section">
          {!image && !isAnalyzing && (
            <label className="upload-dropzone">
              <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
              <div className="upload-placeholder">
                <span className="upload-icon">📸</span>
                <p>Upload meal to start AI scan</p>
              </div>
            </label>
          )}

          {(image || isAnalyzing) && (
            <div className="image-preview-container">
              <img src={result?.realImage || image} alt="Meal" className="image-preview" />
              {isAnalyzing && (
                <div className="analyzing-overlay">
                  <div className="spinner"></div>
                  <p>Consulting Gemini AI...</p>
                </div>
              )}
            </div>
          )}
        </div>

        {result && !isAnalyzing && (
          <div className="result-section fade-in">
            <div className="result-header">
              <div className="res-title-group">
                <h3 title={result.name}>{result.name}</h3>
                <div className="tags-container">
                  {result.tags.map(tag => <TagBadge key={tag} tag={tag} />)}
                </div>
              </div>
              <div className="health-score-ring" style={{ borderColor: result.statusColor }}>
                <span className="score-val">{result.healthScore}</span>
                <span className="score-label">Score</span>
              </div>
            </div>

            <div className="result-stats">
              <div className="res-stat"><span>Calories</span><strong>{result.calories}</strong></div>
              <div className="res-stat"><span>Protein</span><strong>{result.macros.protein}</strong></div>
              <div className="res-stat"><span>Carbs</span><strong>{result.macros.carbs}</strong></div>
              <div className="res-stat"><span>Fats</span><strong>{result.macros.fats}</strong></div>
            </div>

            <div className="insights-grid">
              <InsightCard title="Antioxidants" level={result.antioxidant.level} explanation={result.antioxidant.explanation} icon={result.antioxidant.icon} />
              <InsightCard title="Gut Health" level={result.gutHealth.level} explanation={result.gutHealth.explanation} icon={result.gutHealth.icon} />
            </div>

            <div className="analysis-grid">
              <div className="analysis-box glass highlight">
                <h4>Boost Your Meal 🚀</h4>
                <p>{result.boost}</p>
              </div>
              
              <div className="analysis-box glass">
                <h4>Nearby Alternatives 🛒</h4>
                <div className="store-grid">
                  {result.nearbyStores.map((item, i) => <StoreCard key={i} item={item} />)}
                </div>
              </div>
            </div>

            <div className="result-actions">
              <button className="btn-primary" onClick={handleLogMeal} disabled={isLogged}>
                {isLogged ? '✓ Logged' : 'Log Meal'}
              </button>
              <button className="btn-secondary" onClick={() => setImage(null) || setResult(null)}>
                New Scan
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FoodAnalyzer;
