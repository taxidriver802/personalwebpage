import React, { useEffect, useState, useCallback } from 'react';
import Navbar from '../NavBar/NavBar.jsx';
import Home from '../Home/Home.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import './App.css';

import fetchRepos from '../../data/RepoApi.js';

function App() {
  const [repoList, setRepoList] = useState([]);
  const [username, setUsername] = useState('taxidriver802');

  const fetchReposList = useCallback(() => {
    fetchRepos(username).then((repos) => {
      const updatedRepoList = repos.map((repo) => ({
        title: repo.name,
        description: repo.description || 'No description available',
        githubUrl: repo.clone_url,
        deployedUrl: repo.homepage || 'No deployed URL available',
        creationDate: repo.created_at,
        id: repo.id,
        isFavorite: false,
      }));
      setRepoList(updatedRepoList);
    });
  }, [username]);

  useEffect(() => {
    fetchReposList();
  }, [fetchReposList]);

  useEffect(() => {
    console.log(repoList, 'repoList from App.jsx');
  }, [repoList]);

  return (
    <>
      <Navbar />
      <div className="App">
        <section id="home">
          <Home repoList={repoList} />
        </section>
        <section id="projects">
          <div className="github_search">
            <input
              type="text"
              placeholder="Enter GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={fetchReposList}>Search</button>
          </div>
          <Projects repoList={repoList} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
