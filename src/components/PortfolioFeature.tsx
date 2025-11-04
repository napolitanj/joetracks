import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/PortfolioFeature.css";
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
  const { ref, visible } = useScrollReveal(); // 👈 handles scroll-based reveal

  return (
    <div ref={ref} className={`feature-container ${visible ? "visible" : ""}`}>
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

      <a href={link} rel="noopener noreferrer" className="feature-button">
        {linkText}
      </a>
    </div>
  );
};

export default PortfolioFeature;
