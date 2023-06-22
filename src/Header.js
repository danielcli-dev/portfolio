import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [active, setActive] = useState("about");

  return (
    <div className="header">
      <div className="header__nav">
        <Link
          to="/"
          onClick={() => setActive("about")}
          className={`${active === "about" ? "active" : null}`}
        >
          About
        </Link>

        <Link
          to="/projects"
          onClick={() => setActive("projects")}
          className={`${active === "projects" ? "active" : null}`}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          onClick={() => setActive("contact")}
          className={`${active === "contact" ? "active" : null}`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
