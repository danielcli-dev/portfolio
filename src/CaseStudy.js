import React, { useParams } from "react";
import "./CaseStudy.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function CaseStudy() {
  const { projectName } = useParams();

  return (
    <div className="casestudy">
      <div className="casestudy__header">
        <a href="/" className="casestudy__headerButton">
          <ArrowBackIosIcon /> <h3>Return to home page</h3>
        </a>
      </div>

      {projectName === "myflix" && (
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
              <img
                className="casestudy__image"
                src="/myflix-casestudy1.png"
                alt="My Flix Image 1"
              />
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
                <h3>Development Process</h3>
                <h3>Backend - MongoDB, Express, Node</h3>
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
              <img
                className="casestudy__image"
                src="/myflix-casestudy2.png"
                alt="My Flix Image 2"
              />
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
              <img
                className="casestudy__image"
                src="/myflix-casestudy3.png"
                alt="My Flix Image 3"
              />
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
      {projectName === "chat" && (
        <div className="casestudy__body">
          <div className="casestudy__title">
            <h1>Chat Project</h1>
            <h2>Case Study</h2>
          </div>
          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Overview</h3>
                Chat is a mobile messaging app that allows users to send text
                messages, audio messages, and images to other users. It was
                developed using Firebase and React Native. The mobile app was
                tested using Expo and Android Studio.
              </div>
              <div>
                <h3>Purpose and Context</h3>
                Chat is a self-made project with the purpose to create a mobile
                app from start to finish. It was important to learn how to take
                existing applications and expand access to mobile users. By
                using React Native, I could translate existing code into mobile
                friendly format to take advantage of a mobile device’s built-in
                features.
              </div>
              <div>
                <h3>Objective</h3>
                The main goal was to develop a mobile app to familiarize with
                React Native, as well as, developing a messaging app which is a
                staple in many applications today. In addition, I wanted to have
                a project on my portfolio to show to prospective clients that I
                am comfortable with developing code across many platforms
                including web and mobile devices.
              </div>
            </div>
            <div className="casestudy__subsection-tall">
              <img
                className="casestudy__image-tall"
                src="/chat-casestudy1.png"
                alt="Chat Image 1"
              />
            </div>
          </div>

          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Development Process</h3>
                <h3>Backend - Google Firebase</h3>
                The backend was created by using Google Firebase to store the
                messages and Google storage to upload the image files and audio
                files. By using resources like cloud storage, development time
                was reduced significantly.
              </div>
            </div>
            <div className="casestudy__subsection">
              <img
                className="casestudy__image"
                src="/chat-casestudy2.png"
                alt="Chat Image 2"
              />
            </div>
          </div>
          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Frontend - React Native</h3>I developed the mobile app by
                using React Native. The messages were stored on Google Firebase
                and saved locally when possible. Through the Gifted Chat
                library, the messages were displayed using text bubbles within a
                shared chat box. Custom actions were created to be able to share
                audio messages, images, and locations with other users. Styling
                was done through the use of StyleSheets within React Native.
                Testing was performed through Android Studio emulating mobiles
                devices and Expo for hosting the application over Wi-Fi.
              </div>
              <div>
                <h3>Challenges</h3>
                The main challenge was learning the syntax for React Native and
                which built-in component could be used such as Views,
                TouchableOpacity, etc. In addition, integrating the Gifted Chat
                library and Expo library was difficult due to how specific the
                components needed to be organized, especially when adding audio
                message functionality. By consulting the Gifted Chat Github and
                Expo documentation, I was able to find a solution.
              </div>
            </div>
            <div className="casestudy__subsection-tall">
              <img
                className="casestudy__image-tall"
                src="/chat-casestudy3.png"
                alt="Chat Image 3"
              />
            </div>
          </div>
          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Duration</h3>
                The development took around a month to complete from start to
                finish and met the expected deadline for the project. Keep in
                mind, this included studying and learning React Native including
                the Gifted Chat library.
              </div>
              <div>
                <h3>Credits</h3>
                Role: Lead Developer <br />
                Tutor: Vivek Maskara <br />
                Mentor: Vinicius De Antoni
              </div>
              <div>
                <h3>Tools, Skills, Methodologies</h3>
                Tech Stack: React Native, Google Firebase <br />
                Style Method: React Native Stylesheets <br />
                Other Tech: React-Native Gifted Chat, React-Native Maps, Expo,
                Android Studio
              </div>
            </div>
          </div>
        </div>
      )}
      {projectName === "shopaholic" && (
        <div className="casestudy__body">
          <div className="casestudy__title">
            <h1>Shopaholic Project</h1>
            <h2>Case Study</h2>
          </div>
          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Overview</h3>
                Shopaholic is an ecommerce web app for users to purchase
                products or merchandise.. It was developed using Firebase,
                Firebase Functions, and React. The website allows users to
                create an account, filter through products, add products to
                shopping basket, make payments, and review past orders.
              </div>
              <div>
                <h3>Purpose and Context</h3>
                Shopaholic is a self-made project with the purpose of creating a
                fully functional ecommerce website due to their popularity among
                businesses. It was important to learn about how ecommerce
                websites were constructed, especially on how to integrate
                requests to the Stripe API in order to make credit card
                payments.
              </div>
              <div>
                <h3>Objective</h3>
                The main goal was to gain experience in creating an ecommerce
                website because there is a good chance a future client will want
                to sell their products online and will need some form of credit
                card payment system. It was necessary to understand how to save
                product information, allow users to filter products, and how to
                create a functioning shopping basket.
              </div>
            </div>
            <div className="casestudy__subsection">
              <img
                className="casestudy__image"
                src="/shopaholic-casestudy1.png"
                alt="Shopaholic Image 1"
              />
            </div>
          </div>

          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Development Process</h3>
                <h3>Backend - Firebase Cloud Functions</h3>
                In order to simplify the back-end processes, I used Firebase
                Cloud Functions to save time in development. Cloud functions are
                also becoming very popular among developers to remove the need
                to develop their backend from scratch. By using cloud functions,
                HTTP requests containing a total amount could be made to the
                Stripe API which returns a client secret. The client secret is
                sent to Stripe along with the user's credit card information to
                complete the payment.
              </div>
            </div>
            <div className="casestudy__subsection">
              <img
                className="casestudy__image"
                src="/shopaholic-casestudy2.png"
                alt="Shopaholic Image 2"
              />
            </div>
          </div>
          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Frontend - React</h3>I developed the client-side of the web
                app by using React and Material UI. Components were created for
                different areas of the website like the header, login, product
                info, and more. I learned how to implement the search bar and
                filter options through online tutorials, as well as,
                StackOverflow forums
              </div>
              <div>
                <h3>Challenges</h3>
                It took some time getting the Stripe API to work and required
                research into the API documentation to understand how payment
                processes worked. Payments using Stripe required API requests to
                include information in the body of the request formatted in a
                specific way or else the request would fail. Through many
                attempts and troubleshooting, I was able to get the Stripe API
                to work.
              </div>
              <div>
                <h3>Duration</h3>
                The development took around 2 months to complete from start to
                finish and met the expected deadline for the project. The
                project contained many new features that I was not familiar with
                such as creating the shopping basket, creating new documents
                within Firebase to store users orders, and making credit card
                payments through a third-party company like Stripe.
              </div>
              <div>
                <h3>Credits</h3>
                Role: Lead Developer
              </div>
              <div>
                <h3>Tools, Skills, Methodologies</h3>
                Tech Stack: React, Firebase, Firebase Cloud Functions <br />
                Style Method: CSS <br />
                Other Tech: React-router, Stripe API, Material UI
              </div>
            </div>
          </div>
        </div>
      )}
      {projectName === "spoileralert" && (
        <div className="casestudy__body">
          <div className="casestudy__title">
            <h1>Spoiler Alert Project</h1>
            <h2>Case Study</h2>
          </div>
          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Overview</h3>
                Spoiler Alert is an informational web app for users to search
                for movie plots. It was developed using React, TMDB API, and
                Wikipedia API.
              </div>
              <div>
                <h3>Purpose and Context</h3>
                Spoiler Alert is a self-made project with the purpose of
                understanding the process of making API calls and manipulating
                the data returned. It improved my ability to read and filter
                through API documentation. In addition, I learned how to clean
                the data received by using RegEx (regular expressions).
              </div>
              <div>
                <h3>Objective</h3>
                The main goal was to develop a website to improve my
                understanding of how APIs function. In addition, I wanted to
                have a project to show on my portfolio showing my ability to
                read documentation and to learn how to integrate new
                technologies or resources into my apps.
              </div>
            </div>
            <div className="casestudy__subsection">
              <img
                className="casestudy__image"
                src="/spoileralert-casestudy1.png"
                alt="Spoiler Alert Image 1"
              />
            </div>
          </div>

          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Development Process</h3>
                <h3>Frontend - React</h3>
                The client-side of the web app by using React and Material UI
                icons to create a minimalistic design. A simple search bar is
                used to call the TMDB API to return a list of movies along with
                their matching movie poster image. By selecting a movie, an API
                request is made to the Wikipedia API using search queries and
                the plot is returned.
              </div>
            </div>
            <div className="casestudy__subsection">
              <img
                className="casestudy__image"
                src="/spoileralert-casestudy2.png"
                alt="Spoiler Alert Image 2"
              />
            </div>
          </div>
          <div className="casestudy__section">
            <div className="casestudy__subsection">
              <div>
                <h3>Challenges</h3>
                Retrieving data from the Wikipedia API was somewhat difficult
                and required multiple chained queries to isolate the plot
                section. By carefully reviewing the Wikipedia API documentation,
                I was able to filter the relevant Wikipedia entries and their
                respective plots. The movie plot unfortunately contained element
                tags and styling so RegEx was used to remove any unnecessary
                text. Due to unfamiliarity with RegEx, I used StackOverflow
                posts to find a solution.
              </div>
              <div>
                <h3>Duration</h3>
                The development took around 2 months to complete. Originally,
                the web app was only supposed to retrieve a list of movies using
                the TMDB API, but I had an idea to expand the web app to also
                retrieve the movie’s plot, to appeal to users who like to read
                about movies instead of watching them.
              </div>
              <div>
                <h3>Credits</h3>
                Role: Lead Developer
              </div>
              <div>
                <h3>Tools, Skills, Methodologies</h3>
                Tech Stack: React, Axios <br />
                Style Method: CSS <br />
                Other Tech: Redux, React-router, Material UI
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
