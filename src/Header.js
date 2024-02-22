import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Footer from "./Footer";
import CloseIcon from "@mui/icons-material/Close";
import ArticleIcon from "@mui/icons-material/Article";

function Header({ active, setActive, scrollToView }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  window.onresize = () => {
    setOpen(false);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
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

        <h3 className="header__title">Web Developer</h3>
        <p className="header__description desktop-only">
          "Ready to build something great."
        </p>
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
        <div
          onClick={() => {
            scrollToView("about");
            setActive("about");
            setOpen(!open);
          }}
          className={`nav__item ${active === "about" ? "active" : null}`}
        >
          <strong>ABOUT</strong>
        </div>

        <div
          onClick={() => {
            scrollToView("projects");
            setActive("projects");
            setOpen(!open);
          }}
          className={`nav__item ${active === "projects" ? "active" : null}`}
        >
          <strong>PROJECTS</strong>
        </div>
        {/* <div
          href="/"
          onClick={() => {
            scrollToView("contact");
            setActive("contact");
            setOpen(!open);
          }}
          className={`nav__item ${active === "contact" ? "active" : null}`}
        >
          <strong>CONTACT FORM</strong>
        </div> */}

        <a
          className="about__resume"
          download
          href="/Daniel Li - Web Developer Resume.pdf"
        >
          <ArticleIcon className="about__resumeIcon" />
          <p className="about__resumeText">Download Resume (44.7 KB)</p>
        </a>

        <div className="nav__footer mobile-only">
          <Footer />
        </div>
      </nav>

      <div className="header__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Header;
