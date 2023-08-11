import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div>Logo</div>
      <input type="text" placeholder="Search recipes..." />
      <ul>
        <li>About the app </li>
        <li>Contct us</li>
      </ul>
    </nav>
  );
};

export default NavBar;
