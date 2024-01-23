import { useState } from "react";
import { projectData } from "../data/projects";
import Card from "./Card";

function ProjectList() {
  const [projects] = useState(projectData);

  return (
    <>
      {projects.map((project) => (
        <Card project={project} key={project.name} />
      ))}
    </>
  );
}

export default ProjectList;
