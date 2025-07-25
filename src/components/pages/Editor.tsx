import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlogEditor from "../BlogEditor";

const EditorPage = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    const isLocalhost = window.location.hostname === "localhost";
    const loggedIn = localStorage.getItem("isAuthorized") === "true";

    if (isLocalhost && loggedIn) {
      setIsAuthorized(true);
    } else {
      navigate("/access-denied");
    }
  }, [navigate]);

  return isAuthorized ? <BlogEditor slug={slug} /> : <p>Loading...</p>;
};

export default EditorPage;
