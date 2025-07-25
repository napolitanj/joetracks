import { useEffect, useState } from "react";
import "../styles/Navbar.css";

const AuthButton = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const isLocalhost = window.location.hostname === "localhost";
    const loggedIn = localStorage.getItem("isAuthorized") === "true";
    setIsAuthorized(isLocalhost && loggedIn);
  }, []);

  const handleLogin = () => {
    const inputEmail = window.prompt("Enter your email:");

    if (!inputEmail) return;

    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

    if (inputEmail.trim().toLowerCase() === adminEmail.toLowerCase()) {
      localStorage.setItem("isAuthorized", "true");
      window.location.reload(); // Refresh UI
    } else {
      alert("Access denied: unauthorized email");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthorized");
    window.location.reload(); // Refresh UI
  };

  return (
    <div>
      {isAuthorized ? (
        <button onClick={handleLogout}>Sign out</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default AuthButton;
