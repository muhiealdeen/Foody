import React, { useState } from 'react';
import '../App.css';
import defaultPic from '../assets/no-img.jpg';

const RecipeCard = ({ recipe }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  let imageUrl = recipe.image || defaultPic;

  if (imageError) {
    imageUrl = defaultPic;
  }

  return (
    <div className="recipe-card">
      <div>
        <img src={imageUrl} alt={recipe.name} onError={handleImageError} />
      </div>
      <p>{recipe.name}</p>
    </div>
  );
};

export default RecipeCard;
