import React from 'react';

import FavProjects from '../FavProjects/FavProjects.jsx';

const Home = () => {
  return (
    <section className="home">
      <h1>Welcome to My Webpage</h1>
      <p>This is the home section. Intro and hero content goes here.</p>
      <div className="favprojects">
        <FavProjects />
      </div>
    </section>
  );
};

export default Home;
