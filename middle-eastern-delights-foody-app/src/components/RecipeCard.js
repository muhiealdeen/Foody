import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };
  return (
    <div className="recipe-card" onClick={handleCardClick}>
      <div>
        <img src={recipe.image} alt={recipe.name} />
      </div>
      <p>{recipe.name}</p>
    </div>
  );
};

export default RecipeCard;
