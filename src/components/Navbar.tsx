import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthButton from "./AuthButton";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
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
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Portfolio"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Blog"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <AuthButton />
          </li>
          <li>
            <button onClick={() => setDarkMode((prev) => !prev)}>
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
