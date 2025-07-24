import { useEffect, useState } from "react";
import blogPosts from "../../data/blogPosts.json";
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
    // Fetch posts from JSON
    const visiblePosts = blogPosts
      .filter((post) => post.published)
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

    setPosts(visiblePosts);

    // Local-only auth logic
    const isLocalhost = window.location.hostname === "localhost";
    const loggedIn = localStorage.getItem("isAuthorized") === "true";
    setIsAuthorized(isLocalhost && loggedIn);
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
