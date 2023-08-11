import React, { createContext, useContext, useState, useEffect } from 'react';

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

  useEffect(() => {
    //  I am here fetching recipes and updating state
    const fetchRecipes = async () => {
      const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];

      const fetchRecipeData = async (mealType) => {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&app_id=b262eed2&app_key=23f36ce87111305ce2f68806a91441f4&diet=balanced&cuisineType=Middle%20Eastern&mealType=${mealType}&imageSize=REGULAR`,
        );
        const data = await response.json();
        return data.hits.map((hit) => ({
          image: hit.recipe.image,
          name: hit.recipe.label,
        }));
      };
      // useEffect(() => {
      //   fetchRecipes().then(() => {
      //     console.log(recipes);
      //   });
      // }, []);

      const recipesByMealType = await Promise.all(
        mealTypes.map((mealType) => fetchRecipeData(mealType)),
      );

      setRecipes({
        breakfast: recipesByMealType[0],
        lunch: recipesByMealType[1],
        dinner: recipesByMealType[2],
      });
    };

    fetchRecipes();
  }, []);

  const contextValue = {
    recipes,
  };

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
}
