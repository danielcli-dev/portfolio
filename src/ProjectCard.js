import React, { useState } from "react";
import "./ProjectCard.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
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
          {project.url && (
            <a
              className="right__link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              title="Website Link"
            >
              <LanguageIcon className="right__icon" />
            </a>
          )}

          {project.github && (
            <a
              className="right__link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              title="Github Link"
            >
              <GitHubIcon className="right__icon" />
            </a>
          )}

          {project.casestudy && (
            <a
              className="right__link"
              href={project.casestudy}
              target="_blank"
              rel="noreferrer"
              title="Case Study"
            >
              <ArticleIcon className="right__icon" />
            </a>
          )}
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
              {project.description}
              <hr className="project__cardImageTextDivider" />
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
                      {tech.icon && (
                        <img
                          className="projects__techIcon"
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                        />
                      )}

                      {tech.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
