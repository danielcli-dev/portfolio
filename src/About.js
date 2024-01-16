import React from "react";
import "./About.css";
import ArticleIcon from "@mui/icons-material/Article";

function About({ active }) {
  return (
    <div
      id="about"
      className={`about__container ${active === "about" ? "active" : ""}`}
    >
      <div className="about">
        <div className="about__portrait">
          <img
            className="about__portraitIcon"
            // src="https://api.dicebear.com/5.x/pixel-art/svg?seed=Scooter"
            src="portrait.jpg"
            alt="A
        photograph of me"
          />
        </div>
        <h1 className="about__title mobile-only">Hello!</h1>
        My name is Daniel and I am looking to build some great websites and
        apps. I have a background in structural engineering which have developed
        my skills in problem solving, critical thinking, time management,
        communication, and many more. Working in engineering was very rewarding,
        but I had always wanted to work in the tech field. It's really amazing
        what you can create with coding.
        <br />
        <br />
        To jump start my career in Web Development, I attended the Full-Stack
        Web Development Course by CareerFoundry. Through my studies, I have
        learned how to develop the websites using React and Angular, APIs using
        Express, Databases using MongoDB, and more!
      </div>
      <a
        className="about__resume only-mobile"
        download
        href="/Daniel Li - Web Developer Resume.pdf"
      >
        <ArticleIcon className="about__resumeIcon" />
        <span className="about__resumeText">Download Resume (44.7 KB)</span>
      </a>
    </div>
  );
}

export default About;
