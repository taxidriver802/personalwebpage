import React from 'react';

import './Projects.css';

import defaultProjects from '../../data/ProjectData.js';

import ProjectItem from '../ProjectItem/ProjectItem.jsx';

const Projects = ({ repoList }) => {
  return (
    <section className="projects">
      <h2>All Projects</h2>
      {Object.values(repoList || defaultProjects).map((project) => (
        <ProjectItem
          key={project.id}
          title={project.title}
          description={project.description}
          githubUrl={project.githubUrl}
          deployedUrl={project.deployedUrl}
          creationDate={project.creationDate}
        />
      ))}
    </section>
  );
};

export default Projects;
