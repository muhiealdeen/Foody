import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeContext = createContext();

export function useRecipeContext() {
  return useContext(RecipeContext);
}

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  //  I am here fetching recipes and updating state
  const fetchRecipes = async () => {
    const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];

    const fetchRecipeData = async (mealType) => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=b262eed2&app_key=23f36ce87111305ce2f68806a91441f4&diet=balanced&cuisineType=Middle%20Eastern&mealType=${mealType}&imageSize=REGULAR`,
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
  const [searchResults, setSearchResults] = useState([]);

  const contextValue = {
    recipes,
    searchRecipes,
    searchResults,
    setSearchResults,
  };

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
}
