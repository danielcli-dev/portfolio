import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__description">
        <a
          href="https://shopaholic-58a55.web.app"
          target="_blank"
          rel="noreferrer"
        >
          Shopaholic
        </a>
        <span className="projects__overview">
          Authentication · Cloud Functions · Stripe API
        </span>

        <a
          href="https://spoileralert-ea921.web.app"
          target="_blank"
          rel="noreferrer"
        >
          Spoiler Alert
        </a>
        <span className="projects__overview">
          TMDB & Wikipedia API · Cloud Functions · Regex
        </span>

        <a
          href="https://twitter-clone-6b4c7.web.app"
          target="_blank"
          rel="noreferrer"
        >
          Twitter Clone
        </a>
        <span className="projects__overview">
          React Hooks · User-specific Functionality · Editable Posts
        </span>
        <a
          href="https://whatsapp-1da63.web.app"
          target="_blank"
          rel="noreferrer"
        >
          What's App Clone
        </a>
        <span className="projects__overview">
          Data Layer · Material-UI · Firestore
        </span>

        <a href="https://clone-b45fd.web.app" target="_blank" rel="noreferrer">
          YouTube Clone
        </a>
        <span className="projects__overview">
          Navigation Bar · Search Function · React-Router
        </span>
      </div>
    </div>
  );
}

export default Projects;
