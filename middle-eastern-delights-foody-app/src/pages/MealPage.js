import React from 'react';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/RecipeCard';
import { useRecipeContext } from '../contexts/RecipeContext';
import { useParams } from 'react-router-dom';

const MealPage = () => {
  const { recipes } = useRecipeContext();
  const { mealType } = useParams();

  const selectedRecipes = recipes[mealType] || [];

  return (
    <div>
      <NavBar />
      <section>
        <h2>{mealType}</h2>
        <div className="recipe-cards">
          {selectedRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MealPage;
