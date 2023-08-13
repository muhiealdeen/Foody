import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="home-page">
        <h1 className="homepage-heading">
          Explore Middle Eastern Delights Via Foody app
        </h1>
        <Link to="/meal/breakfast" className="meal-link">
          <section className="section">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5cf177f386563e0001bfce76/d4802473-a39b-42a3-a2f4-daa15db9ac39/A-selection-of-Middle-Eastern-breakfast-foods-800x530.jpg?format=2500w"
              alt="Middle Eastern Breakfast"
              className="section-image"
            />
            <div className="section-text">
              <h2 className="section-heading">Breakfast</h2>
              <p className="section-text">
                "Start your day the Middle Eastern way, with a breakfast that's
                both hearty and inviting," suggests food enthusiasts. Middle
                Eastern breakfasts are a delightful medley of flavors and
                textures, often centered around communal dining. From creamy
                labneh and olive oil-drenched vegetables to freshly baked
                flatbreads and aromatic teas, the morning meal embraces a
                variety of tastes. It's a time-honored tradition that brings
                loved ones together to share in the joy of good food and
                company, setting the tone for a vibrant day ahead."
              </p>
            </div>
          </section>
        </Link>
        <Link to="/meal/lunch" className="meal-link">
          <section className="section">
            <img
              src="https://as2.ftcdn.net/v2/jpg/05/19/36/07/1000_F_519360753_cPovG2o8NdTE8zJHxcc7eOA2K6K7Vn5Y.jpg"
              alt="Middle Eastern Lunch"
              className="section-image"
            />
            <div className="section-text">
              <h2 className="section-heading">Lunch</h2>
              <p className="section-text">
                "Middle Eastern lunches are an opportunity for communal
                gathering, with tables adorned by an array of dishes that
                celebrate the region's culinary heritage," reflects the
                sentiment of culinary experts. From vibrant salads and mezze
                platters to hearty stews and grilled meats, these meals
                encapsulate the essence of sharing, fresh ingredients, and
                timeless flavors. The dining experience becomes a tapestry of
                taste, weaving stories of tradition and unity through each
                carefully crafted dish.
              </p>
            </div>
          </section>
        </Link>
        <Link to="/meal/dinner" className="meal-link">
          <section className="section">
            <img
              src="https://shef.com/homemade-food/wp-content/uploads/lebanese-mezze-middle-eastern-food-scaled-e1662414361114.jpeg"
              alt="Middle Eastern Dinner"
              className="section-image"
            />
            <div className="section-text">
              <h2 className="section-heading">Dinner</h2>
              <p className="section-text">
                "Dinner in the Middle East is a celebration of flavors and
                aromas that dance on the palate," describes renowned chefs and
                food enthusiasts. As the sun sets, the Middle Eastern table
                transforms into a stage for culinary excellence. From aromatic
                rice dishes like biryani and maqluba to succulent kebabs and
                slow-cooked tagines, the dinner spread reflects the region's
                mastery of spices and culinary techniques. It's a time when
                families and friends gather to savor the richness of the cuisine
                and create lasting memories around a shared feast."
              </p>
            </div>
          </section>
        </Link>
        <section>
          <Link to="/recipes" className="button-link">
            <button className="button">View All Recipes</button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default HomePage;
