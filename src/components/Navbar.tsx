import { useState } from "react";
import { NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Navbar">
      <button
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Bio
          </NavLink>
        </li>
        <li>
          <NavLink to="/Portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/Blog" className={({ isActive }) => (isActive ? "active" : "")}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </li>
        <li>
          <AuthButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
