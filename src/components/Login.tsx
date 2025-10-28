import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      await login(password);

      window.dispatchEvent(new Event("auth-change"));

      navigate("/");
    } catch (err) {
      setError("Incorrect password.");
    }
  }

  return (
    <div style={{ padding: "2rem", maxWidth: 400 }}>
      <h2>Owner Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
