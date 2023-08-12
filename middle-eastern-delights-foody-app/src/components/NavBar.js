import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecipeContext } from '../contexts/RecipeContext';
import '../App.css';

const NavBar = () => {
  const { searchRecipes, setSearchResults } = useRecipeContext(); // Use the hook to access context values
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      const filteredRecipes = searchRecipes(trimmedQuery);
      setSearchResults(filteredRecipes);
      navigate('/search-results', {
        state: { searchResults: filteredRecipes },
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Foody</div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
