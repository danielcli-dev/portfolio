import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const [active, setActive] = useState("about");
  function scrollToView(id) {
    // let top =
    //   document.getElementById(id).offsetTop -
    //   document.getElementById("header").offsetHeight -
    //   10;

    // setTimeout(() => {
    //   window.scrollTop(top);
    // }, 1000);
    // console.log("running");
    let element = document.getElementById(id);
    console.log("element is", element);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return false;
  }
  return (
    <div id="app__container" className="app__container dark">
      <div id="app" className="app">
        <Router>
          <Header
            active={active}
            setActive={setActive}
            scrollToView={scrollToView}
            id="header"
          />
          <Routes>
            {/* <Route path="/" element={<About />} /> */}
            <Route
              path="/"
              element={
                <>
                  <About active={active} id="about" />
                  <Projects active={active} id="projects" />
                  <Contact active={active} id="contact" />
                  <div className="app__footer mobile-only">
                    <Footer active={active} />
                  </div>
                </>
              }
            />
            {/* <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
