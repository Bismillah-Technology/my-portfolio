// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>JDR Consultancy</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#apps">Apps</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
