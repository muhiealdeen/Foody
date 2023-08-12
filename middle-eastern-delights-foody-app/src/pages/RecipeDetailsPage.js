import React from 'react';
import NavBar from '../components/NavBar';
import { useParams, Link } from 'react-router-dom';
import { useRecipeContext } from '../contexts/RecipeContext';

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
    return <div>Recipe not found</div>;
  }
  return (
    <div>
      <NavBar />
      {selectedRecipe ? (
        <div>
          <h2>{selectedRecipe.name}</h2>
          <img src={selectedRecipe.image} alt={selectedRecipe.name} />
          <h3>Ingredients:</h3>
          <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>Total Calories: {selectedRecipe.calories}</p>
          <a href={selectedRecipe.moreInfo}>More Information</a>
          <Link to="/">
            <button>Home page</button>
          </Link>
        </div>
      ) : (
        <p>Recipe not found.</p>
      )}
    </div>
  );
};

export default RecipeDetailsPage;
