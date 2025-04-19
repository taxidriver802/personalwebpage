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
      <p>{githubUrl}</p>
      <p>{creationDate}</p>
      <button onClick={() => window.open(deployedUrl, '_blank')}>
        View Project
      </button>
    </div>
  );
}

export default ProjectItem;
