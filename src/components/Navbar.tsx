import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { isTokenValid, logout } from "../utils/auth";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    function syncAuth() {
      const token = localStorage.getItem("authToken");
      const valid = isTokenValid(token);

      setIsLoggedIn(valid);

      if (!valid && token) {
        logout();
      }
    }

    syncAuth();

    window.addEventListener("auth-change", syncAuth);
    window.addEventListener("storage", syncAuth);

    const interval = setInterval(syncAuth, 60 * 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("auth-change", syncAuth);
      window.removeEventListener("storage", syncAuth);
    };
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.shiftKey && e.key === "L") {
        navigate("/login");
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <nav className="Navbar">
      <Link
        to="/"
        className="navbar-brand"
        onClick={() => setMenuOpen(false)}
        aria-label="JoeTracks Home"
      >
        <img
          src="/images/logo-lockup-teal.png"
          alt="JoeTracks"
          className="navbar-brand-image"
        />
      </Link>
      <button
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Start Here
          </NavLink>
        </li>
        <li>
          <NavLink to="/guides" onClick={() => setMenuOpen(false)}>
            Guides
          </NavLink>
        </li>
        <li>
          <NavLink to="/tools" onClick={() => setMenuOpen(false)}>
            Tools
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
