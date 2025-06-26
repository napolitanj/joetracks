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

      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

      if (user?.email === adminEmail) {
        setIsAuthorized(true);
      }
    };

    fetchPosts();
    checkAuth();
  }, []);

  return (
    <>
      <div className="blog-container">
        {isAuthorized && (
          <div>
            <Link to="/editor" className="">
              + Create New Post
            </Link>
          </div>
        )}
        <div className={`blog-list ${posts.length > 0 ? "show" : ""}`}>
          {posts.map((post) => (
            <div key={post.id} className="post-feature">
              <h2>{post.title}</h2>
              <p className="post-brief">
                {post.content.slice(0, 200)}
                {post.content.length > 200 && "..."}
              </p>
              <Link to={`/blog/${post.slug}`} key={post.id}>
                <p>Read more...</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
