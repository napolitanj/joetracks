import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkAuth } from "../../utils/checkAuth";
import "../../styles/BlogPost.css";

type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: number;
  imageUrl?: string;
  published: number;
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/blog/${slug}`);
        if (!res.ok) throw new Error("Failed to load post");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error(err);
        setPost(null);
      }

      const authorized = await checkAuth();
      setIsAuthorized(authorized);
    }

    fetchPost();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <Link to="/blog">⇦ Back to Blog Dashboard</Link>
      <article className="blog-container">
        <div className={`post-contents ${fadeIn ? "show" : ""}`}>
          <h1>{post.title}</h1>
          {post.imageUrl && (
            <img src={post.imageUrl} alt={post.title} className="post-image" />
          )}
          <p>{new Date(post.created_at * 1000).toLocaleDateString()}</p>
          <div>
            {post.content.split(/\n{2,}/).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      {isAuthorized && (
        <div className="edit-button">
          <Link to={`/editor/${slug}`} className="">
            ✏️
          </Link>
        </div>
      )}
    </>
  );
};

export default BlogPost;
