import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { User } from "@supabase/supabase-js";

const AuthButton = () => {
  const [user, setUser] = useState<User | null>(null);

  const allowedEmail = "napolitanjoe@gmail.com";

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user?.email === allowedEmail) {
        setUser(data.user);
      } else if (data?.user) {
        await supabase.auth.signOut();
        alert("Access denied: unauthorized email");
      }
    };

    checkUser();
  }, []);

  const handleLogin = async () => {
    const inputEmail = window.prompt("Enter your email:");

    if (!inputEmail) return;

    if (inputEmail.trim().toLowerCase() !== allowedEmail) {
      alert("Access denied: unauthorized email");
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({
      email: inputEmail,
    });

    if (error) {
      alert("Error sending magic link");
    } else {
      alert("Magic link sent! Check your email.");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <button onClick={handleLogout}>Sign out</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default AuthButton;
