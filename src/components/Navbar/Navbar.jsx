import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-wrapper">
      {/* left side */}
      <div className="nav-left">
        <div className="nav-name">Abazrashid</div>
        <span>Toggle</span>
      </div>
      {/* right side */}
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>Experiences</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Testmonials</li>
          </ul>
        </div>
        <div className="nav-button">
          <button>
            <span>Contact me</span>
          </button>
        </div>
      </div>
    </div>
  );
}
