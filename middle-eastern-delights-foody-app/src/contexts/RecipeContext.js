import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeContext = createContext();

export function useRecipeContext() {
  return useContext(RecipeContext);
}

// Fetch recipe data function
export async function fetchRecipeData(mealType = null, searchQuery = null) {
  let apiUrl;

  if (mealType) {
    apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced&cuisineType=Middle%20Eastern&mealType=${mealType}&imageSize=REGULAR`;
  }
  if (searchQuery) {
    apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced&cuisineType=Middle%20Eastern&imageSize=REGULAR`;
  }
  const response = await fetch(apiUrl);
  const data = await response.json();
  return await data.hits.map((hit) => ({
    id: uuidv4(),
    image: hit.recipe.image,
    name: hit.recipe.label,
    ingredients: hit.recipe.ingredientLines,
    calories: hit.recipe.calories,
    moreInfo: hit.recipe.url,
  }));
}

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const fetchRecipes = async () => {
    const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];
    const recipesByMealType = await Promise.all(
      mealTypes.map((mealType) => fetchRecipeData(mealType)),
    );
    setRecipes({
      breakfast: recipesByMealType[0],
      lunch: recipesByMealType[1],
      dinner: recipesByMealType[2],
    });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const searchRecipes = async (query) => {
    const filteredRecipes = await fetchRecipeData(null, query);

    return filteredRecipes;
  };

  const contextValue = {
    recipes,
    searchRecipes,
    searchResults,
    setSearchResults,
    searchQuery,
    setSearchQuery,
  };

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
}
