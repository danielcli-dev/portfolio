import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import ReactIcon from "./react-icon.svg";
import JavascriptIcon from "./javascript-icon.svg";
import CSSIcon from "./css-icon.svg";
import FirebaseIcon from "./firebase-icon.svg";
import HTMLIcon from "./html-icon.svg";
import JqueryIcon from "./jquery-icon.svg";
import MongodbIcon from "./mongodb-icon.svg";
import NodejsIcon from "./nodejs-icon.svg";
import BootstrapIcon from "./bootstrap-icon.svg";
import AngularIcon from "./angular-icon.svg";
import SassIcon from "./sass-icon.svg";
import TypescriptIcon from "./typescript-icon.svg";
import ExpoIcon from "./expo-icon.svg";

function Projects({ active }) {
  let projectList = [
    {
      url: "https://danielcli-dev.github.io/meet/",
      github: "https://github.com/danielcli-dev/meet",
      image:
        "https://github.com/danielcli-dev/website-portfolio/blob/master/img/meet_screenshot.png?raw=true",
      name: "Meet",
      description: `The app is used to display a list of upcoming events by
      CareerFoundry. Within this project, I was responsible for the
      frontend. It's written in React.js. Additionally, I've created the
      HTML and CSS templates. Also, I used Google Calendar API and used
      LAMBDA Cloud functions to use Google Authentication and retrieve
      calendar events. In addition, D3 library was used for data
      visualization.`,
      tech: [
        {
          name: "React",
          icon: ReactIcon,
        },
        {
          name: "CSS",
          icon: CSSIcon,
        },
      ],
    },
    {
      url: "https://shopaholic-58a55.web.app/",
      github: "https://github.com/danielcli-dev/shopaholic",
      image:
        "https://github.com/danielcli-dev/website-portfolio/blob/master/img/shopaholic_screenshot.png?raw=true",
      name: "Shopaholic",
      description: `Within this project, I was responsible for the frontend and backend.
      It’s written in React.js. Additionally, I've created the HTML and
      CSS templates. Also, I used Google Firestore to save data and used
      cloud functions to make payment requests to the Stripe API.`,
      tech: [
        {
          name: "React",
          icon: ReactIcon,
        },
        {
          name: "CSS",
          icon: CSSIcon,
        },
        {
          name: "JavaScript",
          icon: JavascriptIcon,
        },
        {
          name: "Firebase",
          icon: FirebaseIcon,
        },
      ],
    },
    {
      url: "https://spoileralert-ea921.web.app/",
      github: "https://github.com/danielcli-dev/spoileralert",
      image:
        "https://github.com/danielcli-dev/website-portfolio/blob/master/img/spoileralert_screenshot.png?raw=true",
      name: "Spoiler Alert",
      description: `Within this project, I was responsible for the frontend and backend.
      It’s written in React.js. Additionally, I've created the HTML and
      CSS templates. Also, I used Axios to make API requests to the TMDB
      and Wikipedia APIs to retrieve movie information.`,
      tech: [
        {
          name: "React",
          icon: ReactIcon,
        },
        {
          name: "CSS",
          icon: CSSIcon,
        },
        {
          name: "JavaScript",
          icon: JavascriptIcon,
        },
        {
          name: "Firebase",
          icon: FirebaseIcon,
        },
      ],
    },
    {
      url: "https://twitter-clone-6b4c7.web.app/",
      github: "https://github.com/danielcli-dev/twitter-clone",
      image:
        "https://github.com/danielcli-dev/website-portfolio/blob/master/img/twitter_screenshot.png?raw=true",
      name: "Twitter Clone",
      description: `Within this project, I was responsible for the frontend and backend.
      It’s written in React.js. Additionally, I've created the HTML and
      CSS templates. Also, I have used Google Authentication to create a
      user sign-in and the Firestore Database for storing messages.`,
      tech: [
        {
          name: "React",
          icon: ReactIcon,
        },
        {
          name: "CSS",
          icon: CSSIcon,
        },
        {
          name: "JavaScript",
          icon: JavascriptIcon,
        },
        {
          name: "Firebase",
          icon: FirebaseIcon,
        },
      ],
    },
    {
      url: "https://whatsapp-1da63.web.app/",
      github: "https://github.com/danielcli-dev/whatsapp-clone",
      image:
        "https://github.com/danielcli-dev/website-portfolio/blob/master/img/whatsapp_screenshot.png?raw=true",
      name: "What's App Clone",
      description: `Within this project, I was responsible for the frontend and backend.
      It’s written in React.js. Additionally, I've created the HTML and
      CSS templates. Also, I have used Material-UI icons to design the
      website, as well as, used Firestore Database to save chat rooms and
      messages.`,
      tech: [
        {
          name: "React",
          icon: ReactIcon,
        },
        {
          name: "CSS",
          icon: CSSIcon,
        },
        {
          name: "JavaScript",
          icon: JavascriptIcon,
        },
        {
          name: "Firebase",
          icon: FirebaseIcon,
        },
      ],
    },
    {
      url: "https://clone-b45fd.web.app/",
      github: "https://github.com/danielcli-dev/youtube-clone",
      image:
        "https://github.com/danielcli-dev/website-portfolio/blob/master/img/youtube_screenshot.png?raw=true",
      name: "Youtube Clone",
      description: `Within this project, I was responsible for the frontend and backend.
      It’s written in React.js. Additionally, I've created the HTML and
      CSS templates.`,
      tech: [
        {
          name: "React",
          icon: ReactIcon,
        },
        {
          name: "CSS",
          icon: CSSIcon,
        },
        {
          name: "JavaScript",
          icon: JavascriptIcon,
        },
        {
          name: "Firebase",
          icon: FirebaseIcon,
        },
      ],
    },
    {
      url: "https://danielcli-dev.github.io/pokedex-project/",
      github: "https://github.com/danielcli-dev/pokedex-project",
      image:
        "https://github.com/danielcli-dev/website-portfolio/blob/master/img/pokedex-project_screenshot.png?raw=true",
      name: "Pokedex",
      description: `Within this project, I was responsible for the frontend.
      It’s written in React.js. Additionally, I've created the HTML and
      CSS templates.`,
      tech: [
        {
          name: "HTML",
          icon: HTMLIcon,
        },
        {
          name: "CSS",
          icon: CSSIcon,
        },
        {
          name: "jQuery",
          icon: JqueryIcon,
        },
      ],
    },
    {
      url: "https://cfdb-movie-api-59ec69f25db6.herokuapp.com/",
      github: "https://github.com/danielcli-dev/movie_api",
      name: "Movie API",
      description: `API used to transfer data about movies, directors, genres, etc.`,
      tech: [
        {
          name: "JavaScript",
          icon: JavascriptIcon,
        },
        {
          name: "NodeJS",
          icon: NodejsIcon,
        },
        {
          name: "MongoDB",
          icon: MongodbIcon,
        },
      ],
    },
    {
      url: "https://myflix-movieapp.netlify.app/",
      github: "https://github.com/danielcli-dev/myFlix-client",
      name: "myFlix",
      description: `myFlix is a web app containing information pertaining to movies. It allows users to sign in and save their favorite movies.`,
      image:
        "https://github.com/danielcli-dev/website-portfolio/blob/master/img/myflix_screenshot.png?raw=true",
      tech: [
        {
          name: "React",
          icon: ReactIcon,
        },
        {
          name: "Bootstrap",
          icon: BootstrapIcon,
        },
      ],
    },
    {
      url: "https://danielcli-dev.github.io/myFlix-Angular-client",
      github: "https://github.com/danielcli-dev/myFlix-Angular-client",
      name: "myFlix-Angular",
      description: `myFlix is a web app containing information pertaining to movies. It allows users to sign in and save their favorite movies.`,
      image:
        "https://github.com/danielcli-dev/website-portfolio/blob/master/img/myFlix-Angular_screenshot.png?raw=true",
      tech: [
        {
          name: "Angular",
          icon: AngularIcon,
        },
        {
          name: "Sass",
          icon: SassIcon,
        },
        {
          name: "Typescript",
          icon: TypescriptIcon,
        },
      ],
    },
    {
      github: "https://github.com/danielcli-dev/myFlix-Angular-client",
      name: "Chat",
      description: `Chat is a React Native App that allows users to sign in and chat with each other. It also supports geolocation, photos, and audio messages.`,
      image:
        "https://github.com/danielcli-dev/website-portfolio/blob/master/img/chat_screenshot.png?raw=true",
      tech: [
        {
          name: "React Native",
          icon: ReactIcon,
        },
        {
          name: "Firebase",
          icon: FirebaseIcon,
        },
        {
          name: "Expo",
          icon: ExpoIcon,
        },
      ],
    },
  ];

  return (
    <div
      className={`projects__container ${active === "projects" && "active"}`}
      id="projects"
    >
      <div className="projects">
        <h1 className="projects__title mobile-only">Projects</h1>

        {projectList.map((project) => {
          return (
            <>
              <ProjectCard project={project} />{" "}
              <hr className="project__divider" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
