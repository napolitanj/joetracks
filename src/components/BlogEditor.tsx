import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "/src/styles/Editor.css";

type BlogEditorProps = {
  slug?: string;
};

const BlogEditor = ({ slug }: BlogEditorProps) => {
  const [title, setTitle] = useState("");
  const [slugInput, setSlugInput] = useState("");
  const [postId, setPostId] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, slug, content, published")
        .eq("slug", slug)
        .single();

      if (error) {
        setMessage(`Post not found for slug: ${slug}`);
        console.error("Fetch error:", error);
      } else {
        setPostId(data.id);
        setTitle(data.title);
        setSlugInput(data.slug);
        setContent(data.content);
      }
    };

    fetchPost();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (postId) {
      const { error } = await supabase
        .from("posts")
        .update({
          title,
          slug: slugInput,
          content,
          published: true,
        })
        .eq("id", postId);

      if (error) {
        setMessage(`Error updating post: ${error.message}`);
      } else {
        setMessage("Post updated!");
        navigate("/blog/" + slugInput);
      }
    } else {
      const { error } = await supabase.from("posts").insert([
        {
          title,
          slug: slugInput,
          content,
          published: true,
        },
      ]);

      if (error) {
        setMessage(`Error creating post: ${error.message}`);
      } else {
        setMessage("Post created!");
        setTitle("");
        setSlugInput("");
        setContent("");
      }
    }
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { error } = await supabase.from("posts").delete().eq("id", postId);

    if (error) {
      setMessage(`Error deleting post: ${error.message}`);
    } else {
      setMessage("Post deleted!");
      navigate("/blog");
    }
  };

  return (
    <>
      <div className="editor-container">
        <Link to="/blog">⇦ Back to Blog Dashboard</Link>
        <form onSubmit={handleSubmit} className="editor-form">
          <h2>{slug ? "Edit Blog Post" : "Create a Blog Post"}</h2>
          <input
            className="full-width-field"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            className="full-width-field"
            type="text"
            placeholder="Slug (e.g. my-first-post)"
            value={slugInput}
            onChange={(e) => setSlugInput(e.target.value)}
            required
          />
          <textarea
            className="full-width-field"
            placeholder="Write your post here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            required
          />
          <div className="editor-button-container">
            {slug ? (
              showConfirmDelete ? (
                <>
                  <p className="warning-text">
                    Are you sure you want to delete this post? This cannot be
                    reversed.
                  </p>
                  <div className="editor-buttons">
                    <button className="confirm-delete" onClick={handleDelete}>
                      Yes, Delete
                    </button>
                    <button onClick={() => setShowConfirmDelete(false)}>
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="editor-buttons">
                    <button type="submit">Update Post</button>
                    <button
                      type="button"
                      onClick={() => setShowConfirmDelete(true)}
                    >
                      Delete Post
                    </button>
                  </div>
                </>
              )
            ) : (
              <button type="submit">Submit Post</button>
            )}
            {message && <p>{message}</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogEditor;
