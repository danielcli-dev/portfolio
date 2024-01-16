import React, { useState } from "react";
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import "./CaseStudy.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LightModeIcon from "@mui/icons-material/LightMode";

function CaseStudy() {
  const { projectId } = useParams();

  return (
    <div className="casestudy">
      <div className="casestudy__header">
        <a href="/" className="casestudy__headerButton">
          <ArrowBackIosIcon /> <h3>Return to home page</h3>
        </a>
      </div>

      {projectId === "1" && (
        <div className="casestudy__body">
          <div className="casestudy__title">
            <h1>myFlix Project</h1>
            <h2>Case Study</h2>
          </div>
          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Overview</h3>
                myFlix is an informational web app for movies, directors, genres
                and more. It was developed using MongoDB, Express, React and
                Node. The website allows users to create a profile, edit their
                profile, and save their favorite movies.
              </div>
              <div>
                <h3>Purpose and Context</h3>
                myFlix is a self-made project with the purpose to practice
                designing a full-stack web app from start to finish using the
                MERN tech stack. By building every aspect of the website by
                myself, I am able to understand how all the separate parts
                function together.
              </div>
            </div>
            <div className="casestudy__subsection">
              <img className="casestudy__image" src="/myflix-casestudy1.png" />
            </div>
          </div>

          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Objective</h3>
                The main goal was to develop a full-stack website to improve my
                understanding of how web apps are structured from frontend to
                backend and to familiarize myself with the MERN tech stack. In
                addition, I wanted to have a project to show on my portfolio to
                prove to prospective clients that I can develop a full-stack web
                application.
              </div>
              <div>
                <h3>Development Process Backend - MongoDB, Express, Node</h3>
                The first step was to create an API for storing data about
                movies in a MongoDB database. By using Express, I created
                multiple HTTP endpoints for manipulating or querying data from
                the database through CRUD operations while also using middleware
                for HTTP authentication, JWT authentication, password
                encryption, data validation, etc. Testing was performed using
                Postman.
              </div>
            </div>
            <div className="casestudy__subsection">
              <img className="casestudy__image" src="/myflix-casestudy2.png" />
            </div>
          </div>
          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Frontend - React </h3>
                Once the API was finished, I developed the client-side of the
                web app by using React and Bootstrap to create a single page
                application with the react-router controlling what is displayed.
                Elements are created through imported Bootstrap components and
                styling is controlled by preset classes.
              </div>
              <div>
                <h3>Challenges</h3>
                It took some time getting used to the Bootstrap components and
                styling using classes, but by carefully looking through the
                Bootstrap Docs I could figure it out. In addition, adding the
                middleware to the API was difficult, but by reviewing each
                section of code separately and with some help from my mentor, I
                was able to integrate it successfully.
              </div>
            </div>
            <div className="casestudy__subsection">
              <img className="casestudy__image" src="/myflix-casestudy3.png" />
            </div>
          </div>
          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Duration</h3>
                The development took around a month to complete from start to
                finish and met the expected deadline for the project. Keep in
                mind, this included studying and learning the new material for
                each part of the process.
              </div>
              <div>
                <h3>Credits</h3>
                Role: Lead Developer <br />
                Tutor: Vivek Maskara <br />
                Mentor: Vinicius De Antoni
              </div>
              <div>
                <h3>Tools, Skills, Methodologies</h3>
                Tech Stack: MongoDB, Express, React, Node
                <br />
                Style Method: Bootstrap, Sass <br />
                Other Tech: Redux, React-router, Proptype, B-crypt,
                express-validator, body-parser, morgan, jsonwebtoken, passport
              </div>
            </div>
          </div>
        </div>
      )}

      <ul className="casestudy__footer">
        <li className="casestudy__footer__item">
          <a
            href="https://github.com/danielcli-dev"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="casestudy__footer__icon" />
          </a>
        </li>
        <li className="casestudy__footer__item">
          <a
            href="https://www.linkedin.com/in/danielcli-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="casestudy__footer__icon" />
          </a>
        </li>

        <li className="casestudy__footer__item">
          <a href="mailto:danielcli.dev@gmail.com&subject=Lets get in touch">
            <EmailIcon className="casestudy__footer__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CaseStudy;
