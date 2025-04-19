import './FavProjects.css';

import defaultProjects from '../../data/ProjectData.js';

import ProjectItem from '../ProjectItem/ProjectItem';

function FavProjects() {
  return (
    <div className="fav_project">
      <h2>My Favorite Projects</h2>
      <div className="fav-project_list">
        {Object.values(defaultProjects)
          .filter((project) => project.isFavorite) // Filter projects with favorite: true
          .map((project) => (
            <div className="fav-project_item" key={project.id}>
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
