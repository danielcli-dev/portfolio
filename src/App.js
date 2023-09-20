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

  return (
    <div id="app__container" className="app__container dark">
      <div id="app" className="app">
        <Router>
          <Header active={active} setActive={setActive} />
          <Routes>
            {/* <Route path="/" element={<About />} /> */}
            <Route
              path="/"
              element={
                <>
                  <About active={active} />
                  <Projects active={active} />
                  <Contact active={active} />
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
