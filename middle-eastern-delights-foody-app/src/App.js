import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecipeProvider } from './contexts/RecipeContext';
import HomePage from './pages/HomePage';
import MealPage from './pages/MealPage';
import RecipePage from './pages/RecipePage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';

function App() {
  return (
    <RecipeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meal/:mealType" element={<MealPage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
          <Route path="/recipes" element={<RecipePage />} />
        </Routes>
      </Router>
    </RecipeProvider>
  );
}

export default App;
