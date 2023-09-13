import './Navbar.scss';

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about">About</a>
          </li>
          <li className="navbar-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
