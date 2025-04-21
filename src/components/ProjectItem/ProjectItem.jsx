import './ProjectItem.css';

function ProjectItem({
  title,
  description,
  githubUrl,
  deployedUrl,
  creationDate,
}) {
  return (
    <div className="project-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => window.open(githubUrl, '_blank')}>
        View Project on GitHub
      </button>
      <button onClick={() => window.open(deployedUrl, '_blank')}>
        View Deployed Project
      </button>
      <p>{creationDate}</p>
    </div>
  );
}

export default ProjectItem;
