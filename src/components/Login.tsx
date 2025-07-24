import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isLocal = window.location.hostname === "localhost";
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

    if (!isLocal) {
      setError("Login failed: not available in this environment.");
      return;
    }

    if (email === adminEmail) {
      localStorage.setItem("isAuthorized", "true");
      window.location.href = "/";
    } else {
      setError("Login failed: unauthorized email.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
