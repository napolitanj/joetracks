import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { Link } from "react-router-dom";
import "../../styles/BlogPost.css";

type Post = {
  title: string;
  content: string;
  created_at: string;
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function fetchPost() {
      const { data } = await supabase
        .from("posts")
        .select("title, content, created_at")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (data) setPost(data);
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
          <p>{new Date(post.created_at).toLocaleDateString()}</p>
          <div>{post.content}</div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
