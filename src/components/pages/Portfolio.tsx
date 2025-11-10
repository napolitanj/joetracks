import { useEffect, useState } from "react";
import { checkAuth } from "../../utils/checkAuth";
import { Link } from "react-router-dom";
import PortfolioFeature from "../PortfolioFeature";
import "../../styles/Portfolio.css";

type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  position: number;
  linkText: string;
  sort_order: number;
};

const Portfolio = () => {
  const [features, setFeatures] = useState<Post[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    async function verify() {
      const authorized = await checkAuth();
      setIsAuthorized(authorized);
    }

    async function loadPortfolio() {
      const res = await fetch("https://api.joetracks.com/api/portfolio");
      const data = await res.json();
      setFeatures(data.sort((a: Post, b: Post) => b.sort_order - a.sort_order));
    }

    loadPortfolio();
    verify();
  }, []);

  return (
    <>
      <div className="portfolio-container">
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
      </div>
    </>
  );
};

export default Portfolio;
