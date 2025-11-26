import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import { Helmet } from "react-helmet-async";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passedGate, setPassedGate] = useState(false);
  const [gateCode, setGateCode] = useState("");
  const [gateAttempts, setGateAttempts] = useState(0);

  const navigate = useNavigate();
  const SECRET_CODE = import.meta.env.VITE_ADMIN_ACCESS_CODE;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      await login(password);

      window.dispatchEvent(new Event("auth-change"));
      navigate("/");
    } catch (err) {
      // Add a delay to reduce brute force risk
      await new Promise((res) => setTimeout(res, 400));

      setError("Invalid credentials.");
    }
  }

  // Too many incorrect gate attempts
  if (gateAttempts >= 5 && !passedGate) {
    return (
      <div style={{ padding: "2rem", maxWidth: 400 }}>
        <p>Too many attempts. Try again later.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {!passedGate && (
        <form
          style={{ padding: "2rem", maxWidth: 400 }}
          onSubmit={(e) => {
            e.preventDefault();

            if (gateCode === SECRET_CODE) {
              setPassedGate(true);
            } else {
              setGateAttempts((prev) => prev + 1);
              setError("Invalid credentials.");
            }
          }}
        >
          <input
            type="password"
            placeholder="Access Code"
            value={gateCode}
            onChange={(e) => setGateCode(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <button type="submit">Continue</button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}

      {passedGate && (
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
      )}
    </>
  );
}
