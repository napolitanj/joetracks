import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [imageUrl, setImageUrl] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://api.joetracks.com/api/blog");
        const data: Post[] = await res.json();
        setPosts(data);

        if (slug) {
          const index = data.findIndex((p) => p.slug === slug);
          if (index !== -1) {
            const post = data[index];
            setEditingIndex(index);
            setTitle(post.title);
            setSlugInput(post.slug);
            setContent(post.content);
          } else {
            setMessage(`Post not found for slug: ${slug}`);
          }
        }
      } catch (err) {
        console.error("Failed to fetch posts", err);
      }
    }
    fetchPosts();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    const postData = {
      title,
      slug: slugInput,
      content,
      imageUrl,
      published: true,
    };

    const method = editingIndex !== null ? "PUT" : "POST";
    const url =
      editingIndex !== null
        ? `https://api.joetracks.com/api/blog/${posts[editingIndex].id}`
        : "https://api.joetracks.com/api/blog";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (!res.ok) throw new Error("Failed to save post");
      setMessage(editingIndex !== null ? "Post updated!" : "Post created!");

      const refreshed = await fetch("https://api.joetracks.com/api/blog");
      setPosts(await refreshed.json());
    } catch (err) {
      console.error(err);
      setMessage("Error saving post");
    }

    setTitle("");
    setSlugInput("");
    setContent("");
    setEditingIndex(null);
  };

  const handleDelete = async () => {
    if (editingIndex === null) return;
    const token = localStorage.getItem("authToken");
    const id = posts[editingIndex].id;

    try {
      const res = await fetch(`https://api.joetracks.com/api/blog/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to delete post");

      setPosts(posts.filter((_, i) => i !== editingIndex));
      setMessage("Post deleted!");
      navigate("/blog");
    } catch (err) {
      console.error("Delete failed:", err);
      setMessage("Error deleting post.");
    }
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
              const token = localStorage.getItem("authToken");
              const res = await fetch("https://api.joetracks.com/api/upload", {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: formData,
              });

              if (!res.ok) throw new Error("Upload failed");
              const data = await res.json();
              setImageUrl(data.url);
              setMessage("Image uploaded!");
            } catch (err) {
              console.error("Upload error", err);
              setMessage("Image upload failed");
            }
          }}
        />

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            style={{ maxWidth: "200px", marginTop: "8px" }}
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
