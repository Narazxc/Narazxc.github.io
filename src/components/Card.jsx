function Card({ project }) {
  return (
    <a href={project.link} target="_blank" rel="noreferrer">
      <div className="h-52 rounded-md bg-purple-300 hover:bg-green-300">
        {project.name}
      </div>
    </a>
  );
}

export default Card;
