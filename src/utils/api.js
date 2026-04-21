// NutriSmart API Service
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY || 'YOUR_UNSPLASH_KEY';

export const fetchFoodImage = async (query) => {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1`);
    const data = await response.json();
    return data.results[0]?.urls?.regular || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000';
  } catch (error) {
    console.error("Unsplash API Error:", error);
    return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000';
  }
};

export const fetchNutritionData = async (query) => {
  // Mocking real nutrition API response for hackathon speed
  // In a real app, you'd use Edamam or Spoonacular here
  const mockData = {
    calories: Math.floor(Math.random() * 500) + 200,
    protein: (Math.random() * 20 + 5).toFixed(1) + 'g',
    carbs: (Math.random() * 50 + 10).toFixed(1) + 'g',
    fats: (Math.random() * 15 + 5).toFixed(1) + 'g',
  };
  return new Promise((resolve) => setTimeout(() => resolve(mockData), 1000));
};
