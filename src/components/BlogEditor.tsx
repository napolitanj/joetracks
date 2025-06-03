import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import "/src/styles/Editor.css";

type BlogEditorProps = {
  slug?: string;
};

const BlogEditor = ({ slug }: BlogEditorProps) => {
  const [title, setTitle] = useState("");
  const [slugInput, setSlugInput] = useState("");
  const [postId, setPostId] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [message, setMessage] = useState("");
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
        setPublished(data.published);
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
          published,
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
          published,
        },
      ]);

      if (error) {
        setMessage(`Error creating post: ${error.message}`);
      } else {
        setMessage("Post created!");
        setTitle("");
        setSlugInput("");
        setContent("");
        setPublished(false);
      }
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
          <label>
            <input
              className="checkbox"
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            <p>Check here to publish upon submitting.</p>
          </label>
          <button type="submit">{slug ? "Update Post" : "Submit Post"}</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </>
  );
};

export default BlogEditor;
