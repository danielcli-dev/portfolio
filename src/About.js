import React from "react";
import "./About.css";
import ArticleIcon from "@mui/icons-material/Article";

function About() {
  return (
    <div className="about__container" id="about">
      <div className="about">
        <div class="about__portrait">
          <img
            class="about__portraitIcon"
            src="https://api.dicebear.com/5.x/pixel-art/svg?seed=Scooter"
            alt="A
        photograph of me"
          />
        </div>
        <h1 className="about__title mobile-only">Hey You!</h1>
        My name is Daniel and I am looking to build some great websites and
        apps. I used to be a structural engineer which was pretty cool, but I
        always wanted to work in the tech field. It's really amazing what you
        can do with some coding.
        <br />
        <br />
        To jump start my career in Web Development, I attended the Full-Stack
        Web Development Course by CareerFoundry. Through my studies, I have
        learned to create front-end websites using React and Angular, APIs using
        Express, Databases using MongoDB, and more!
      </div>
      <a
        className="about__resume"
        download
        href="/Daniel Li - Web Developer Resume.pdf"
      >
        <ArticleIcon className="about__resumeIcon" />
        <p className="about__resumeText">Download Resume (44.7 KB)</p>
      </a>
    </div>
  );
}

export default About;
