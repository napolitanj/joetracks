import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import blogPosts from "../data/blogPosts.json";
import "/src/styles/Editor.css";

type BlogEditorProps = {
  slug?: string;
};

type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
  created_at: string;
  published: boolean;
};

const BlogEditor = ({ slug }: BlogEditorProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [slugInput, setSlugInput] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [form, setForm] = useState({ title: "", content: "", imageUrl: "" });
  const navigate = useNavigate();

  useEffect(() => {
    setPosts(blogPosts);

    if (slug) {
      const index = blogPosts.findIndex((p) => p.slug === slug);
      if (index !== -1) {
        const post = blogPosts[index];
        setEditingIndex(index);
        setTitle(post.title);
        setSlugInput(post.slug);
        setContent(post.content);
      } else {
        setMessage(`Post not found for slug: ${slug}`);
      }
    }
  }, [slug]);

  const exportUpdatedJSON = (updatedPosts: Post[]) => {
    const json = JSON.stringify(updatedPosts, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "blogPosts.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date().toISOString();

    const updatedPost: Post = {
      id: editingIndex !== null ? posts[editingIndex].id : crypto.randomUUID(),
      title,
      slug: slugInput,
      content,
      created_at: editingIndex !== null ? posts[editingIndex].created_at : now,
      published: true,
    };

    let newPosts = [...posts];

    if (editingIndex !== null) {
      newPosts[editingIndex] = updatedPost;
      setMessage("Post updated!");
    } else {
      newPosts = [updatedPost, ...newPosts];
      setMessage("Post created!");
    }

    setPosts(newPosts);
    exportUpdatedJSON(newPosts);

    setTitle("");
    setSlugInput("");
    setContent("");
    setEditingIndex(null);
  };

  const handleDelete = () => {
    if (editingIndex === null) return;
    const newPosts = posts.filter((_, i) => i !== editingIndex);
    setPosts(newPosts);
    exportUpdatedJSON(newPosts);
    setMessage("Post deleted!");
    navigate("/blog");
  };

  return (
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
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const formData = new FormData();
            formData.append("file", file);

            try {
              const token = localStorage.getItem("token");
              const res = await fetch("/api/upload", {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: formData,
              });
              if (!res.ok) throw new Error("Upload failed");
              const data = await res.json();
              setForm({ ...form, imageUrl: data.url });
            } catch (err) {
              console.error("Upload error", err);
              setMessage("Image upload failed");
            }
          }}
        />
        {form.imageUrl && (
          <img
            src={form.imageUrl}
            alt="Preview"
            style={{ maxWidth: "10em", marginTop: "1em" }}
          />
        )}
        <div className="editor-button-container">
          <div className="editor-buttons">
            <button type="submit">{slug ? "Update" : "Create"} Post</button>
            {slug && !showConfirmDelete && (
              <button type="button" onClick={() => setShowConfirmDelete(true)}>
                Delete Post
              </button>
            )}
          </div>
          {showConfirmDelete && (
            <>
              <p className="warning-text">
                Are you sure you want to delete this post? This cannot be
                reversed.
              </p>
              <div className="editor-buttons">
                <button
                  className="confirm-delete"
                  type="button"
                  onClick={handleDelete}
                >
                  Yes, Delete
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirmDelete(false)}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
          {message && <p>{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default BlogEditor;
