import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import NavBar from '../components/NavBar';
import { useRecipeContext } from '../contexts/RecipeContext';
import '../App.css';

const SearchResultsPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');
  const { searchRecipes } = useRecipeContext();
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const results = await searchRecipes(searchQuery);
        setSearchResults(results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setIsLoading(false);
      }
    };
    getSearchResults();
  }, [searchQuery, searchRecipes]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (searchResults.length === 0) {
    content = <p>No recipes found for '{searchQuery}'</p>;
  } else {
    content = (
      <div className="recipe-cards">
        {searchResults.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div>
      <NavBar />

      <h2>Search Results for "{searchQuery}"</h2>
      {content}
    </div>
  );
};

export default SearchResultsPage;
