import { useEffect, useState } from "react";
import { checkAuth } from "../../utils/checkAuth";
import { Link } from "react-router-dom";
import "../../styles/Blog.css";
import { getTrimmedContent } from "../../utils/trimParagraphs";
import { useScrollReveal } from "../../hooks/useScrollReveal";

type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  imageUrl?: string;
  published?: boolean;
};

const BlogCard = ({ post }: { post: Post }) => {
  const { ref, visible } = useScrollReveal();

  return (
    <div ref={ref} className={`post-feature ${visible ? "visible" : ""}`}>
      {post.imageUrl && (
        <img src={post.imageUrl} alt={post.title} className="post-thumbnail" />
      )}
      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-date">
          {new Date(post.created_at).toLocaleDateString()}
        </p>
        <div className="post-brief">{getTrimmedContent(post.content, 250)}</div>
        <Link to={`/blog/${post.slug}`} className="read-more">
          Read more →
        </Link>
      </div>
    </div>
  );
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
        <div className="create-post">
          <Link to="/editor" className="">
            + Create New Post
          </Link>
        </div>
      )}

      <div className={`blog-list ${posts.length > 0 ? "show" : ""}`}>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
