import React from 'react';
import NavBar from '../components/NavBar';
import '../App.css';

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <div className="about-container">
        <h1 className="about-heading">About Foody: Your Culinary Companion</h1>
        <p className="about-text">
          Explore Middle Eastern Delights Via Foody app.
        </p>
        <p className="about-text">
          Welcome to Foody, your go-to app for culinary inspiration and
          delicious recipes. Whether you're an experienced cook or just starting
          out, Foody has something to offer every palate.
        </p>
        <div className="about-section">
          <h2>Discover Delightful Recipes</h2>
          <p>
            Explore a diverse collection of recipes spanning various cuisines
            and meal types. From hearty breakfasts to satisfying dinners, Foody
            has you covered for every occasion.
          </p>
        </div>
        <div className="about-section">
          <h2>Easy-to-Use Interface</h2>
          <p>
            Foody's user-friendly design makes browsing recipes and saving
            favorites a breeze. Enjoy a seamless experience that keeps the focus
            on cooking and creating.
          </p>
        </div>
        <div className="about-section">
          <h2>Smart Search</h2>
          <p>
            Looking for something specific? Our smart search helps you find
            recipes that match your cravings and dietary needs.
          </p>
        </div>
        <div className="about-section">
          <h2>Home Page </h2>
          <p>
            Our landing page is your gateway to a vibrant world of flavors and
            culture. Discover a diverse array of recipes for every meal of the
            day, thoughtfully curated to capture the essence of the region.
          </p>
        </div>
        <div className="about-section">
          <h2>Breakfast: A Flavorful Start to Your Day</h2>
          <p>
            Experience the rich tapestry of Middle Eastern breakfast options.
            From wholesome grains to delectable pastries, our selection offers a
            glimpse into the morning rituals that fuel the day ahead.
          </p>
        </div>
        <div className="about-section">
          <h2>Lunch: A Midday Medley of Tastes</h2>
          <p>
            Dive into the world of Middle Eastern lunches, where hearty dishes
            and fresh ingredients come together to create satisfying and
            wholesome meals. Explore a variety of options that reflect the
            region's culinary heritage.
          </p>
        </div>
        <div className="about-section">
          <h2>Dinner: An Evening of Culinary Excellence</h2>
          <p>
            As the sun sets, Middle Eastern dinners come to life with a symphony
            of flavors. Discover a range of dishes that showcase the region's
            mastery of spices and ingredients, making every evening meal a
            memorable experience.
          </p>
        </div>
        <div className="about-section">
          <h2>Middle Eastern Culinary Delights Await</h2>
          <p>
            Select Your Journey: With just a click, immerse yourself in the
            culinary treasures of the Middle East. Each section invites you to
            explore a carefully curated collection of recipes that celebrate the
            unique charm of every mealtime.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
