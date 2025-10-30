import { useEffect, useState } from "react";
import { checkAuth } from "../../utils/checkAuth";
import { Link } from "react-router-dom";
import "../../styles/Blog.css";
import { getTrimmedContent } from "../../utils/trimParagraphs";

type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  imageUrl?: string;
  published?: boolean;
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://api.joetracks.com/api/blog");
        const data: Post[] = await res.json();
        const visible = data
          .filter((post) => post.published)
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          );
        setPosts(visible);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
      }
    }

    fetchPosts();

    (async () => {
      const authorized = await checkAuth();
      setIsAuthorized(authorized);
    })();
  }, []);

  return (
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
            <div className="post-brief">
              {getTrimmedContent(post.content, 250)}
            </div>
            <Link to={`/blog/${post.slug}`}>
              <p>Read more...</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
