import React from 'react';
import './NavBar.css';

const Navbar = ({ userData }) => {
  return (
    <div className="navbar">
      <img
        src="/assets/tech_creature_logo.svg"
        alt="Logo"
        className="nav__logo"
      />
      <div className="navbar__profile">
        <p className="navbar__profile-name">{userData?.name || ''}!</p>
      </div>
    </div>
  );
};

export default Navbar;
