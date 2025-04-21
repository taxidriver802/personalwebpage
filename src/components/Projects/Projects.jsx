import React, { useState } from 'react';
import './Projects.css';
import defaultProjects from '../../data/ProjectData.js';
import ProjectItem from '../ProjectItem/ProjectItem.jsx';

const Projects = () => {
  const projectsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOption, setSortOption] = useState('newest');

  const allProjects = Object.values(defaultProjects);

  // Sort projects based on the selected sort option
  const sortedProjects = [...allProjects].sort((a, b) => {
    if (sortOption === 'newest') {
      return new Date(b.creationDate) - new Date(a.creationDate); // Newest first
    }
    if (sortOption === 'oldest') {
      return new Date(a.creationDate) - new Date(b.creationDate); // Oldest first
    }
    if (sortOption === 'a-z') {
      return a.title.localeCompare(b.title); // Alphabetical order (A-Z)
    }
    if (sortOption === 'z-a') {
      return b.title.localeCompare(a.title); // Reverse alphabetical order (Z-A)
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  const currentProjects = sortedProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(0);
  };

  return (
    <section className="projects">
      <div className="projects__header">
        <h2 className="projects__header-title">All Projects</h2>
      </div>
      <div className="projects-grid">
        {currentProjects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            deployedUrl={project.deployedUrl}
            creationDate={project.creationDate}
          />
        ))}
      </div>
      <div className="projects__pagination">
        <button className="projects__button-prev" onClick={handlePrevPage}>
          Previous
        </button>
        <button className="projects__button-next" onClick={handleNextPage}>
          Next
        </button>
        <select
          className="projects__dropdown"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
          <option value="a-z">Sort by Title (A-Z)</option>
          <option value="z-a">Sort by Title (Z-A)</option>
        </select>
      </div>
    </section>
  );
};

export default Projects;
