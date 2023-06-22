import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__description">
        <div className="about__intro">
          <h2 className="about__name">Daniel Li</h2>I am a
          <span style={{ color: "rgb(181, 255, 236)" }}>
            front-end web developer
          </span>
          looking to create websites.
        </div>
        <div className="about__skills">
          <h3>Skills</h3>
          <hr />
          <ul>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Git / Github</li>
            <li>Google Firebase</li>
          </ul>
        </div>
        <div className='about__resume'>
          Download
          <a download href="/Daniel Li - Web Developer Resume.pdf" className="about__resumeLink">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
