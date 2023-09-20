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
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__intro">
        <a href="/">
          <img className="header__icon" src="favicon-32x32.png" />
          <h1 className="header__name">Daniel Li</h1>
        </a>
        {/* <img src="menu-icon.svg" /> */}

        <svg
          className="header__menu"
          onClick={() => {
            setOpen(!open);
          }}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 30 30"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>

        <h2 className="header__title">Web Developer</h2>
        {/* <p className="header__description">"Ready to build something great."</p> */}
      </div>

      <nav className={`nav ${open && "open"}`}>
        <Link
          to="/#about"
          onClick={() => setActive("about")}
          className={`nav__item ${active === "about" ? "active" : null}`}
        >
          <strong>ABOUT</strong>
        </Link>

        <Link
          to="/#projects"
          onClick={() => setActive("projects")}
          className={`nav__item ${active === "projects" ? "active" : null}`}
        >
          <strong>PROJECTS</strong>
        </Link>
        <Link
          to="/#contact"
          onClick={() => setActive("contact")}
          className={`nav__item ${active === "contact" ? "active" : null}`}
        >
          <strong>CONTACT FORM</strong>
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

        {/* <li className="footer__item">
          <a download href="/Daniel Li - Web Developer Resume.pdf">
            <ArticleIcon className="footer__icon" />
          </a>
        </li> */}
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
