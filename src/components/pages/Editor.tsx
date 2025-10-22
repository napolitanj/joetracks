import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { checkAuth } from "../../utils/checkAuth";
import BlogEditor from "../BlogEditor";

const EditorPage = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    async function verify() {
      const authorized = await checkAuth();
      setIsAuthorized(authorized);
      setLoading(false);
      if (!authorized) navigate("/access-denied");
    }

    verify();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return isAuthorized ? <BlogEditor slug={slug} /> : null;
};

export default EditorPage;
