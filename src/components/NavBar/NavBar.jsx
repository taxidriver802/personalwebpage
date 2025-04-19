import React from 'react';

import './NavBar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-buttons">
        <button
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/jason-cox-067066237/',
              '_blank'
            )
          }
        >
          LinkedIn
        </button>
        <button
          onClick={() =>
            window.open('https://github.com/taxidriver802', '_blank')
          }
        >
          GitHub
        </button>
        <button onClick={() => window.open('/path-to-resume.pdf', '_blank')}>
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
