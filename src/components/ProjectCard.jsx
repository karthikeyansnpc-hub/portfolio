import "./ProjectCard.css";

function ProjectCard({
  image,
  title,
  description,
  github,
  demo,
}) {
  return (
    <div className="project-card">

      <img src={image} alt={title} />

      <div className="project-content">

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="buttons">

          <a href={github} target="_blank">
            Github
          </a>

          <a href={demo} target="_blank">
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;