import React, { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import Navbar from '../NavBar/NavBar.jsx';

import Projects from '../Projects/Projects.jsx';

import Profile from '../Profile/Profile.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      console.log('User data found in localStorage:', storedUser);
      setUserData(JSON.parse(storedUser));
    } else if (location.pathname !== '/signup') {
      navigate('/signup');
    }
    setIsLoading(false);
  }, [navigate, location.pathname]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {location.pathname !== '/signup' && <Navbar userData={userData} />}
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={userData ? '/profile' : '/signup'} />}
          />
          <Route
            path="/signup"
            element={<SignUp setUserData={setUserData} />}
          />
          <Route
            path="/profile"
            element={
              userData ? (
                <Profile userData={userData} />
              ) : (
                <Navigate to="/signup" replace />
              )
            }
          />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
