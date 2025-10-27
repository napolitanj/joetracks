import "../styles/PortfolioFeature.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type PortfolioFeatureProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  linkText: string;
  isAuthorized: boolean;
};

const PortfolioFeature = ({
  id,
  title,
  description,
  imageUrl,
  link,
  linkText,
  isAuthorized,
}: PortfolioFeatureProps) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`feature-container ${fadeIn ? "show" : ""}`}>
      {isAuthorized && (
        <Link to={`/portfolioeditor/${id}`} className="edit-link">
          ✏️ Edit Feature
        </Link>
      )}
      <h2 className="feature-title">{title}</h2>
      {imageUrl ? (
        <img
          src={
            imageUrl.startsWith("http")
              ? imageUrl
              : `https://pub-59c9aabb45a74ed489e0eaea1802c581.r2.dev/${imageUrl.replace(
                  /^\.?\/?images\/?/,
                  ""
                )}`
          }
          className="feature-image"
          alt="Feature"
        />
      ) : (
        <div className="image-placeholder">No Image</div>
      )}

      <p className="feature-description">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="feature-button"
      >
        {linkText}
      </a>
    </div>
  );
};

export default PortfolioFeature;
