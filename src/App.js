import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div id="app__container" className="app__container dark">
      <div id="app" className="app">
        <Router>
          <Header />
          <Routes>
            {/* <Route path="/" element={<About />} /> */}
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Projects />
                  <Contact />
                  
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
