// Components/HomePage.js
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import RecipeCard from './RecipeCard';

const HomePage = () => {
  const [recipes, setRecipes] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  useEffect(() => {
    // Fetch data from API for each meal type
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

  return (
    <div>
      <NavBar />
      <section>
        <h2>Breakfast</h2>
        <div className="recipe-cards">
          {recipes.breakfast.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </section>
      <section>
        <h2>Lunch</h2>
        <div className="recipe-cards">
          {recipes.lunch.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </section>
      <section>
        <h2>Dinner</h2>
        <div className="recipe-cards">
          {recipes.dinner.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
