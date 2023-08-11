import React from 'react';
import '../App.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.name}</p>
    </div>
  );
};

export default RecipeCard;
