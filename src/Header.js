import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import LightModeIcon from "@mui/icons-material/LightMode";
import Footer from "./Footer";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CloseIcon from "@mui/icons-material/Close";

function Header({ active, setActive, scrollToView }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  window.onresize = () => {
    setOpen(false);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);

  return (
    <div className="header" id="header">
      <div className="header__intro">
        <a href="/">
          <div className="header__icon">dl</div>

          <h1 className="header__name">Daniel Li</h1>
        </a>

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

      <nav className={`nav ${open && "open"}`} id="clickbox" ref={ref}>
        <div className="nav__close mobile-only">
          <CloseIcon
            className="nav__closeIcon"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <Link
          to="#"
          onClick={() => {
            scrollToView("about");
            setActive("about");
            setOpen(!open);
          }}
          className={`nav__item ${active === "about" ? "active" : null}`}
        >
          <strong>ABOUT</strong>
        </Link>

        <Link
          to="#"
          onClick={() => {
            scrollToView("projects");
            setActive("projects");
            setOpen(!open);
          }}
          className={`nav__item ${active === "projects" ? "active" : null}`}
        >
          <strong>PROJECTS</strong>
        </Link>
        <Link
          to="#"
          onClick={() => {
            setActive("contact");
            setOpen(!open);
          }}
          className={`nav__item ${active === "contact" ? "active" : null}`}
        >
          <strong>CONTACT FORM</strong>
        </Link>
        {/* <a
          className="nav__resume"
          download
          href="/Daniel Li - Web Developer Resume.pdf"
        >
          <ArticleIcon className="about__resumeIcon" />
          <p className="about__resumeText">Resume</p>
        </a> */}
        <div className="nav__footer mobile-only">
          <Footer />
        </div>
      </nav>

      <div className="header__footer">
        <Footer />
      </div>
      {/* <ul className="footer">
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
      </ul> */}
    </div>
  );
}

export default Header;
