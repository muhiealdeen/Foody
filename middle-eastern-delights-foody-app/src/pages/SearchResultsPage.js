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

  console.log(searchResults);
  return (
    <div>
      <NavBar />
      <h2>Search Results</h2>
      {searchResults.length === 0 ? (
        <p>No recipes found for '{searchQuery}'</p>
      ) : (
        <div className="recipe-cards">
          {searchResults.map((recipe) => (
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
