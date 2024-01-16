import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import CaseStudy from "./CaseStudy";
// import Contact from "./Contact";

function App() {
  const [active, setActive] = useState("about");
  function scrollToView(id) {
    let top =
      document.getElementById(id).offsetTop -
      document.getElementById("header").offsetHeight;

    if (id === "about") {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, top);
    }
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <div id="app__container" className="app__container dark">
                <div id="app" className="app">
                  <Header
                    active={active}
                    setActive={setActive}
                    scrollToView={scrollToView}
                  />

                  <About active={active} />
                  <Projects active={active} />
                  {/* <Contact active={active} /> */}
                </div>
              </div>
            </React.Fragment>
          }
        />

        <Route
          path="/case-study/:projectId"
          element={
            <React.Fragment>
              <CaseStudy />
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
