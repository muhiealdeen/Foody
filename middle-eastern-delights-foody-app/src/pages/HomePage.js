import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <section>
        <h2>Breakfast</h2>
        <Link to="/meal/breakfast">View Breakfast Recipes</Link>
      </section>
      <section>
        <h2>Lunch</h2>
        <Link to="/meal/lunch">View Lunch Recipes</Link>
      </section>
      <section>
        <h2>Dinner</h2>
        <Link to="/meal/dinner">View Dinner Recipes</Link>
      </section>
      <Link to="/recipes">View All Recipes</Link>
    </div>
  );
};

export default HomePage;
