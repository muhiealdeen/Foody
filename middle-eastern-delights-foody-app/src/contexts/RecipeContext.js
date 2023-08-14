import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeContext = createContext();

console.log('lllllllllllllllllllll: ', process.env.REACT_APP_API_KEY);

export function useRecipeContext() {
  return useContext(RecipeContext);
}

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  //  I am here fetching recipes and updating state
  const fetchRecipes = async () => {
    const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];

    const fetchRecipeData = async (mealType) => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&diet=balanced&cuisineType=Middle%20Eastern&mealType=${mealType}&imageSize=REGULAR`,
      );
      const data = await response.json();
      console.log(`data`, data);
      return data.hits.map((hit) => ({
        id: uuidv4(),
        image: hit.recipe.image,
        name: hit.recipe.label,
        ingredients: hit.recipe.ingredientLines,
        calories: hit.recipe.calories,
        moreInfo: hit.recipe.url,
      }));
    };

    const recipesByMealType = await Promise.all(
      mealTypes.map((mealType) => fetchRecipeData(mealType)),
    );

    setRecipes({
      breakfast: recipesByMealType[0],
      lunch: recipesByMealType[1],
      dinner: recipesByMealType[2],
    });
    console.log('Recipes:', recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  const searchRecipes = (query) => {
    const allRecipes = Object.values(recipes).flat();
    const filteredRecipes = allRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase()),
    );
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
  console.log('SSSSSSSSSSS', searchResults);
  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
}
