import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = () => {
    setMenuOpen(false); // Fecha o menu após clicar em um link
  };

  return (
    <nav>
      <h1 className="logo">André Margarido</h1>

      <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </span>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleNavigation}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNavigation}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleNavigation}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNavigation}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
