import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Link } from "react-router-dom";
import "/src/styles/Editor.css";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.from("posts").insert([
      {
        title,
        slug,
        content,
        published,
      },
    ]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Post submitted!");
      setTitle("");
      setSlug("");
      setContent("");
      setPublished(false);
    }
  };

  return (
    <>
      <div className="editor-container">
        <Link to="/blog">⇦ Back to Blog Dashboard</Link>
        <form onSubmit={handleSubmit} className="editor-form">
          <h2>Create a Blog Post</h2>
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
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
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
          <button type="submit">Submit Post</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </>
  );
};

export default BlogEditor;
