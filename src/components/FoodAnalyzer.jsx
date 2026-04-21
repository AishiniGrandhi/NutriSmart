import React, { useState } from 'react';
import './FoodAnalyzer.css';

const FoodAnalyzer = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        analyzeFood();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeFood = () => {
    setIsAnalyzing(true);
    setResult(null);

    // Simulate API call to Gemini
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        name: "Avocado Toast with Poached Egg",
        calories: 450,
        macros: { protein: "18g", carbs: "32g", fats: "28g" },
        healthScore: 85,
        insights: "High in healthy monounsaturated fats and fiber. Good source of protein from the egg.",
        recommendation: "Consider adding some red pepper flakes for a metabolism boost!"
      });
    }, 2500);
  };

  return (
    <section id="analyze" className="analyze container">
      <div className="analyzer-card glass">
        <div className="analyzer-header">
          <h2>AI Food Analyzer</h2>
          <p>Upload a photo of your meal for instant nutritional insights</p>
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
                  <p>Gemini is analyzing...</p>
                </div>
              )}
            </div>
          )}
        </div>

        {result && !isAnalyzing && (
          <div className="result-section fade-in">
            <div className="result-header">
              <h3>{result.name}</h3>
              <div className="health-badge" style={{ backgroundColor: `hsl(${result.healthScore}, 70%, 40%)` }}>
                Score: {result.healthScore}
              </div>
            </div>

            <div className="result-stats">
              <div className="res-stat">
                <span>Calories</span>
                <strong>{result.calories}</strong>
              </div>
              <div className="res-stat">
                <span>Protein</span>
                <strong>{result.macros.protein}</strong>
              </div>
              <div className="res-stat">
                <span>Carbs</span>
                <strong>{result.macros.carbs}</strong>
              </div>
              <div className="res-stat">
                <span>Fats</span>
                <strong>{result.macros.fats}</strong>
              </div>
            </div>

            <div className="result-details">
              <div className="insight-box">
                <h4>Insights</h4>
                <p>{result.insights}</p>
              </div>
              <div className="recommend-box">
                <h4>Recommendation</h4>
                <p>{result.recommendation}</p>
              </div>
            </div>

            <button 
              className="btn-primary" 
              onClick={() => setImage(null) || setResult(null)}
              aria-label="Analyze another food item"
            >
              Analyze Another
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FoodAnalyzer;
