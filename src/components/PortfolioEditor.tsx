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
  };

  const handleDelete = () => {
    if (editingIndex === null) return;

    const updatedFeatures = features.filter((_, i) => i !== editingIndex);
    setFeatures(updatedFeatures);
    setMessage("Feature deleted.");
    navigate("/portfolio");
  };

  const handleExport = () => {
    const json = JSON.stringify(features, null, 2);
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
          <input
            className="full-width-field"
            type="text"
            placeholder="Feature Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="full-width-field"
            placeholder="Feature Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            required
          />
          <input
            className="full-width-field"
            type="text"
            placeholder="Feature Link URL (use 'https://www')"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <input
            className="full-width-field"
            type="text"
            placeholder="Link Text"
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
            required
          />
          <input
            className="full-width-field"
            type="number"
            placeholder="Position (lower = more recent)"
            value={position}
            onChange={(e) => setPosition(parseInt(e.target.value, 10))}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              setImageFile(file);
              if (file) {
                setImageUrl(URL.createObjectURL(file));
              }
            }}
          />
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Feature Preview"
              className="preview-image"
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
        <div className="export-container">
          <button onClick={handleExport}>Export Updated JSON</button>
        </div>
      </div>
    </>
  );
};

export default PortfolioEditor;
