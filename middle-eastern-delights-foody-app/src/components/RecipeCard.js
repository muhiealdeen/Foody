import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  console.log('>>>>>>>>> ', recipe.image);

  const handleCardClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };
  return (
    <div className="recipe-card" onClick={handleCardClick}>
      <div>
        <img
          src={
            recipe.image !== ''
              ? recipe.image
              : '../assets/pngtree-vector-illustration-knife-and-fork-western-food-plate-image_2283844.jpg'
          }
          alt={recipe.name}
        />
      </div>
      <p>{recipe.name}</p>
    </div>
  );
};

export default RecipeCard;
