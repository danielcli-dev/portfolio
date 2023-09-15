import React, { useState } from "react";
import "./ProjectCard.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <div className="projects__cardContainer">
      <div
        className="projects__card"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="left">
          <h2 className="projects__name">{project.name}</h2>
          <ArrowDropDownIcon
            className={`projects__arrow ${open && "active"}`}
          />
        </div>
        <div className="right">
          <ul className="projects__tech">
            {project.tech.map((tech) => {
              return (
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "object-fit",
                  }}
                >
                  <svg
                    className="projects__techIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 512 512"
                    fill="lightblue"
                  >
                    <path d={tech.path} />
                  </svg>
                  {tech.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {open && (
        <div className="project__cardExtended">
          <div className="project__cardImageContainer">
            {project.image ? (
              <img className="project__cardImage" src={project.image} />
            ) : (
              <div className="project__cardImage--null">{project.name}</div>
            )}

            <div className={`project__cardImageOverlay ${!active && "active"}`}>
              click for more details
            </div>

            <div
              className={`project__cardImageText ${active && "active"}`}
              onClick={() => setActive(!active)}
            >
              Description:
              <br />
              <br />
              {project.description}
            </div>
          </div>

          <div className="project__cardExtendedFooter">
            <a href={project.url} target="_blank" rel="noreferrer">
              <button className="project__cardExtendedFooterButton">
                Website
              </button>
            </a>
            <a href={project.github} target="_blank" rel="noreferrer">
              <button className="project__cardExtendedFooterButton">
                Github
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
