import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LightModeIcon from "@mui/icons-material/LightMode";

function Footer() {
  return (
    <ul className="footer">
      <li className="footer__item">
        <a
          href="https://github.com/danielcli-dev"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="footer__icon" />
        </a>
      </li>
      <li className="footer__item">
        <a
          href="https://www.linkedin.com/in/danielcli-dev/"
          target="_blank"
          rel="noreferrer"
        >
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
          href="#"
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
