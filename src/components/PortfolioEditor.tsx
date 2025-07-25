import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import portfolioData from "../data/portfolio.json";
import "../styles/Editor.css";

type Feature = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  link: string;
  link_text: string;
  position: number;
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
  const [position, setPosition] = useState<number>(0);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const rawImageMap = import.meta.glob("../assets/images/*", {
    eager: true,
  });

  const imageOptions = Object.entries(rawImageMap).map(([path, mod]) => {
    const filename = path.split("/").pop();
    return {
      label: filename || path,
      value: `/src/assets/images/${filename}`, // <- relative path
    };
  });

  useEffect(() => {
    setFeatures(portfolioData);

    if (id) {
      const numericId = parseInt(id, 10);
      const index = portfolioData.findIndex((f) => f.id === numericId);
      if (index !== -1) {
        const feature = portfolioData[index];
        setEditingIndex(index);
        setTitle(feature.title);
        setDescription(feature.description);
        setImageUrl(feature.image_url);
        setLink(feature.link);
        setLinkText(feature.link_text);
        setPosition(feature.position);
      } else {
        setMessage("Feature not found.");
      }
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newImageUrl =
      imageFile && imageUrl.startsWith("blob:") ? imageUrl : imageUrl;

    const newFeature: Feature = {
      id: editingIndex !== null ? features[editingIndex].id : Date.now(),
      title,
      description,
      image_url: newImageUrl,
      link,
      link_text: linkText,
      position,
    };

    let updatedFeatures = [...features];

    if (editingIndex !== null) {
      updatedFeatures[editingIndex] = newFeature;
      setMessage("Feature updated!");
    } else {
      updatedFeatures = [newFeature, ...updatedFeatures];
      setMessage("Feature created!");
      navigate("/portfolio");
    }

    setFeatures(updatedFeatures);

    setTitle("");
    setDescription("");
    setImageUrl("");
    setLink("");
    setLinkText("");
    setPosition(0);
    setImageFile(null);
    setEditingIndex(null);

    const json = JSON.stringify(updatedFeatures, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDelete = () => {
    if (editingIndex === null) return;

    const updatedFeatures = features.filter((_, i) => i !== editingIndex);
    setFeatures(updatedFeatures);
    setMessage("Feature deleted.");
    navigate("/portfolio");

    // Export the updated JSON
    const json = JSON.stringify(updatedFeatures, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio.json";
    a.click();
    URL.revokeObjectURL(url);
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
            Position (lower = more recent):
            <input
              className="full-width-field"
              type="number"
              value={position}
              onChange={(e) => setPosition(parseInt(e.target.value, 10))}
              required
            />
          </label>

          <label>
            Select Image:
            <select
              className="full-width-field"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            >
              <option value="">Choose an image</option>
              {imageOptions.map((img) => (
                <option key={img.value} value={img.value}>
                  {img.label}
                </option>
              ))}
            </select>
          </label>

          {imageUrl && (
            <img
              src={imageUrl}
              alt="Feature Preview"
              className="preview-image"
              onError={() => setImageUrl("")}
            />
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
