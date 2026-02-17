import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkAuth } from "../../utils/checkAuth";
import Reveal from "../ui/Reveal";
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
  const API_BASE = "https://api.joetracks.com";

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`${API_BASE}/api/blog/${slug}`);
        if (!res.ok) throw new Error("Failed to load post");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Error loading post:", err);
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
      <Reveal delay={0}>
        <Link to="/blog">⇦ Back to Blog Dashboard</Link>
      </Reveal>
      <article className="single-post-container">
        <div className={`post-contents ${fadeIn ? "show" : ""}`}>
          <Reveal variant="up" delay={80}>
            <h1>{post.title}</h1>
            {post.imageUrl && (
              <img src={post.imageUrl} alt={post.title} className="post-image" />
            )}
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p>
              <time dateTime={new Date(post.created_at * 1000).toISOString()}>
                {new Date(post.created_at * 1000).toLocaleDateString()}
              </time>
            </p>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <div>
              {post.content.split(/\n{2,}/).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
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
