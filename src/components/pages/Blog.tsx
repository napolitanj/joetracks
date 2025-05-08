import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient.tsx";
import { Link } from "react-router-dom";
import "../../styles/Blog.css";

type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching posts:", error);
      else setPosts(data);
    };

    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.email === "napolitanjoe@gmail.com") {
        setIsAuthorized(true);
      }
    };

    fetchPosts();
    checkAuth();
  }, []);

  return (
    <div className="blog-container">
      {isAuthorized && (
        <div style={{ marginBottom: "1rem" }}>
          <Link to="/editor" className="">
            + Create New Post
          </Link>
        </div>
      )}
      {posts.length === 0 ? (
        <p>Loading blog posts...</p>
      ) : (
        posts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id}>
            <h2 className="text-xl font-bold hover:underline">{post.title}</h2>
          </Link>
        ))
      )}
    </div>
  );
};

export default Blog;
