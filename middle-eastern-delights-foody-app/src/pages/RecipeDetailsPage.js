import React from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { useRecipeContext } from '../contexts/RecipeContext';
import '../App.css';

const RecipeDetailsPage = () => {
  const { recipeId } = useParams();
  const { recipes } = useRecipeContext();

  // Find the selected recipe by iterating through each meal type
  let selectedRecipe = null;

  for (const mealType in recipes) {
    const recipeArray = recipes[mealType];
    selectedRecipe = recipeArray.find((recipe) => recipe.id === recipeId);

    if (selectedRecipe) {
      break;
    }
  }

  if (!selectedRecipe) {
    return <div className="recipe-details">Recipe not found</div>;
  }
  return (
    <div className="recipe-details">
      <NavBar />
      {selectedRecipe ? (
        <div className="recipe-details-content">
          <h2 className="recipe-name">{selectedRecipe.name}</h2>
          <img
            className="recipe-image"
            src={selectedRecipe.image}
            alt={selectedRecipe.name}
          />
          <h3 className="section-title">Ingredients:</h3>
          <ul className="ingredients-list">
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient">
                {ingredient}
              </li>
            ))}
          </ul>
          <p className="calories">Total Calories: {selectedRecipe.calories}</p>
          <a className="more-info" href={selectedRecipe.moreInfo}>
            More Information
          </a>
        </div>
      ) : (
        <p className="recipe-not-found">Recipe not found.</p>
      )}
    </div>
  );
};

export default RecipeDetailsPage;
