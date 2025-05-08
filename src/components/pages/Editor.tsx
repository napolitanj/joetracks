import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import BlogEditor from "../BlogEditor";
import { useNavigate } from "react-router-dom";

const EditorPage = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user?.email === "napolitanjoe@gmail.com") {
        setUserEmail(user.email);
      } else {
        navigate("/access-denied");
      }
    };

    checkUser();
  }, [navigate]);

  return userEmail ? <BlogEditor /> : <p>Loading...</p>;
};

export default EditorPage;
