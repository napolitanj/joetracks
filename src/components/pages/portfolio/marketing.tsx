import { useEffect, useState } from "react";
import { checkAuth } from "../../../utils/checkAuth";
import { Link } from "react-router-dom";
import PortfolioFeature from "../../PortfolioFeature";
import "../../styles/Portfolio.css";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  position: number;
  linkText: string;
  category?: string; // Optional if you add categories to backend later
};

const CategoryPortfolio = () => {
  const [features, setFeatures] = useState<Project[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    async function verify() {
      const authorized = await checkAuth();
      setIsAuthorized(authorized);
    }

    async function loadPortfolio() {
      const res = await fetch("https://api.joetracks.com/api/portfolio");
      const data = await res.json();

      // 🔧 OPTIONAL: filter by category once your backend supports it
      // const filtered = data.filter((item: Project) => item.category === "outdoor");
      // setFeatures(filtered.sort((a, b) => b.position - a.position));

      // For now, manually filter or hardcode the items for each page:
      setFeatures(
        data.sort((a: Project, b: Project) => b.position - a.position)
      );
    }

    loadPortfolio();
    verify();
  }, []);

  return (
    <div className="portfolio-container">
      {/* 🔧 CUSTOMIZE: Change the intro text for each category */}
      <section className="portfolio-intro">
        <h1>Outdoor Leadership & Education</h1>
        <p>
          From avalanche safety to wilderness expeditions, these projects
          highlight years of hands-on experience leading, teaching, and building
          programs in the outdoors.
        </p>
      </section>

      {isAuthorized && (
        <div className="create-feature">
          <Link to="/portfolioeditor">+ Create New Feature</Link>
        </div>
      )}

      <div className={`portfolio-list ${features.length > 0 ? "show" : ""}`}>
        {features.map((feature) => (
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
        ))}
      </div>

      {/* 🔧 Keep or remove as you prefer */}
      <div className="back-link">
        <Link to="/portfolio">⇦ Back to Portfolio</Link>
      </div>
    </div>
  );
};

export default CategoryPortfolio;
