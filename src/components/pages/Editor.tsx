import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";
import BlogEditor from "../BlogEditor";

const EditorPage = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

      if (user?.email === adminEmail) {
        setIsAuthorized(true);
      } else {
        navigate("/access-denied");
      }
    };

    checkUser();
  }, [navigate]);

  return isAuthorized ? <BlogEditor slug={slug} /> : <p>Loading...</p>;
};

export default EditorPage;
