import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import './FoodAnalyzer.css';

const FoodAnalyzer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);
  const [history, setHistory] = useLocalStorage('nutrismart-history', []);
  const [isLogged, setIsLogged] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        analyzeFood(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeFood = (fileName) => {
    setIsAnalyzing(true);
    setResult(null);

    // Simulate intelligent analysis based on common food names
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsLogged(false);
      
      const isRisky = fileName.toLowerCase().includes('burger') || fileName.toLowerCase().includes('pizza');
      const isModerate = fileName.toLowerCase().includes('rice') || fileName.toLowerCase().includes('curry');
      
      let foodData = {
        id: Date.now(),
        name: fileName.split('.')[0] || "Sample Meal",
        calories: 450,
        macros: { protein: "18g", carbs: "32g", fats: "28g" },
        healthScore: 85,
        status: "Safe", // Safe, Moderate, Risky
        statusColor: "#10b981",
        explanation: "High in healthy monounsaturated fats and fiber. Good source of protein.",
        recommendation: "Good for regular consumption",
        improvements: ["Add some red pepper flakes for metabolism"],
        combinations: ["Pair with green tea", "Add a side of seasonal fruits"],
        date: new Date().toLocaleString()
      };

      if (isRisky) {
        foodData = {
          ...foodData,
          healthScore: 45,
          status: "Risky",
          statusColor: "#f43f5e",
          explanation: "High in processed carbohydrates, sodium, and saturated fats.",
          recommendation: "Avoid frequent intake",
          improvements: ["Replace the soda with water", "Add a fresh garden salad to increase fiber"],
          combinations: ["Avoid fries; choose baked wedges instead", "Skip the extra cheese"],
          calories: 850
        };
      } else if (isModerate) {
        foodData = {
          ...foodData,
          healthScore: 65,
          status: "Moderate",
          statusColor: "#f59e0b",
          explanation: "Good balance of energy, but can be high in starch or oils depending on preparation.",
          recommendation: "Consume occasionally",
          improvements: ["Increase protein (add dal, egg, or grilled chicken)", "Add more leafy vegetables"],
          combinations: ["Pair with a serving of curd/yogurt", "Use brown rice instead of white rice"],
          calories: 600
        };
      }

      setResult(foodData);
    }, 2500);
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
          <h2>AI Food Analyzer <span className="v2-badge">v2.0</span></h2>
          <p>Advanced intelligent scanning for smarter nutritional choices</p>
        </div>

        <div className="upload-section" role="region" aria-label="Food photo upload">
          {!image && !isAnalyzing && (
            <label className="upload-dropzone" aria-label="Upload food image">
              <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
              <div className="upload-placeholder" aria-hidden="true">
                <span className="upload-icon">📸</span>
                <p>Click or drag to upload meal photo</p>
              </div>
            </label>
          )}

          {image && (
            <div className="image-preview-container">
              <img src={image} alt="Meal preview" className="image-preview" />
              {isAnalyzing && (
                <div className="analyzing-overlay">
                  <div className="spinner"></div>
                  <p>Intelligent Scan in Progress...</p>
                </div>
              )}
            </div>
          )}
        </div>

        {result && !isAnalyzing && (
          <div className="result-section fade-in">
            <div className="result-header">
              <div className="res-title-group">
                <h3>{result.name}</h3>
                <span className="status-badge" style={{ backgroundColor: result.statusColor }}>
                  {result.status === 'Risky' ? '⚠️ ' : '✅ '}{result.status}
                </span>
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

            <div className="analysis-grid">
              <div className="analysis-box glass">
                <h4>Analysis</h4>
                <p>{result.explanation}</p>
                <div className="rec-label" style={{ color: result.statusColor }}>
                  <strong>Advice:</strong> {result.recommendation}
                </div>
              </div>

              <div className="analysis-box glass highlight">
                <h4>Make it Healthier</h4>
                <ul className="action-list">
                  {result.improvements.map((imp, i) => <li key={i}>{imp}</li>)}
                </ul>
              </div>

              <div className="analysis-box glass">
                <h4>Smart Combinations</h4>
                <ul className="action-list">
                  {result.combinations.map((comb, i) => <li key={i}>{comb}</li>)}
                </ul>
              </div>
            </div>

            <div className="result-actions">
              <button className="btn-primary" onClick={handleLogMeal} disabled={isLogged}>
                {isLogged ? '✓ Logged to History' : 'Add to Log'}
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
