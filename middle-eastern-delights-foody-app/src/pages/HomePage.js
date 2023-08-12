import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <h1>Explore Middle Eastern Delights Via Foody app </h1>
      <Link to="/meal/breakfast" className="meal-link">
        <section>
          <h2>Breakfast</h2>
        </section>
        View Breakfast Recipes
      </Link>
      <Link to="/meal/lunch" className="meal-link">
        <section>
          <h2>Lunch</h2>
        </section>
        View Lunch Recipes
      </Link>
      <Link to="/meal/dinner" className="meal-link">
        <section>
          <h2>Dinner</h2>
        </section>
        View Dinner Recipes
      </Link>

      <section>
        <Link to="/recipes" className="button-link">
          <button>View All Recipes</button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
