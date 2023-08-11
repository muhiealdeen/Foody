import React from 'react';
import '../App.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search recipes..."
      />
      <ul className="nav-links">
        <li>About the app</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default NavBar;
