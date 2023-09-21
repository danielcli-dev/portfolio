import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

import { projectList } from "./projectList";
function Projects({ active }) {
  return (
    <div
      id="projects"
      className={`projects__container ${active === "projects" ? "active" : ""}`}
    >
      <div className="projects">
        <h1 className="projects__title mobile-only">Projects</h1>

        {projectList.map((project) => {
          return (
            <>
              <ProjectCard project={project} />{" "}
              <hr className="projects__divider" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
