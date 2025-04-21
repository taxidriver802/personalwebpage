import './FavProjects.css';

import defaultProjects from '../../data/ProjectData.js';

import ProjectItem from '../ProjectItem/ProjectItem';

function FavProjects() {
  return (
    <div className="fav__projects">
      <h2 className="fav__projects-title">My Favorite Projects</h2>
      
      <div className="fav__projects-list">
        {Object.values(defaultProjects)
          .filter((project) => project.isFavorite)
          .map((project) => (
            <div className="fav__projects-item" key={project.id}>
              <ProjectItem
                id={project.id}
                title={project.title}
                description={project.description}
                githubUrl={project.githubUrl}
                deployedUrl={project.deployedUrl}
                creationDate={project.creationDate}
                isFavorite={project.isFavorite}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default FavProjects;
