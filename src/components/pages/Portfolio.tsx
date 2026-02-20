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
      setFeatures(data.sort((a: Post, b: Post) => a.sort_order - b.sort_order));
    }

    loadPortfolio();
    verify();
  }, []);

  return (
    <>
      <div className="portfolio-container">
        <header className="portfolio-header">
          <h1>Portfolio</h1>
          <p>
            Here you can view a selection of my work across software, digital
            marketing, journalism, and program leadership. I created this page
            to share a clean snapshot of my toolkit with potential collaborators
            — but feel free to browse if you're just looking around!
          </p>
        </header>
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
