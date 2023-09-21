import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
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
        <a
          href="https://twitter.com/danielcli_dev"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon className="footer__icon" />
        </a>
      </li>
      <li className="footer__item">
        <a
          href="https://medium.com/@danielcli.dev"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="footer__icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 30 30"
          >
            <path
              fill='currentColor'
              d="M8.5 7A8.5 8.5 0 108.5 24 8.5 8.5 0 108.5 7zM22 8A4 7.5 0 1022 23 4 7.5 0 1022 8zM28.5 9A1.5 6.5 0 1028.5 22 1.5 6.5 0 1028.5 9z"
            ></path>
          </svg>
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
