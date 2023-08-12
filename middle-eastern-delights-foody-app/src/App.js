import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecipeProvider } from './contexts/RecipeContext';
import HomePage from './pages/HomePage';
import MealPage from './pages/MealPage';
import RecipePage from './pages/RecipePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {
  return (
    <RecipeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meal/:mealType" element={<MealPage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </Router>
    </RecipeProvider>
  );
}

export default App;
