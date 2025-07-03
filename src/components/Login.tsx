import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient.tsx";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      email,
      options: {
        emailRedirectTo: "https://napolitanj.github.io/joe-napolitan.com/",
      },
    };

    console.log("Login payload:", payload);

    const { error } = await supabase.auth.signInWithOtp(payload);

    if (error) {
      setError(error.message);
      setMessage("");
    } else {
      setMessage("Check your email for a magic login link.");
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Send Magic Link</button>
    </form>
  );
};

export default Login;
