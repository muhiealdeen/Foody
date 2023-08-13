import React from 'react';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/RecipeCard';
import { useRecipeContext } from '../contexts/RecipeContext';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

const MealPage = () => {
  const { recipes } = useRecipeContext();
  const { mealType } = useParams();

  const selectedRecipes = recipes[mealType] || [];
  console.log('Selected Recipes:', selectedRecipes);

  return (
    <div>
      <NavBar />
      <section className="section-cards">
        <h2>{mealType}</h2>
        <div className="recipe-cards">
          {selectedRecipes.map((recipe, index) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MealPage;
