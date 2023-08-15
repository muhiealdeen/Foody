import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeContext } from '../contexts/RecipeContext';
import '../App.css';
import defaultPic from '../assets/no-img.jpg';

const RecipeDetailsPage = () => {
  const { recipeId } = useParams();
  const { recipes } = useRecipeContext();
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  // Find the selected recipe by iterating through each meal type
  let selectedRecipe = null;

  for (const mealType in recipes) {
    const recipeArray = recipes[mealType];
    selectedRecipe = recipeArray.find((recipe) => recipe.id === recipeId);

    if (selectedRecipe) {
      break;
    }
  }

  const handleImageError = () => {
    setImageError(true);
  };

  let imageUrl = selectedRecipe ? selectedRecipe.image : defaultPic;

  if (imageError) {
    imageUrl = defaultPic;
  }

  if (!selectedRecipe) {
    return <div className="recipe-details">Recipe not found</div>;
  }

  return (
    <div className="recipe-details">
      <NavBar />
      {selectedRecipe && (
        <div className="recipe-details-content">
          <h2 className="recipe-name">{selectedRecipe.name}</h2>
          <img
            className="recipe-image"
            src={imageUrl}
            alt={selectedRecipe.name}
            onError={handleImageError}
          />
          <h3 className="section-title">Ingredients:</h3>
          <ul className="ingredients-list">
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient">
                {ingredient}
              </li>
            ))}
          </ul>
          <p className="calories">
            Total Calories: {selectedRecipe.calories.toFixed(2)}
          </p>
          <a
            className="more-info"
            href={selectedRecipe.moreInfo}
            target="_blank"
            rel="noopener noreferrer"
          >
            More Information
          </a>
          <button className="go-back" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetailsPage;
