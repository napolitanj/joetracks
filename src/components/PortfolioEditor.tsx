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
};

const PortfolioEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [features, setFeatures] = useState<Feature[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [link, setLink] = useState("");
  const [linkText, setLinkText] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    fetch("https://api.joetracks.com/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data);
        if (id) {
          const numericId = parseInt(id, 10);
          const feature = data.find((f: Feature) => f.id === numericId);
          if (feature) {
            setTitle(feature.title);
            setDescription(feature.description);
            setImageUrl(feature.imageUrl);
            setLink(feature.link);
            setLinkText(feature.linkText);
          } else {
            setMessage("Feature not found.");
          }
        }
      })
      .catch((err) => console.error("Failed to load portfolio", err));
  }, [id]);

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
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
    console.log("Submitting feature with imageUrl:", imageUrl);

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
            Feature Link URL:
            <input
              className="full-width-field"
              type="text"
              placeholder="https://www.example.com"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </label>

          <label>
            Link Text:
            <input
              className="full-width-field"
              type="text"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              required
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
