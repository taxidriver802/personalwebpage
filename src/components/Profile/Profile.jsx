import React, { useState } from 'react';
import './Profile.css';
import Projects from '../Projects/Projects.jsx';
import FavProjects from '../FavProjects/FavProjects.jsx';

function Profile({ userData }) {
  const [projectView, setProjectView] = useState('favorites');

  const handleProjectView = () => {
    setProjectView((prevView) => (prevView === 'all' ? 'favorites' : 'all'));
  };

  return (
    <>
      <div className="profile">
        <h2 className="profile__title">Profile</h2>
        <div className="profile__info">
          <p className="profile__info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <button
          className="profile__projects-button"
          type="button"
          onClick={handleProjectView}
        >
          {projectView === 'all'
            ? 'View Favorite Projects'
            : 'View All Projects'}
        </button>
      </div>
      <div className="profile__projects-fav">
        {projectView === 'all' ? (
          <Projects userData={userData} />
        ) : (
          <FavProjects userData={userData} />
        )}
      </div>
    </>
  );
}

export default Profile;
