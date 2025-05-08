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

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*") // No filter applied yet
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching posts:", error);
      else setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="blog-container">
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
