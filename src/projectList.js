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

export const projectList = [
  // {
  //   url: "https://danielcli-dev.github.io/meet/",
  //   github: "https://github.com/danielcli-dev/meet",
  //   image:
  //     "https://github.com/danielcli-dev/portfolio/blob/main/public/meet_screenshot.png?raw=true",
  //   name: "Meet",
  //   description: `The app is used to display a list of upcoming events by
  //     CareerFoundry. Within this project, I was responsible for the
  //     frontend. It's written in React.js. Additionally, I've created the
  //     HTML and CSS templates. Also, I used Google Calendar API and used
  //     LAMBDA Cloud functions to use Google Authentication and retrieve
  //     calendar events. In addition, D3 library was used for data
  //     visualization.`,
  //   tech: [
  //     {
  //       name: "React",
  //       icon: ReactIcon,
  //     },
  //     {
  //       name: "CSS",
  //       icon: CSSIcon,
  //     },
  //   ],
  // },
  {
    url: "https://shopaholic-58a55.web.app/",
    github: "https://github.com/danielcli-dev/shopaholic",
    casestudy: "https://danielcli.com/case-study/shopaholic",
    image:
      "https://github.com/danielcli-dev/portfolio/blob/main/public/shopaholic-icon.png?raw=true",
    name: "Shopaholic",
    description: `Simple e-commerce website for selling clothing and accessories. Allows for users to login with shopping basket that retains added items and a orders list for previous purchases. It also has search, filter and sort functionality. Using stripe, fake orders can be placed at checkout screen. Within this project, I was responsible for the frontend and backend.
      It’s written in React.js.  Also, I used Google Firestore to save data and used
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
    casestudy: "https://danielcli.com/case-study/spoileralert",
    image:
      "https://github.com/danielcli-dev/portfolio/blob/main/public/spoileralert-icon.png?raw=true",
    name: "Spoiler Alert",
    description: `Web app is used to search for your favorite movies and find the plot of the movie.
      It’s written in React.js and styled using CSS. Also, I used Axios to make API requests to the TMDB
      and Wikipedia APIs to retrieve movie information. Regex is used to filter unwanted residual code from text`,
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
  // {
  //   url: "https://twitter-clone-6b4c7.web.app/",
  //   github: "https://github.com/danielcli-dev/twitter-clone",
  //   image:
  //     "https://github.com/danielcli-dev/portfolio/blob/main/public/twitter_screenshot.png?raw=true",
  //   name: "Twitter Clone",
  //   description: `Twitter clone with user login and allow for posting messages to shared wall. Only the creator of the message can edit or delete message. Google Authentication is used to create a
  //     user sign-in and the Firestore Database for storing messages.`,
  //   tech: [
  //     {
  //       name: "React",
  //       icon: ReactIcon,
  //     },
  //     {
  //       name: "CSS",
  //       icon: CSSIcon,
  //     },
  //     {
  //       name: "JavaScript",
  //       icon: JavascriptIcon,
  //     },
  //     {
  //       name: "Firebase",
  //       icon: FirebaseIcon,
  //     },
  //   ],
  // },
  {
    url: "https://talktome-fa383.web.app/",
    github: "https://github.com/danielcli-dev/talktome",
    image:
      "https://github.com/danielcli-dev/portfolio/blob/main/public/talktome-icon.png?raw=true",
    name: "Talk to Me",
    description: `Chatroom App includes functionality to create unique chatrooms that allow messages from different users. Messages display user's own messages on the right in green and other users' messages on the left in white. The app uses Google Auth to allow users to sign in using their Google profile. Also, I have used Material-UI icons to design the
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

  // {
  //   url: "https://danielcli-dev.github.io/pokedex-project/",
  //   github: "https://github.com/danielcli-dev/pokedex-project",
  //   image:
  //     "https://github.com/danielcli-dev/portfolio/blob/main/public/pokedex-project_screenshot.png?raw=true",
  //   name: "Pokedex",
  //   description: `Website contains list of Pokemon which can be filtered alphabetically and by their Index #. When selecting a Pokemon, a modal appears containing an image and additional information pertaining to that specific Pokemon. All data is retrieved from the Pokdex API. Within this project, I was responsible for the frontend.
  //     It’s written using HTML, CSS and jQuery.`,
  //   tech: [
  //     {
  //       name: "HTML",
  //       icon: HTMLIcon,
  //     },
  //     {
  //       name: "CSS",
  //       icon: CSSIcon,
  //     },
  //     {
  //       name: "jQuery",
  //       icon: JqueryIcon,
  //     },
  //   ],
  // },
  // {
  //   github: "https://github.com/danielcli-dev/movie_api",
  //   name: "Movie API",
  //   description: `API used to transfer data about movies, directors, genres, etc. Written and tested using JavaScript and NodeJS. All data are stored in a MongoDB database.`,
  //   tech: [
  //     {
  //       name: "JavaScript",
  //       icon: JavascriptIcon,
  //     },
  //     {
  //       name: "NodeJS",
  //       icon: NodejsIcon,
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: MongodbIcon,
  //     },
  //   ],
  // },
  // {
  //   url: "https://myflix-movieapp.netlify.app/",
  //   github: "https://github.com/danielcli-dev/myFlix-client",
  //   casestudy: "https://danielcli.com/case-study/myflix",
  //   name: "myFlix",
  //   description: `myFlix is a web app containing information pertaining to movies. It allows users to sign in and save their favorite movies.`,
  //   image:
  //     "https://github.com/danielcli-dev/portfolio/blob/main/public/myflix_screenshot.png?raw=true",
  //   tech: [
  //     {
  //       name: "React",
  //       icon: ReactIcon,
  //     },
  //     {
  //       name: "Bootstrap",
  //       icon: BootstrapIcon,
  //     },
  //   ],
  // },
  // {
  //   url: "https://danielcli-dev.github.io/myFlix-Angular-client",
  //   github: "https://github.com/danielcli-dev/myFlix-Angular-client",
  //   name: "myFlix-Angular",
  //   description: `myFlix is a web app containing information pertaining to movies. It allows users to sign in and save their favorite movies.`,
  //   image:
  //     "https://github.com/danielcli-dev/portfolio/blob/main/public/myFlix-Angular_screenshot.png?raw=true",
  //   tech: [
  //     {
  //       name: "Angular",
  //       icon: AngularIcon,
  //     },
  //     {
  //       name: "Sass",
  //       icon: SassIcon,
  //     },
  //     {
  //       name: "TypeScript",
  //       icon: TypescriptIcon,
  //     },
  //   ],
  // },
  // {
  //   github: "https://github.com/danielcli-dev/chat",
  //   name: "Chat",
  //   casestudy: "https://danielcli.com/case-study/chat",
  //   description: `Chat is a React Native App that allows users to sign in and chat with each other. It also supports geolocation, photos, and audio messages.`,
  //   image:
  //     "https://github.com/danielcli-dev/portfolio/blob/main/public/chat_screenshot.png?raw=true",
  //   tech: [
  //     {
  //       name: "React Native",
  //       icon: ReactIcon,
  //     },
  //     {
  //       name: "Firebase",
  //       icon: FirebaseIcon,
  //     },
  //     {
  //       name: "Expo",
  //       icon: ExpoIcon,
  //     },
  //   ],
  // },
];
