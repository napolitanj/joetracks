import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/Editor.css";

type Feature = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  linkText: string;
  category: string;
  type: string;
};

const PortfolioEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [link, setLink] = useState("");
  const [linkText, setLinkText] = useState("");
  const [category, setCategory] = useState("general");
  const [type, setType] = useState("project");
  const [message, setMessage] = useState("");
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.joetracks.com/api/portfolio/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setMessage("Feature not found.");
          return;
        }
        setTitle(data.title || "");
        setDescription(data.description || "");
        setImageUrl(data.imageUrl || "");
        setLink(data.link || "");
        setLinkText(data.link_text || data.linkText || "");
        setCategory(data.category || "general");
        setType(data.type || "project");
      })
      .catch((err) => {
        console.error("Failed to load feature", err);
        setMessage("Error loading feature.");
      });
  }, [id]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("You must be logged in.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("https://api.joetracks.com/api/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      setImageUrl(data.url);
      setMessage("Image uploaded!");
    } else {
      console.error("Upload failed:", data.error);
      setMessage("Image upload failed.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("You must be logged in.");
      return;
    }

    const method = id ? "PUT" : "POST";
    const url = id
      ? `https://api.joetracks.com/api/portfolio/${id}`
      : "https://api.joetracks.com/api/portfolio";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl,
        link,
        linkText,
        category,
        type,
      }),
    });

    if (res.ok) {
      setMessage(id ? "Feature updated!" : "Feature created!");
      navigate("/portfolio");
    } else {
      setMessage("Error saving feature.");
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    const token = localStorage.getItem("authToken");

    const res = await fetch(`https://api.joetracks.com/api/portfolio/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      setMessage("Feature deleted.");
      navigate("/portfolio");
    } else {
      setMessage("Error deleting feature.");
    }
  };

  return (
    <>
      <Link to="/portfolio">⇦ Back to Portfolio Page</Link>
      <div className="editor-container">
        <h2>{id ? "Edit Feature" : "Add New Feature"}</h2>
        <form onSubmit={handleSubmit} className="editor-form">
          <label>
            Feature Title:
            <input
              className="full-width-field"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          <label>
            Feature Description:
            <textarea
              className="full-width-field"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              required
            />
          </label>

          <label>
            Category:
            <select
              className="full-width-field"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="software">Software & Tech</option>
              <option value="outdoor">Outdoor Leadership</option>
              <option value="nonprofit">Nonprofit</option>
              <option value="marketing">Marketing & Web Strategy</option>
              <option value="writing">Writing</option>
              <option value="general">General</option>
            </select>
          </label>

          <label>
            Type:
            <select
              className="full-width-field"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="category">Category for Projects</option>
              <option value="project">Project</option>
            </select>
          </label>

          <label>
            Feature Link URL:
            <input
              className="full-width-field"
              type="text"
              placeholder="https://www.example.com"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>

          <label>
            Link Text:
            <input
              className="full-width-field"
              type="text"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
            />
          </label>

          <label>
            Feature Image:
            <input type="file" accept="image/*" onChange={handleFileUpload} />
          </label>

          {imageUrl && (
            <div className="image-preview">
              <img
                src={imageUrl}
                alt="Feature Preview"
                className="preview-image"
              />
              <button
                type="button"
                className="delete-button"
                onClick={() => setImageUrl("")}
              >
                Remove Image
              </button>
            </div>
          )}

          <button type="submit">
            {id ? "Update Feature" : "Create Feature"}
          </button>

          {id && !showConfirmDelete && (
            <button
              type="button"
              className="delete-button"
              onClick={() => setShowConfirmDelete(true)}
            >
              Delete Feature
            </button>
          )}

          {showConfirmDelete && (
            <>
              <p className="warning-text">
                Are you sure? This cannot be undone.
              </p>
              <div className="editor-buttons">
                <button
                  className="confirm-delete"
                  type="button"
                  onClick={handleDelete}
                >
                  Confirm Deletion
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
        </form>
      </div>
    </>
  );
};

export default PortfolioEditor;
