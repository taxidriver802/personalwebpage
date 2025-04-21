import './ProjectItem.css';

function ProjectItem({
  title,
  description,
  githubUrl,
  deployedUrl,
  creationDate,
}) {
  return (
    <div className="project__item">
      <h3 className="project__item-title">{title}</h3>
      <p className="project__item-description">{description}</p>
      <button
        className="project__item-button"
        onClick={() => window.open(githubUrl, '_blank')}
      >
        View Project on GitHub
      </button>
      <button
        className="project__item-button"
        onClick={() => window.open(deployedUrl, '_blank')}
      >
        View Deployed Project
      </button>
      <p className="project__item-date">{creationDate}</p>
    </div>
  );
}

export default ProjectItem;
