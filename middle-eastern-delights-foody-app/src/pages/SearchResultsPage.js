import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useRecipeContext } from '../contexts/RecipeContext';
import RecipeCard from '../components/RecipeCard';
import '../App.css';
import NavBar from '../components/NavBar';

const SearchResultsPage = () => {
  const location = useLocation();
  const { searchResults } = useRecipeContext();
  const searchQuery = new URLSearchParams(location.search).get('query');

  console.log('TTTTTTTTT', searchResults);
  // Group recipes by name and select only the first item from each group to get rid of the duplicated results
  const uniqueSearchResults = Object.values(
    searchResults.reduce((acc, recipe) => {
      if (!acc[recipe.name]) {
        acc[recipe.name] = recipe;
      }
      return acc;
    }, {}),
  );
  return (
    <div>
      <NavBar />
      <h2>Search Results</h2>
      {uniqueSearchResults.length === 0 ? (
        <p>No recipes found for '{searchQuery}'</p>
      ) : (
        <div className="recipe-cards">
          {uniqueSearchResults.map((recipe) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
