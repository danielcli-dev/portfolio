import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import LightModeIcon from "@mui/icons-material/LightMode";

function Footer() {
  return (
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
  );
}
export default Footer;
