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
        <div className="projects__box">
          {projectList.map((project) => {
            return (
              <>
                <div className="project__app">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    title="Website Link"
                  >
                    <div className="project-icon" onClick={() => {}}>
                      <img src={project.image} />

                      {/* <ProjectCard project={project} />{" "} */}
                      {/* <hr className="projects__divider" /> */}
                    </div>
                  </a>
                  {/* <p>{project.name}</p> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
