import React, { useState } from "react";
import { supabase } from "./supabaseClient";

const BlogEditor: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure the user is logged in
    const user = supabase.auth.user();
    if (!user) {
      setError("You must be logged in to create a blog post");
      return;
    }

    // Insert the post into the database
    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          title,
          content,
        },
      ])
      .single();

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Post published successfully!");
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default BlogEditor;
