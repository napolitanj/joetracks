import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { checkAuth } from "../utils/checkAuth";
import PortfolioFeature from "./PortfolioFeature";
import "../styles/Portfolio.css";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  linkText: string;
  position: number;
  category: string;
};

const PortfolioCategory = () => {
  const { category } = useParams();
  const [features, setFeatures] = useState<PortfolioItem[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const authorized = await checkAuth();
        setIsAuthorized(authorized);

        const res = await fetch(
          `https://api.joetracks.com/api/portfolio?category=${category}`
        );
        if (!res.ok) throw new Error("Failed to fetch portfolio data");
        const data = await res.json();

        // Sort newest or highest position first
        const sorted = data.sort(
          (a: PortfolioItem, b: PortfolioItem) => b.position - a.position
        );
        setFeatures(sorted);
      } catch (err) {
        console.error("Error loading category:", err);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, [category]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="portfolio-container">
      <div className="back-link">
        <Link to="/portfolio">⇦ Back to Portfolio</Link>
      </div>

      <h1 className="category-title">
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "Portfolio"}
      </h1>

      {isAuthorized && (
        <div className="create-feature">
          <Link to="/portfolioeditor">+ Create New Feature</Link>
        </div>
      )}

      <div className={`portfolio-list ${features.length > 0 ? "show" : ""}`}>
        {features.length > 0 ? (
          features.map((feature) => (
            <PortfolioFeature
              key={feature.id}
              id={feature.id}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              link={feature.link}
              linkText={feature.linkText}
              isAuthorized={isAuthorized}
            />
          ))
        ) : (
          <p className="empty-message">
            No items found in this category yet. Check back soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default PortfolioCategory;
