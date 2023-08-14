import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import defaultPic from '../assets/no-img.jpg';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleCardClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  let imageUrl = recipe.image || defaultPic;

  if (imageError) {
    imageUrl = defaultPic;
  }

  return (
    <div className="recipe-card" onClick={handleCardClick}>
      <div>
        <img src={imageUrl} alt={recipe.name} onError={handleImageError} />
      </div>
      <p>{recipe.name}</p>
    </div>
  );
};

export default RecipeCard;
