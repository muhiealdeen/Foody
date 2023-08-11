import React from 'react';
import NavBar from '../components/NavBar';
import RecipeCard from '../components/RecipeCard';
import { useRecipeContext } from '../contexts/RecipeContext';
import { Link } from 'react-router-dom';
import '../App.css';

const RecipePage = () => {
  const { recipes } = useRecipeContext();

  return (
    <div>
      <NavBar />
      <section>
        <h2>All Recipes</h2>
        <div className="recipe-cards">
          {Object.values(recipes).flatMap((recipeArray) =>
            recipeArray.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            )),
          )}
        </div>
      </section>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default RecipePage;
