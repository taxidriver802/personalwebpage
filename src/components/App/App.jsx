import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/NavBar.jsx';
import Home from '../Home/Home.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import './App.css';

import fetchRepos from '../../data/RepoApi.js';

function App() {
  const [repoList, setRepoList] = useState({
    title: '',
    description: '',
    githubUrl: '',
    deployedUrl: '',
    creationDate: '',
    id: '',
  });

  function fetchReposList() {
    fetchRepos().then((repos) => {
      const updatedRepoList = repos.map((repo) => {
        /* console.log(repo); */
        return {
          title: repo.name,
          description: repo.description || 'No description available',
          githubUrl: repo.clone_url,
          deployedUrl: repo.homepage || 'No deployed URL available',
          creationDate: repo.created_at,
          id: repo.id,
          isFavorite: false,
        };
      });
      setRepoList(updatedRepoList);
    });
  }

  useEffect(() => {
    fetchReposList();
  }, []);

  useEffect(() => {
    console.log(repoList, 'repoList from App.jsx');
  }, [repoList]);

  return (
    <>
      <Navbar />
      <div className="App">
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
