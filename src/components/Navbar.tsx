import { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <a href="#home">Bio</a>
        </li>
        <li>
          <a href="#about">Portfolio</a>
        </li>
        <li>
          <a href="#portfolio">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
