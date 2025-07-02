import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/Editor.css";

const PortfolioEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [link, setLink] = useState("");
  const [linkText, setLinkText] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [originalImageUrl, setOriginalImageUrl] = useState("");
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchFeature = async () => {
      const { data, error } = await supabase
        .from("features")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setMessage("Error loading feature.");
        console.error(error);
      } else {
        setTitle(data.title);
        setDescription(data.description);
        setImageUrl(data.image_url);
        setOriginalImageUrl(data.image_url);
        setLink(data.link);
        setLinkText(data.link_text);
      }
    };

    fetchFeature();
  }, [id]);

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return null;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      console.error("User not authenticated.");
      return null;
    }

    const cleanFileName = imageFile.name.replace(/[^\w.\-]/g, "_");
    const filePath = `portfolio/${user.id}/${Date.now()}_${cleanFileName}`;

    const { error: uploadError } = await supabase.storage
      .from("portfolio-images")
      .upload(filePath, imageFile, {
        upsert: false,
        cacheControl: "3600",
        contentType: imageFile.type,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      return null;
    }

    const { data } = supabase.storage
      .from("portfolio-images")
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitted imageFile:", imageFile);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("User not authenticated.");
      return;
    }

    let finalImageUrl = imageUrl;

    if (imageFile) {
      const oldImagePath = originalImageUrl?.split(
        "/storage/v1/object/public/portfolio-images/"
      )[1];

      console.log("Old image path to delete:", oldImagePath);

      const uploadedUrl = await uploadImage();

      if (uploadedUrl) {
        finalImageUrl = uploadedUrl;

        if (oldImagePath) {
          const { data: sessionData } = await supabase.auth.getSession();

          if (!sessionData.session) {
            console.error("User not authenticated — cannot delete old image.");
          } else {
            const response = await fetch(
              "https://vtcezvtqcbaymehpedtp.supabase.co/functions/v1/deleteFeature",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${sessionData.session.access_token}`,
                },
                body: JSON.stringify({ oldImagePath }),
              }
            );

            const result = await response.json();
            console.log("Edge Function delete response:", result);
          }
        }
      }
    }

    if (id) {
      const { error } = await supabase
        .from("features")
        .update({
          title,
          description,
          image_url: finalImageUrl,
          link,
          link_text: linkText,
        })
        .eq("id", id);

      if (error) {
        setMessage("Error updating feature.");
        return;
      }

      setMessage("Feature updated!");
    } else {
      const { error } = await supabase.from("features").insert([
        {
          title,
          description,
          image_url: finalImageUrl,
          link,
          link_text: linkText,
          user_id: user.id,
        },
      ]);

      if (error) {
        setMessage("Error creating feature.");
        return;
      }

      setMessage("Feature created!");
      navigate("/portfolio");
    }
  };

  const handleDelete = async () => {
    if (!id) return;

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.access_token) {
      setMessage("User not authenticated.");
      return;
    }

    try {
      const response = await fetch(
        "https://vtcezvtqcbaymehpedtp.supabase.co/functions/v1/deleteFeature",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({ id }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(JSON.stringify(error));
      }

      setMessage("Feature and image deleted.");
      navigate("/portfolio");
    } catch (error) {
      console.error("Delete error:", error);
      setMessage("Error deleting feature.");
    }
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
                <button className="confirm-delete" onClick={handleDelete}>
                  Confirm Deletion
                </button>
                <button onClick={() => setShowConfirmDelete(false)}>
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
