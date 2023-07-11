import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import LightModeIcon from "@mui/icons-material/LightMode";

function Header() {
  const [active, setActive] = useState("about");

  return (
    <div className="header">
      <h1 className="header__name">
        <a href="/">Daniel Li</a>
      </h1>

      <h2 className="header__title">Web Developer</h2>
      <p className="header__description">Ready to build something.</p>
      {/* <button
        onClick={() => {
          body.classList.replace("light", "dark");
        }}
      >
        Dark
      </button>
      <button
        onClick={() => {
          body.classList.replace("dark", "light");
        }}
      >
        Light
      </button> */}
      <nav className="nav">
        {/* include something fun on front page to captivate visitor. theme? maybe a page on all my practice projects. call it a litterbox? or sandbox?
. RSS Feed? have themes? playground or should i have another section for linking useful tips and tricks and my attempts at them. links also have an email section. return to top button?
is it worth it to animate things sometimes? do i need to make it assessible? like view reader? list of what i want to learn */}

        <Link
          to="/"
          onClick={() => setActive("about")}
          className={`nav__item ${active === "about" ? "active" : null}`}
        >
          1 / About
        </Link>

        <Link
          to="/projects"
          onClick={() => setActive("projects")}
          className={`nav__item ${active === "projects" ? "active" : null}`}
        >
          2 / Projects
        </Link>
      </nav>

      <ul className="footer">
        <li className="footer__item">
          <a href="https://github.com/danielcli-dev" target="_blank">
            <GitHubIcon className="footer__icon" />
          </a>
        </li>
        <li className="footer__item">
          <a href="https://www.linkedin.com/in/danielcli-dev/" target="_blank">
            <LinkedInIcon className="footer__icon" />
          </a>
        </li>
        <li className="footer__item">
          <a href="mailto:danielcli.dev@gmail.com&subject=Lets get in touch">
            <EmailIcon className="footer__icon" />
          </a>
        </li>

        <li className="footer__item">
          <a download href="/Daniel Li - Web Developer Resume.pdf">
            <ArticleIcon className="footer__icon" />
          </a>
        </li>
        <li className="footer__item">
          <a
            onClick={() => {
              let app = document.getElementById("app__container");
              if (app.classList.contains("dark")) {
                app.classList.replace("dark", "light");
              } else {
                app.classList.replace("light", "dark");
              }
            }}
          >
            <LightModeIcon className="footer__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
