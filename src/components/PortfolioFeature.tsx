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
      <img src={imageUrl} className="feature-image" />
      <p className="feature-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </div>
  );
};

export default PortfolioFeature;
