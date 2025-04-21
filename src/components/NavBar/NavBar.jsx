import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css';

import ProfileModal from '../ProfileModalForm/ProfileModalForm';

const Navbar = ({ userData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenModal = () => {
    setIsModalOpen('open');
  };

  const handleCloseModal = () => {
    setIsModalOpen('close');
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  return (
    <>
      <div className="navbar">
        <img
          src="/assets/tech_creature_logo.svg"
          alt="Logo"
          className="nav__logo"
        />
        <div className="navbar__profile">
          <p className="navbar__profile-name" onClick={handleOpenModal}>
            {userData?.name || ''}!
          </p>
        </div>
      </div>
      {isModalOpen === 'open' && location.pathname === '/profile' && (
        <ProfileModal
          handleCloseModal={handleCloseModal}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default Navbar;
